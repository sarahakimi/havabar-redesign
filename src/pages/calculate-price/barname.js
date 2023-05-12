import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { CardHeader } from '@mui/material'
import CardContent from '@mui/material/CardContent'

const schema = yup.object().shape({
  from_number: yup.number().typeError('به درستی وارد کمید'),
  to_number: yup
    .number()
    .typeError('به درستی وارد کمید')
    .moreThan(yup.ref('from_number'), 'یابد بیشتر از شماره بارنامه شروع باشد')
})

function Barname({ setChange, user, addFunc }) {
  const emptyForm = {
    from_number: 0,
    to_number: 0
  }

  const defaultValues = user
    ? {
        from_number: user.from_number,
        to_number: user.to_number
      }
    : emptyForm

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = async data => {
    toast.promise(
      addFunc(data).then(() => {
        setChange(true)
      }),
      {
        loading: 'در حال ذخیره اطلاعات قیمت',
        success: 'اطلاعات قیمت ذخیره شد',
        error: err => (err.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
      }
    )
  }

  return (
    <Card>
      <CardHeader title='شماره بارنامه' />

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
                  name='from_number'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='از شماره'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.from_number)}
                      inputProps={{ maxLength: 11 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.from_number && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.from_number.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='to_number'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='تا شماره'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.to_number)}
                      inputProps={{ maxLength: 11 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.to_number && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.to_number.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3} sx={{ textAlign: 'center' }}>
              {/* eslint-disable-next-line no-unsafe-optional-chaining */}
              <Typography>شما {user?.to_number - user?.last_number} عدد بارنامه دارید</Typography>
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

export default Barname
