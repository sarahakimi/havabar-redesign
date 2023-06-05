import React, { useEffect, useState } from 'react'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import Close from 'mdi-material-ui/Close'
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import DialogContentText from '@mui/material/DialogContentText'
import toast from 'react-hot-toast'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid'
import http from '../../services/http'
import { registerUser } from './requests'
import Table from './table'

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const schema = yup.object().shape({
  logistic_id: yup.number().typeError('به درستی وارد نمایید ').required('فیلد الزامی').min(1, 'فیلد الزامی'),
  manifest_number: yup.number().typeError('به درستی وارد نمایید ').required('فیلد الزامی').min(1, 'فیلد الزامی')
})

function SidebarAddCourier({ open, toggle, setChange, user, showUser }) {
  const [success, setSuccess] = useState(false)

  const emptyForm = {
    logistic_id: 0,
    manifest_number: 0
  }

  const defaultValues = user || emptyForm

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
  const [barnames, setabarnames] = useState([])

  const handleClose = () => {
    toggle()
    reset(emptyForm)
  }

  const [tableData, setTableData] = useState([])

  const onSubmit = async data => {
    if (barnames.length === 0) {
      toast.error('حداقل ۱ بارنامه انتخاب کنید')

      return
    }

    const barnameGeneratedId = barnames.flatMap(
      element => tableData.find(barname => barname.id === element).generated_id
    )

    toast.promise(
      registerUser({ ...data, barname_ids: barnameGeneratedId }).then(() => {
        setChange(true)
        handleClose()
      }),
      {
        loading: 'در حال ایجاد مانیفست',
        success: 'مانیفست ایجاد شد',
        error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
      }
    )
  }

  const handleDialogClose = () => {
    setSuccess(false)
    setChange(true)
  }
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

  return (
    <Drawer
      open={open}
      anchor='left'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: '100%', sm: '100%', lg: '80%', xl: '80%' } } }}
    >
      <Header>
        <Typography variant='h6'>اطلاعات لاجستیک</Typography>
        <Close fontSize='small' onClick={handleClose} sx={{ cursor: 'pointer' }} />
      </Header>
      <Box
        sx={{
          p: 5,
          '& .MuiInputBase-input.Mui-disabled': {
            WebkitTextFillColor: 'rgba(76,78,100,0.87)'
          },
          '& 	.MuiInputLabel-root.Mui-disabled': {
            WebkitTextFillColor: 'rgba(76,78,100,0.87)'
          }
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='manifest_number'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='شماره مانیفست'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.manifest_number)}
                      disabled={showUser}
                      inputProps={{ min: 0, style: { textAlign: 'left' } }}
                    />
                  )}
                />
                {errors.manifest_number && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.manifest_number.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth sx={{ mb: 4 }}>
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
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Table
                setCustomer={setabarnames}
                customer={barnames}
                data={tableData}
                setData={setTableData}
                user={user}
              />
            </Grid>
            {!showUser && (
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <Button size='large' type='submit' variant='contained' sx={{ mr: 3 }} fullWidth>
                  ذخیره
                </Button>
              </Grid>
            )}
          </Grid>
        </form>
      </Box>
      <Dialog open={success} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>ایجاد هاب</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>هاب مورد نظر ایجاد شد</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>متوجه شدم</Button>
        </DialogActions>
      </Dialog>
    </Drawer>
  )
}

export default SidebarAddCourier
