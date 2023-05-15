// ** React Imports
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Typography from '@mui/material/Typography'
import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Autocomplete, Card, CardContent, CardHeader, Grid, MenuItem, Select } from '@mui/material'
import toast from 'react-hot-toast'
import { createOrder } from './requests'

const schema = yup.object().shape({
  senderCodeMelli: yup.string().typeError('به درستی وارد کنید'),
  senderName: yup.string().typeError('به درستی وارد کنید'),
  senderMobile: yup.string().typeError('به درستی وارد کنید'),
  senderPhone: yup.string().typeError('به درستی وارد کنید'),
  senderCompany: yup.string().typeError('به درستی وارد کنید'),
  senderCounty: yup.string().typeError('به درستی وارد کنید'),
  senderCity: yup.string().typeError('به درستی وارد کنید'),
  senderCodePosti: yup.string().typeError('به درستی وارد کنید'),
  senderOtherInfo: yup.string().typeError('به درستی وارد کنید'),
  senderMainRoard: yup.string().typeError('به درستی وارد کنید'),
  senderSubRoad: yup.string().typeError('به درستی وارد کنید'),
  senderAlley: yup.string().typeError('به درستی وارد کنید'),
  senderPlaque: yup.string().typeError('به درستی وارد کنید'),
  senderFloor: yup.string().typeError('به درستی وارد کنید'),
  senderUnit: yup.string().typeError('به درستی وارد کنید'),
  recieverCodeMelli: yup.string().typeError('به درستی وارد کنید'),
  recieverName: yup.string().typeError('به درستی وارد کنید'),
  recieverMobile: yup.string().typeError('به درستی وارد کنید'),
  recieverPhone: yup.string().typeError('به درستی وارد کنید'),
  recieverCompany: yup.string().typeError('به درستی وارد کنید'),
  recieverCounty: yup.string().typeError('به درستی وارد کنید'),
  recieverCity: yup.string().typeError('به درستی وارد کنید'),
  recieverCodePosti: yup.string().typeError('به درستی وارد کنید'),
  recieverMainRoard: yup.string().typeError('به درستی وارد کنید'),
  recieverSubRoad: yup.string().typeError('به درستی وارد کنید'),
  recieverAlley: yup.string().typeError('به درستی وارد کنید'),
  recieverPlaque: yup.string().typeError('به درستی وارد کنید'),
  recieverFloor: yup.string().typeError('به درستی وارد کنید'),
  recieverUnit: yup.string().typeError('به درستی وارد کنید'),
  receiverOtherInfo: yup.string().typeError('به درستی وارد کنید'),
  weight: yup.number().typeError('باید عدد باشد'),
  length: yup.number().typeError('باید عدد باشد'),
  width: yup.number().typeError('باید عدد باشد'),
  height: yup.number().typeError('باید عدد باشد'),
  money: yup.number().typeError('باید عدد باشد'),
  needsSpecialCarry: yup.boolean().typeError('به درستی انتخاب کنید'),
  SpecialBox: yup.boolean().typeError('به درستی انتخاب کنید'),
  maliat: yup.string().typeError('به درستی وارد کنید'),
  needsPackaging: yup.boolean().typeError('به درستی انتخاب کنید'),
  packaging: yup.string().typeError('به درستی وارد کنید'),
  barType: yup.string().typeError('به درستی وارد کنید'),
  mohtaviat: yup.string().typeError('به درستی وارد کنید'),
  hub: yup.string().typeError('به درستی وارد کنید'),
  collect_price: yup.string().typeError('به درستی وارد کنید'),
  distribution_price: yup.string().typeError('به درستی وارد کنید'),
  paymentMethod: yup.string().typeError('به درستی وارد کنید'),
  paymentType: yup.string().typeError('به درستی وارد کنید'),
  discount: yup.number().typeError('باید عدد باشد'),
  keraye: yup.string().typeError('به درستی وارد کنید'),
  tambr: yup.string().typeError('به درستی وارد کنید'),
  khadamat: yup.string().typeError('به درستی وارد کنید'),
  gheymatgozari: yup.string().typeError('به درستی وارد کنید'),
  bime: yup.string().typeError('به درستی وارد کنید'),
  harkilo: yup.string().typeError('به درستی وارد کنید'),
  allprice: yup.string().typeError('به درستی وارد کنید'),
  bastebandiPrice: yup.string().typeError('به درستی وارد کنید')
})

