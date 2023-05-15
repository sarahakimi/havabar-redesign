// ** React Imports
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Typography from '@mui/material/Typography'
import { ostan, shahr } from 'iran-cities-json'
import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Autocomplete, Card, CardContent, CardHeader, Grid, Modal } from '@mui/material'
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import toast from 'react-hot-toast'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import Table from 'pages/newOrder/table'
import NewCustomwr from 'pages/newOrder/newCustomer'
import { createOrder } from './requests'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
}

const schema = yup.object().shape({
  senderCodeMelli: yup
    .string()
    .required('کدملی فرستنده الزامی است')
    .matches(/d*/, 'کدملی باید عدد باشد')
    .test('len', 'کدملی باید 10 رقم باشد', val => val.toString().length === 10),
  senderName: yup.string().required('نام و نام خانوادگی فرستنده الزامی است').min(5, 'فیلد را به درستی پر کنید'),
  senderMobile: yup
    .string()
    .required('موبایل فرستنده الزامی است')
    .matches(/09d*/, ' موبایل باید عدد باشد و با 09 شروع شود')
    .test('len', 'موبایل باید 11 رقم باشد', val => val.toString().length === 11),
  senderPhone: yup
    .string()
    .required('تلفن فرستنده الزامی است')
    .matches(/d*/, ' تلفن باید عدد باشد')
    .min(3, 'تلفن باید حداقل 3 رقم باشد'),
  senderCompany: yup.string().typeError('به درستی وارد کنید'),
  senderCounty: yup.string().required('استان الزامی است').typeError('الزامی است'),
  senderCity: yup.string().required('شهر الزامی است'),
  senderCodePosti: yup
    .string()
    .required('کدپستی فرستنده الزامی است')
    .matches(/d*/, 'کدپستی باید عدد باشد')
    .test('len', 'کدپستی باید 10 رقم باشد', val => val.toString().length === 10),
  senderOtherInfo: yup.string().typeError('به درستی وارد کنید'),
  senderMainRoard: yup.string().required('خیابان اصلی الزامی است'),
  senderSubRoad: yup.string().required('خیابان فرعی الزامی است'),
  senderAlley: yup.string().required('کوچه الزامی است'),
  senderPlaque: yup.string().required('پلاک الزامی است').matches(/d*/, 'باید عدد باشد'),
  senderFloor: yup.string().required('طبقه الزامی است').matches(/d*/, 'باید عدد باشد'),
  senderUnit: yup.string().required('واحد الزامی است').matches(/d*/, 'باید عدد باشد'),
  money: yup.number().required('مبلغ الزامی است').typeError('باید عدد باشد').min(1, 'حداقل باید 1 ریال باشد'),
  for: yup.string().typeError('به درستی وارد نمایید')
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
  for: '',
  money: 0
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
  for: '',
  money: 0
}

function ACLPage() {
  const [selectedSenderOstan, setSelectedSenderOstan] = useState('')

  const [newSenderOpen, setNewSenderOpen] = useState(false)
  const [change, setChange] = useState(false)

  const togglenewSenderOpen = () => setNewSenderOpen(!newSenderOpen)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [sender, setSender] = useState({})

  const [hasSender, setHasSender] = useState(false)
  const [submitType, setSubmitType] = useState('')
  const [senderDefaultAddress, setSenderDefaultAddress] = useState(true)

  const {
    control,
    reset,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  function onChangeSenderOstan(event, onChange, values) {
    onChange(values)
    setSelectedSenderOstan(ostan.find(element => element.name === event.target.innerText)?.id)
  }

  const onsetSenderCustomer = () => {
    setHasSender(true)

    setValue('senderName', sender.full_name, { shouldValidate: true })
    setValue('senderCodeMelli', sender.natural_number, { shouldValidate: true })
    setValue('senderCompany', sender.sherkat_name, { shouldValidate: true })
    setValue('senderMobile', sender.phone_number, { shouldValidate: true })
    setValue('senderPhone', sender.tel_number, { shouldValidate: true })
    setValue('senderCounty', sender.ostan, { shouldValidate: true })

    setSelectedSenderOstan(ostan.find(element => element.name === sender.ostan)?.id)
    setValue('senderCity', sender.shahr, { shouldValidate: true })
    setValue('senderCodePosti', sender.postal_code, { shouldValidate: true })
    setValue('senderMainRoard', sender.khiaban_asli, { shouldValidate: true })
    setValue('senderSubRoad', sender.khiaban_faree, { shouldValidate: true })
    setValue('senderAlley', sender.kooche, { shouldValidate: true })
    setValue('senderPlaque', sender.plak, { shouldValidate: true })
    setValue('senderFloor', sender.tabaghe, { shouldValidate: true })
    setValue('senderUnit', sender.vahed, { shouldValidate: true })
    setValue('senderOtherInfo', sender.other_information, { shouldValidate: true })

    handleClose()
  }

  const emptySender = () => {
    setHasSender(false)
    setValue('senderName', '', { shouldTouch: true })
    setValue('senderCodeMelli', '', { shouldTouch: true })
    setValue('senderCompany', '', { shouldTouch: true })
    setValue('senderMobile', '', { shouldTouch: true })
    setValue('senderPhone', '', { shouldTouch: true })
    setValue('senderCounty', '', { shouldTouch: true })

    setSelectedSenderOstan('')
    setValue('senderCity', '', { shouldTouch: true })
    setValue('senderCodePosti', '', { shouldTouch: true })
    setValue('senderMainRoard', '', { shouldTouch: true })
    setValue('senderSubRoad', '', { shouldTouch: true })
    setValue('senderAlley', '', { shouldTouch: true })
    setValue('senderPlaque', '', { shouldTouch: true })
    setValue('senderFloor', '', { shouldTouch: true })
    setValue('senderUnit', '', { shouldTouch: true })
    setValue('senderOtherInfo', '', { shouldTouch: true })
  }

  useEffect(() => {
    if (change) {
      if (Object?.keys(sender).length !== 0) {
        onsetSenderCustomer()
      }
      setChange(false)
    }
  }, [change])

  const onSubmit = data => {
    if (submitType === 'submit') {
      const config = {
        sender_address: `${data.senderMainRoard}- خیابان ${data.senderSubRoad} -کوچه ${data.senderAlley} - پلاک ${data.senderPlaque} - طبقه ${data.senderFloor} - واحد ${data.senderUnit}`,
        client_explain: data.for,
        cost: data.money,
        sender_natural_number: data.senderCodeMelli
      }
      toast.promise(
        createOrder(config).then(() => {
          reset(emptyForm)

          setHasSender(false)
        }),
        {
          loading: 'در حال ثبت سفارش',
          success: 'سفارش ثبت شد',
          error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
        }
      )
    }
  }

  const clickedOnSubmit = type => {
    setSubmitType(type)
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
        <CardHeader
          title='فرستنده'
          subheader={
            hasSender ? (
              <Button onClick={emptySender} color='error'>
                حذف مشتری انتخاب شده
              </Button>
            ) : (
              <>
                <Button onClick={handleOpen}>جستجوی مشتری</Button>
                <Button onClick={togglenewSenderOpen}>افزودن مشتری</Button>
              </>
            )
          }
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={{ ...style }}>
            <h2 id='modal-modal-title'>انتخاب فرستنده</h2>
            <Table setCustomer={setSender} customer={sender} />
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Button variant='contained' color='primary' onClick={() => setChange(true)} sx={{ mx: 2 }}>
                انتخاب{' '}
              </Button>
              <Button variant='contained' color='error' onClick={handleClose}>
                بستن
              </Button>
            </Box>
          </Box>
        </Modal>
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
                      disabled
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
                      disabled
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
                      disabled
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
                      inputProps={{ maxLength: 9 }}
                      disabled
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
                      disabled
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
                  fullWidth
                  name='senderCounty'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value, onBlur } }) => (
                    <Autocomplete
                      onBlur={onBlur}
                      select
                      options={ostan.map(element => element.name)}
                      onChange={(event, values, value) => onChangeSenderOstan(event, onChange, values, value)}
                      value={value}
                      disableClearable
                      disabled
                      renderInput={params => (
                        <TextField
                          /* eslint-disable-next-line react/jsx-props-no-spreading */
                          {...params}
                          label='استان'
                          variant='outlined'
                          onChange={onChange}
                          error={Boolean(errors.senderCounty)}
                        />
                      )}
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
                    <Autocomplete
                      onBlur={onBlur}
                      disabled
                      select
                      options={shahr
                        .filter(element => element.ostan === selectedSenderOstan)
                        .map(element => element.name)}
                      onChange={(event, values) => onChange(values)}
                      value={value}
                      disableClearable
                      renderInput={params => (
                        <TextField
                          /* eslint-disable-next-line react/jsx-props-no-spreading */
                          {...params}
                          label='شهر'
                          variant='outlined'
                          onChange={onChange}
                          error={Boolean(errors.senderCity)}
                        />
                      )}
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
                      disabled
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
                      disabled
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
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <FormControlLabel
                control={
                  <Switch
                    value={senderDefaultAddress}
                    checked={senderDefaultAddress}
                    onChange={() => setSenderDefaultAddress(!senderDefaultAddress)}
                  />
                }
                sx={{ p: 0, m: 0 }}
                labelPlacement='start'
                label='پیش فرض'
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='senderMainRoard'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      disabled={senderDefaultAddress}
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
                      disabled={senderDefaultAddress}
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
                      disabled={senderDefaultAddress}
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
                      disabled={senderDefaultAddress}
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
                      disabled={senderDefaultAddress}
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
                      disabled={senderDefaultAddress}
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

      <Card sx={{ mb: 5, p: 5 }}>
        <CardHeader title='پرداخت' />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='for'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='بابت'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.for)}
                    />
                  )}
                />
                {errors.for && <FormHelperText sx={{ color: 'error.main' }}>{errors.for.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='money'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='قیمت'
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
          </Grid>
        </CardContent>
      </Card>
      <Button size='large' type='submit' variant='contained' sx={{ m: 1 }} onClick={() => clickedOnSubmit('submit')}>
        ثبت سفارش
      </Button>

      <NewCustomwr open={newSenderOpen} toggle={togglenewSenderOpen} setCustomer={setSender} setChange={setChange} />
    </form>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'every-page'
}

export default ACLPage
