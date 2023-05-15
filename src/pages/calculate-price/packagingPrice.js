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
  palet_small: yup.number().typeError('به درستی وارد کمید'),
  palet_medium: yup.number().typeError('به درستی وارد کمید'),
  palet_big: yup.number().typeError('به درستی وارد کمید'),
  Envelope_small: yup.number().typeError('به درستی وارد کمید'),
  Envelope_medium: yup.number().typeError('به درستی وارد کمید'),
  Envelope_big: yup.number().typeError('به درستی وارد کمید'),
  package_small: yup.number().typeError('به درستی وارد کمید'),
  package_medium: yup.number().typeError('به درستی وارد کمید'),
  package_big: yup.number().typeError('به درستی وارد کمید'),
  box_small: yup.number().typeError('به درستی وارد کمید'),
  box_medium: yup.number().typeError('به درستی وارد کمید'),
  box_big: yup.number().typeError('به درستی وارد کمید'),
  bag_small: yup.number().typeError('به درستی وارد کمید'),
  bag_medium: yup.number().typeError('به درستی وارد کمید'),
  bag_big: yup.number().typeError('به درستی وارد کمید')
})

function packagingForm({ setChange, user, addFunc }) {
  const emptyForm = {
    palet_small: 0,
    palet_medium: 0,
    palet_big: 0,
    Envelope_small: 0,
    Envelope_medium: 0,
    Envelope_big: 0,
    package_small: 0,
    package_medium: 0,
    package_big: 0,
    box_small: 0,
    box_medium: 0,
    box_big: 0,
    bag_small: 0,
    bag_medium: 0,
    bag_big: 0
  }

  const defaultValues = user
    ? {
        palet_small: user.palet_small,
        palet_medium: user.palet_medium,
        palet_big: user.palet_big,
        Envelope_small: user.Envelope_small,
        Envelope_medium: user.Envelope_medium,
        Envelope_big: user.Envelope_big,
        package_small: user.package_small,
        package_medium: user.package_medium,
        package_big: user.package_big,
        box_small: user.box_small,
        box_medium: user.box_medium,
        box_big: user.box_big,
        bag_small: user.bag_small,
        bag_medium: user.bag_medium,
        bag_big: user.bag_big
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
        error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
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
                  name='Envelope_small'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='قیمت پاکت کوچک (ریال)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.Envelope_small)}
                      inputProps={{ maxLength: 11 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.Envelope_small && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.Envelope_small.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='Envelope_medium'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='قیمت پاکت متوسط (ریال)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.Envelope_medium)}
                      inputProps={{ maxLength: 11 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.Envelope_medium && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.Envelope_medium.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='Envelope_big'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='قیمت پاکت بزرگ (ریال)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.Envelope_big)}
                      inputProps={{ maxLength: 11 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.Envelope_big && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.Envelope_big.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3} />
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='package_small'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='قیمت بسته کوچک (ریال)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.package_small)}
                      inputProps={{ maxLength: 11 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.package_small && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.package_small.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='package_medium'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='قیمت بسته متوسط (ریال)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.package_medium)}
                      inputProps={{ maxLength: 11 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.package_medium && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.package_medium.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='package_big'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='قیمت بسته بزرگ (ریال)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.package_big)}
                      inputProps={{ maxLength: 11 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.package_big && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.package_big.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3} />
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='box_small'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='قیمت کارتن کوچک (ریال)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.box_small)}
                      inputProps={{ maxLength: 11 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.box_small && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.box_small.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='box_medium'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='قیمت کارتن متوسط (ریال)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.box_medium)}
                      inputProps={{ maxLength: 11 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.box_medium && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.box_medium.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='box_big'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='قیمت کارتن بزرگ (ریال)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.box_big)}
                      inputProps={{ maxLength: 11 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.box_big && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.box_big.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3} />
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='bag_small'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='قیمت کیسه کوچک (ریال)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.bag_small)}
                      inputProps={{ maxLength: 11 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.bag_small && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.bag_small.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='bag_medium'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='قیمت کیسه متوسط (ریال)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.bag_medium)}
                      inputProps={{ maxLength: 11 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.bag_medium && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.bag_medium.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='bag_big'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='قیمت کیسه بزرگ (ریال)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.bag_big)}
                      inputProps={{ maxLength: 11 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.bag_big && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.bag_big.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3} />
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='palet_small'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='قیمت پالت کوچک (ریال)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.palet_small)}
                      inputProps={{ maxLength: 11 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.palet_small && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.palet_small.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='palet_medium'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='قیمت پالت متوسط (ریال)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.palet_medium)}
                      inputProps={{ maxLength: 11 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.palet_medium && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.palet_medium.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='palet_big'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='قیمت پالت بزرگ (ریال)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.palet_big)}
                      inputProps={{ maxLength: 11 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.palet_big && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.palet_big.message}</FormHelperText>
                )}
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

export default packagingForm