const emptyForm = {
  senderCodeMelli: '',
  senderName: '',
  senderMobile: '',
  senderPhone: '',
  senderCompany: '',
  senderCounty: '',
  senderCity: '',
  senderCodePosti: '',
  senderOtherInfo: '',
  senderMainRoard: '',
  senderSubRoad: '',
  senderAlley: '',
  senderPlaque: '',
  senderFloor: '',
  senderUnit: '',
  recieverCodeMelli: '',
  recieverName: '',
  recieverMobile: '',
  recieverPhone: '',
  recieverCompany: '',
  recieverCounty: '',
  recieverCity: '',
  recieverCodePosti: '',
  recieverMainRoard: '',
  recieverSubRoad: '',
  recieverAlley: '',
  recieverPlaque: '',
  recieverFloor: '',
  recieverUnit: '',
  receiverOtherInfo: '',
  weight: 0,
  length: 0,
  width: 0,
  height: 0,
  money: 0,
  needsSpecialCarry: false,
  SpecialBox: false,
  maliat: '',
  needsPackaging: false,
  packaging: '',
  barType: '',
  mohtaviat: '',
  hub: '',
  collect_price: '',
  distribution_price: '',
  paymentMethod: '',
  paymentType: '',
  discount: 0,
  keraye: '',
  tambr: '',
  khadamat: '',
  gheymatgozari: '',
  bime: '',
  harkilo: '',
  allprice: '',
  bastebandiPrice: ''
}

const defaultValues = {
  senderCodeMelli: '',
  senderName: '',
  senderMobile: '',
  senderPhone: '',
  senderCompany: '',
  senderCounty: '',
  senderCity: '',
  senderCodePosti: '',
  senderOtherInfo: '',
  senderMainRoard: '',
  senderSubRoad: '',
  senderAlley: '',
  senderPlaque: '',
  senderFloor: '',
  senderUnit: '',
  recieverCodeMelli: '',
  recieverName: '',
  recieverMobile: '',
  recieverPhone: '',
  recieverCompany: '',
  recieverCounty: '',
  recieverCity: '',
  recieverCodePosti: '',
  recieverMainRoard: '',
  recieverSubRoad: '',
  recieverAlley: '',
  recieverPlaque: '',
  recieverFloor: '',
  recieverUnit: '',
  receiverOtherInfo: '',
  weight: 0,
  length: 0,
  width: 0,
  height: 0,
  money: 0,
  needsSpecialCarry: false,
  SpecialBox: false,
  maliat: '',
  needsPackaging: false,
  packaging: '',
  barType: '',
  mohtaviat: '',
  hub: '',
  collect_price: '',
  distribution_price: '',
  paymentMethod: '',
  paymentType: '',
  discount: 0,
  keraye: '',
  tambr: '',
  khadamat: '',
  gheymatgozari: '',
  bime: '',
  harkilo: '',
  allprice: '',
  bastebandiPrice: ''
}

const paymentMethod = ['پیش کرایه', 'پس کرایه']

const barType = [
  'فروش اینترنتی',
  'لوازم پزشکی',
  'مواد غذایی',
  'لوازم تزئینی',
  'گل و گیاه',
  'دکوراسیون',
  'لوازم الکترونیکی',
  'اواراق'
]

const packaging = ['پاکت-Envelope', 'بسته-Package', 'کارتن-Box']

