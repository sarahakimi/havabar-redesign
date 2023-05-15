import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { Dialog, DialogTitle, DialogContentText, DialogActions, DialogContent, TextField } from '@mui/material'
import toast from 'react-hot-toast'
import http from 'services/http'
import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import { assignToPeyk } from './requests'

const schema = yup.object().shape({
  explain: yup.string().typeError('به درستی وارد کنید'),
  peyk_id: yup.number().required(' الزامی است').min(0, 'به درستی انتخاب کنید')
})
function AddPeykDiaolg({ open, setOpen, setChange, id }) {
  const emptyForm = {
    explain: '',
    peyk_id: -1
  }

  const {
    reset,
    control,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const defaultValues = emptyForm
  const handleClose = () => setOpen(false)
  const [peyks, setPeyks] = useState([])
  useEffect(() => {
    function getPeyks() {
      http
        .get(
          'getpeyks/',
          {},
          {
            Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
          }
        )
        .then(async response => {
          if (response.data.peyks != null) {
            setPeyks(response.data.peyks)
          } else setPeyks([])
        })
        .catch(err => {
          setError('peyk_id', { type: 'custom', message: err.response.data.message })
          toast.error('خطا در دریافت اطلاعات.لطفا مجدد تلاش کنید')
        })
    }
    getPeyks()
  }, [])

  const onSubmit = async data => {
    toast.promise(
      assignToPeyk(id, data).then(() => {
        setChange(true)
        handleClose()
        reset(emptyForm)
      }),
      {
        loading: 'در حال انتساب به پیک',
        success: 'با موفقیت انجام شد',
        error: err => (err.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
      }
    )
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>انتساب به پیک</DialogTitle>
        <DialogContent sx={{ mb: 4 }}>
          <DialogContentText>لطفا راننده مورد نظر برای سفارش {id} را انتخاب کنید</DialogContentText>
          <FormControl fullWidth sx={{ my: 4 }}>
            <Controller
              name='peyk_id'
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur } }) => (
                <>
                  <InputLabel>راننده</InputLabel>
                  <Select
                    type='number'
                    onBlur={onBlur}
                    id='demo-multiple-name'
                    onChange={onChange}
                    input={<OutlinedInput label='Name' />}
                    error={Boolean(errors.peyk_id)}
                  >
                    {peyks.length === 0 ? (
                      <MenuItem value={undefined}>راننده موجود نیست</MenuItem>
                    ) : (
                      peyks.map(peyk => (
                        <MenuItem key={peyk.id} value={parseInt(peyk.id, 10)} disabled={peyk.id === 0}>
                          {peyk.name}({peyk.id})
                        </MenuItem>
                      ))
                    )}
                  </Select>
                </>
              )}
            />
            {errors.peyk_id && <FormHelperText sx={{ color: 'error.main' }}>{errors.peyk_id.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='explain'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='توضیحات'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.explain)}
                />
              )}
            />
            {errors.explain && <FormHelperText sx={{ color: 'error.main' }}>{errors.explain.message}</FormHelperText>}
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>انصراف</Button>
          <Button type='submit'>ثبت</Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default AddPeykDiaolg
