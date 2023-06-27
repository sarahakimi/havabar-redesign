import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { CardHeader } from '@mui/material'
import CardContent from '@mui/material/CardContent'

const schema = yup.object().shape({
  insurance: yup
    .number()
    .min(0, 'باید عدد طبیعی باشد')
    .max(100, 'درصد باید عددی بین 0 و 100 باشد')
    .typeError('باید عدد باشد')
    .required('الزامی است'),

  services: yup.number().typeError('به درستی وارد کمید'),

  stamp: yup.number().typeError('به درستی وارد کمید'),

  value_added: yup
    .number()
    .min(0, 'باید عدد طبیعی باشد')
    .max(100, 'درصد باید عددی بین 0 و 100 باشد')
    .typeError('باید عدد باشد')
    .required('الزامی است')
})

function OtherPrice({ setChange, user, addFunc }) {
  const emptyForm = {
    insurance: 0,
    services: 0,
    stamp: 0,
    value_added: 0
  }

  const defaultValues = user
    ? {
        insurance: user.insurance,
        services: user.services,
        stamp: user.stamp,
        value_added: user.value_added
      }
    : emptyForm

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  useEffect(() => reset(user), [user])

  const onSubmit = async data => {
    toast.promise(
      addFunc(data).then(() => {
        setChange(true)
      }),
      {
        loading: 'در حال ذخیره اطلاعات قیمت',
        success: 'اطلاعات قیمت ذخیره شد',
        error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
      }
    )
  }

  return (
    <Card>
      <CardHeader title='سابر هزینه ها' />

      <CardContent
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
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='insurance'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label=' بیمه (درصد)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.insurance)}
                      inputProps={{ maxLength: 11, min: 0, style: { textAlign: 'left' } }}
                    />
                  )}
                />
                {errors.insurance && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.insurance.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='services'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label=' هزینه خدمات(ریال)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.services)}
                      inputProps={{ maxLength: 11, min: 0, style: { textAlign: 'left' } }}
                    />
                  )}
                />
                {errors.services && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.services.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='stamp'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='هزینه تمبر (ریال)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.stamp)}
                      inputProps={{ maxLength: 11, min: 0, style: { textAlign: 'left' } }}
                    />
                  )}
                />
                {errors.stamp && <FormHelperText sx={{ color: 'error.main' }}>{errors.stamp.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='value_added'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label=' ارزش افزوده (درصد)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.value_added)}
                      inputProps={{ maxLength: 11, min: 0, style: { textAlign: 'left' } }}
                    />
                  )}
                />
                {errors.value_added && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.value_added.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <Button size='large' type='submit' variant='contained' sx={{ mr: 3 }} fullWidth>
                ذخیره
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default OtherPrice