const paymentType = ['کارتخوان-خرید', 'کارتخوان-مشتری', 'سرویس پرداخت-کارتخوان', 'نقدی']
function ACLPage() {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    const config = {
      bar_weight: data.weight,
      collect: data.collect_price,
      distribution: data.distribution_price,

      // grouping_price: data,
      hub_destination_name: data.hub,
      off_price: data.discount,
      payment_method: data.paymentType,
      rate_in_kilograms: data.harkilo,
      sender_address: `${data.senderMainRoard}- خیابان ${data.senderSubRoad} -کوچه ${data.senderAlley} - پلاک ${data.senderPlaque} - طبقه ${data.senderFloor} - واحد ${data.senderUnit}`,
      receiver_address: `${data.recieverMainRoard}- خیابان ${data.recieverSubRoad} -کوچه ${data.recieverAlley} - پلاک ${data.recieverPlaque} - طبقه ${data.recieverFloor} - واحد ${data.recieverUnit}`,
      receiver_city: data.recieverCity,
      receiver_name: data.recieverName,
      receiver_phone_number: data.recieverMobile,
      rent_price: data.keraye,
      sender_city: data.senderCity,
      sender_name: data.senderName,
      sender_phone_number: data.senderMobile,
      stamp_price: data.tambr,
      taxation_price: data.maliat,
      total: data.allprice,
      sender_natural_number: data.senderCodeMelli,
      receiver_natural_number: data.recieverCodeMelli
    }
    toast.promise(
      createOrder(config).then(() => {
        reset(emptyForm)
      }),
      {
        loading: 'در حال ثبت سفارش',
        success: 'سفارش ثبت شد',
        error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
      }
    )
  }

  return (
    <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <Card
        sx={{
          p: 5,
          '& .MuiInputBase-input.Mui-disabled': {
            WebkitTextFillColor: 'blue'
          },
          '& 	.MuiInputLabel-root.Mui-disabled': {
            WebkitTextFillColor: 'rgba(76,78,100,0.87)'
          },
          mb: 5
        }}
      >
        <CardHeader title='فرستنده' />

        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='senderCodeMelli'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='کدملی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderCodeMelli)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.senderCodeMelli && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.senderCodeMelli.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='senderName'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='نام و نام خانوادگی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderName)}
                      inputProps={{ maxLength: 50 }}
                    />
                  )}
                />
                {errors.senderName && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.senderName.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='senderMobile'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='موبایل'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderMobile)}
                      inputProps={{ maxLength: 11 }}
                      placeholder='09*********'
                      dir='ltr'
                    />
                  )}
                />
                {errors.senderMobile && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.senderMobile.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='senderPhone'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='تلفن'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderPhone)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.senderPhone && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.senderPhone.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='senderCompany'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='شرکت'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderCompany)}
                    />
                  )}
                />
                {errors.senderCompany && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.senderCompany.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='senderCounty'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='استان'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderCounty)}
                    />
                  )}
                />
                {errors.senderCounty && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.senderCounty.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='senderCity'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='شهر'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderCity)}
                    />
                  )}
                />
                {errors.senderCity && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.senderCity.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='senderCodePosti'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='کدپستی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderCodePosti)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.senderCodePosti && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.senderCodePosti.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <FormControl fullWidth>
                <Controller
                  name='senderOtherInfo'
                  control={control}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='سایر اطلاعات'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderOtherInfo)}
                      inputProps={{ maxLength: 10 }}
                    />
                  )}
                />
                {errors.senderOtherInfo && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.senderOtherInfo.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography variant='h6' component='p' mb={4}>
                آدرس
              </Typography>
            </Grid>{' '}
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='senderMainRoard'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='خیابان اصلی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderMainRoard)}
                    />
                  )}
                />
                {errors.senderMainRoard && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.senderMainRoard.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='senderSubRoad'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='خیابان فرعی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderSubRoad)}
                    />
                  )}
                />
                {errors.senderSubRoad && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.senderSubRoad.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='senderAlley'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='کوچه'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderAlley)}
                    />
                  )}
                />
                {errors.senderAlley && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.senderAlley.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
              <FormControl fullWidth>
                <Controller
                  name='senderPlaque'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='پلاک'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderPlaque)}
                    />
                  )}
                />
                {errors.senderPlaque && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.senderPlaque.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
              <FormControl fullWidth>
                <Controller
                  name='senderFloor'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='طبقه'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderFloor)}
                    />
                  )}
                />
                {errors.senderFloor && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.senderFloor.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
              <FormControl fullWidth>
                <Controller
                  name='senderUnit'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='واحد'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderUnit)}
                      inputProps={{ maxLength: 10 }}
                    />
                  )}
                />
                {errors.senderUnit && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.senderUnit.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card
        sx={{
          p: 5,
          '& .MuiInputBase-input.Mui-disabled': {
            WebkitTextFillColor: 'blue'
          },
          '& 	.MuiInputLabel-root.Mui-disabled': {
            WebkitTextFillColor: 'rgba(76,78,100,0.87)'
          },
          mb: 5
        }}
      >
        <CardHeader title='گیرنده' />

        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='recieverCodeMelli'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='کدملی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverCodeMelli)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.recieverCodeMelli && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverCodeMelli.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='recieverName'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='نام و نام خانوادگی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverName)}
                      inputProps={{ maxLength: 50 }}
                    />
                  )}
                />
                {errors.recieverName && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverName.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='recieverMobile'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='موبایل'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverMobile)}
                      placeholder='09*********'
                      dir='ltr'
                    />
                  )}
                />
                {errors.recieverMobile && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverMobile.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='recieverPhone'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='تلفن'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverPhone)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.recieverPhone && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverPhone.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='recieverCompany'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='شرکت'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverCompany)}
                      disabled
                    />
                  )}
                />
                {errors.recieverCompany && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverCompany.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='recieverCounty'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='استان'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverCounty)}
                      disabled
                    />
                  )}
                />
                {errors.recieverCounty && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverCounty.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='recieverCity'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='شهر'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverCity)}
                      disabled
                    />
                  )}
                />
                {errors.recieverCity && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverCity.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='recieverCodePosti'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='کدپستی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverCodePosti)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.recieverCodePosti && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverCodePosti.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <FormControl fullWidth>
                <Controller
                  name='receiverOtherInfo'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='سایر اطلاعات'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.receiverOtherInfo)}
                      inputProps={{ maxLength: 10 }}
                    />
                  )}
                />
                {errors.receiverOtherInfo && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.receiverOtherInfo.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography variant='h6' component='p'>
                آدرس
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='recieverMainRoard'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='خیابان اصلی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverMainRoard)}
                      inputProps={{ maxLength: 10 }}
                    />
                  )}
                />
                {errors.recieverMainRoard && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverMainRoard.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='recieverSubRoad'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='خیابان فرعی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverSubRoad)}
                      inputProps={{ maxLength: 10 }}
                    />
                  )}
                />
                {errors.recieverSubRoad && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverSubRoad.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='recieverAlley'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='کوچه'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverAlley)}
                      inputProps={{ maxLength: 10 }}
                    />
                  )}
                />
                {errors.recieverAlley && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverAlley.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
              <FormControl fullWidth>
                <Controller
                  name='recieverPlaque'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='پلاک'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverPlaque)}
                      inputProps={{ maxLength: 10 }}
                    />
                  )}
                />
                {errors.recieverPlaque && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverPlaque.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
              <FormControl fullWidth>
                <Controller
                  name='recieverFloor'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='طبقه'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverFloor)}
                      inputProps={{ maxLength: 10 }}
                    />
                  )}
                />
                {errors.recieverFloor && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverFloor.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
              <FormControl fullWidth>
                <Controller
                  name='recieverUnit'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='واحد'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverUnit)}
                      inputProps={{ maxLength: 10 }}
                    />
                  )}
                />
                {errors.recieverUnit && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverUnit.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ mb: 5, p: 5 }}>
        <CardHeader title='مرسوله' />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='weight'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='وزن (گرم)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.weight)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.weight && <FormHelperText sx={{ color: 'error.main' }}>{errors.weight.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='length'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='طول (سانتی متر)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.length)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.length && <FormHelperText sx={{ color: 'error.main' }}>{errors.length.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='width'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='عرض (سانتی متر)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.width)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.width && <FormHelperText sx={{ color: 'error.main' }}>{errors.width.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='height'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='ارتفاع (سانتی متر)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.height)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.height && <FormHelperText sx={{ color: 'error.main' }}>{errors.height.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='money'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='ارزش کالا (ریال)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.money)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.money && <FormHelperText sx={{ color: 'error.main' }}>{errors.money.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='needsSpecialCarry'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <>
                      <InputLabel>نیاز به حمل ویژه</InputLabel>
                      <Select
                        label='نیاز به حمل ویژه'
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        error={Boolean(errors.needsSpecialCarry)}
                      >
                        <MenuItem value>دارد</MenuItem>
                        <MenuItem value={false}>ندارد</MenuItem>
                      </Select>
                    </>
                  )}
                />
                {errors.needsSpecialCarry && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.needsSpecialCarry.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='maliat'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='مالیات و عوارض (ریال)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.maliat)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.maliat && <FormHelperText sx={{ color: 'error.main' }}>{errors.maliat.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='needsPackaging'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <>
                      <InputLabel>نیاز به بسته بندی</InputLabel>
                      <Select
                        label='نیاز به بسته بندی'
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        error={Boolean(errors.needsPackaging)}
                      >
                        <MenuItem value>دارد</MenuItem>
                        <MenuItem value={false}>ندارد</MenuItem>
                      </Select>
                    </>
                  )}
                />
                {errors.needsPackaging && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.needsPackaging.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='packaging'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <Autocomplete
                      onBlur={onBlur}
                      select
                      options={packaging}
                      onChange={(event, values) => onChange(values)}
                      value={value}
                      disableClearable
                      renderInput={params => (
                        <TextField
                          /* eslint-disable-next-line react/jsx-props-no-spreading */
                          {...params}
                          label='بسته یندی'
                          variant='outlined'
                          onChange={onChange}
                          error={Boolean(errors.packaging)}
                        />
                      )}
                    />
                  )}
                />
                {errors.packaging && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.packaging.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='barType'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <Autocomplete
                      onBlur={onBlur}
                      select
                      options={barType}
                      onChange={(event, values) => onChange(values)}
                      value={value}
                      disableClearable
                      renderInput={params => (
                        <TextField
                          /* eslint-disable-next-line react/jsx-props-no-spreading */
                          {...params}
                          label='نوع بار'
                          variant='outlined'
                          onChange={onChange}
                          error={Boolean(errors.barType)}
                        />
                      )}
                    />
                  )}
                />
                {errors.barType && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.barType.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <FormControl fullWidth>
                <Controller
                  name='mohtaviat'
                  control={control}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='محتویات'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.mohtaviat)}
                      inputProps={{ maxLength: 10 }}
                      dir='rtl'
                    />
                  )}
                />
                {errors.mohtaviat && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.mohtaviat.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ mb: 5, p: 5 }}>
        <CardHeader title='پرداخت' />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='paymentMethod'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <Autocomplete
                      onBlur={onBlur}
                      select
                      options={paymentMethod}
                      onChange={(event, values) => onChange(values)}
                      value={value}
                      disableClearable
                      renderInput={params => (
                        <TextField
                          /* eslint-disable-next-line react/jsx-props-no-spreading */
                          {...params}
                          label='نحوه پرداخت'
                          variant='outlined'
                          onChange={onChange}
                          error={Boolean(errors.paymentMethod)}
                        />
                      )}
                    />
                  )}
                />
                {errors.paymentMethod && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.paymentMethod.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='paymentType'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <Autocomplete
                      onBlur={onBlur}
                      select
                      options={paymentType}
                      onChange={(event, values) => onChange(values)}
                      value={value}
                      disableClearable
                      renderInput={params => (
                        <TextField
                          /* eslint-disable-next-line react/jsx-props-no-spreading */
                          {...params}
                          label='نوع پرداخت'
                          variant='outlined'
                          onChange={onChange}
                          error={Boolean(errors.paymentType)}
                        />
                      )}
                    />
                  )}
                />
                {errors.paymentType && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.paymentType.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='discount'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='مبلغ تخفیف'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.discount)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.discount && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.discount.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='hub'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='هاب مقصد'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.hub)}
                    />
                  )}
                />
                {errors.hub && <FormHelperText sx={{ color: 'error.main' }}>{errors.hub.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='collect_price'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='هزینه جمع آوری'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.collect_price)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.collect_price && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.collect_price.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='distribution_price'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='هزینه توزیع'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.distribution_price)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.distribution_price && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.distribution_price.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='keraye'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='کرایه'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.keraye)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.keraye && <FormHelperText sx={{ color: 'error.main' }}>{errors.keraye.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='tambr'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='تمبر و بارنامه'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.tambr)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.tambr && <FormHelperText sx={{ color: 'error.main' }}>{errors.tambr.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='khadamat'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='خدمات'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.khadamat)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.khadamat && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.khadamat.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='ghematgozari'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='قیمت گذاری'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.ghematgozari)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.ghematgozari && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.ghematgozari.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='bime'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='بیمه'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.bime)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.bime && <FormHelperText sx={{ color: 'error.main' }}>{errors.bime.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='bastebandiPrice'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='هزینه بسته بندی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.bastebandiPrice)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.bastebandiPrice && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.bastebandiPrice.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='harkilo'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='قیمت هر کیلو'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.harkilo)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.harkilo && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.harkilo.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='allprice'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='مجموع هزینه ها'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.allprice)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.allprice && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.allprice.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Button size='large' type='submit' variant='contained' sx={{ m: 1 }}>
        ثبت سفارش
      </Button>
    </form>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'every-page'
}

export default ACLPage
