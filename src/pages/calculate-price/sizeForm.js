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
  small: yup.number().typeError('به درستی وارد کمید'),
  medium: yup.number().typeError('به درستی وارد کمید'),
  large: yup.number().typeError('به درستی وارد کمید')
})

function SizeForm({ setChange, user, addFunc }) {
  const emptyForm = {
    small: 0,
    medium: 0,
    large: 0
  }

  const defaultValues = user
    ? {
        small: user.small,
        medium: user.medium,
        large: user.large
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
        error: err => (err.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
      }
    )
  }

  return (
    <Card>
      <CardHeader title='ابعاد' />

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
                  name='small'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='حداکثر حجم (سانتی متر
مکعب) کوچک'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.small)}
                      inputProps={{ maxLength: 10, min: 0, style: { textAlign: 'left' } }}
                    />
                  )}
                />
                {errors.small && <FormHelperText sx={{ color: 'error.main' }}>{errors.small.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='medium'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='حداکثر حجم (سانتی متر
مکعب) متوسط'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.medium)}
                      inputProps={{ maxLength: 10, min: 0, style: { textAlign: 'left' } }}
                    />
                  )}
                />
                {errors.medium && <FormHelperText sx={{ color: 'error.main' }}>{errors.medium.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='large'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='حداکثر حجم (سانتی متر
مکعب) بزرگ'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.small)}
                      inputProps={{ maxLength: 10, min: 0, style: { textAlign: 'left' } }}
                    />
                  )}
                />
                {errors.large && <FormHelperText sx={{ color: 'error.main' }}>{errors.large.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3} />
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

export default SizeForm
