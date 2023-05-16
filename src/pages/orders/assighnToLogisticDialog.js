import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { Dialog, DialogTitle, DialogContentText, DialogActions, DialogContent } from '@mui/material'
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
import { assignToLogistic } from './requests'

const schema = yup.object().shape({
  logistic_id: yup.number().required(' الزامی است').min(0, 'به درستی انتخاب کنید')
})
function AssignToLogistic({ open, setOpen, setChange, id }) {
  const emptyForm = {
    peyk_id: -1
  }
  const defaultValues = emptyForm

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

  const handleClose = () => setOpen(false)
  const [peyks, setPeyks] = useState([])
  useEffect(() => {
    function getPeyks() {
      http
        .get(
          'logistics/',
          {},
          {
            Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
          }
        )
        .then(async response => {
          if (response.data.logistics != null) {
            setPeyks(response.data.logistics)
          } else setPeyks([])
        })
        .catch(err => {
          setError('logistic_id', { type: 'custom', message: err.response.data.message })
          toast.error('خطا در دریافت اطلاعات.لطفا مجدد تلاش کنید')
        })
    }
    getPeyks()
  }, [])

  const onSubmit = async data => {
    toast.promise(
      assignToLogistic(id, data).then(() => {
        setChange(true)
        handleClose()
        reset(emptyForm)
      }),
      {
        loading: 'در حال انتساب به لاجستیک',
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
          <DialogContentText>لطفا لاجستیک مورد نظر برای سفارش {id} را انتخاب کنید</DialogContentText>
          <FormControl fullWidth sx={{ my: 4 }}>
            <Controller
              name='logistic_id'
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur } }) => (
                <>
                  <InputLabel>لاجستیک</InputLabel>
                  <Select
                    type='number'
                    onBlur={onBlur}
                    id='demo-multiple-name'
                    onChange={onChange}
                    input={<OutlinedInput label='Name' />}
                    error={Boolean(errors.logistic_id)}
                  >
                    {peyks.length === 0 ? (
                      <MenuItem value={undefined}>لاجستیک موجود نیست</MenuItem>
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
            {errors.logistic_id && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.logistic_id.message}</FormHelperText>
            )}
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

export default AssignToLogistic
