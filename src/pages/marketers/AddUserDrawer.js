import { useEffect, useState } from 'react'
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
import { Autocomplete } from '@mui/material'
import { ostan, shahr } from 'iran-cities-json'
import toast from 'react-hot-toast'
import { editUser, registerUser } from './requests'
import Map from '../newOrder/map'

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const schema = yup.object().shape({
  natural_number: yup
    .string()
    .required('کدملی  الزامی است')
    .matches(/d*/, 'کدملی باید عدد باشد')
    .test('len', 'کدملی باید 10 رقم باشد', val => val.toString().length === 10),
  full_name: yup.string().required('نام و نام خانوادگی الزامی است').min(5, 'فیلد را به درستی پر کنید'),
  phone_number: yup
    .string()
    .required('موبایل الزامی است')
    .matches(/09d*/, ' موبایل باید عدد باشد و با 09 شروع شود')
    .test('len', 'موبایل باید 11 رقم باشد', val => val.toString().length === 11),
  tel_number: yup.string().required('تلفن الزامی است').matches(/d*/, ' تلفن باید عدد باشد'),
  postal_code: yup
    .string()
    .min(10, 'باید ۱۰ رقم باشد')
    .required('کدپستی الزامی است')
    .matches(/d*/, ' کدپستی باید عدد باشد'),
  ostan: yup.string().required('استان الزامی است'),
  shahr: yup.string().required('شهر الزامی است'),
  other_information: yup.string(),
  khiaban_asli: yup.string().required('خیابان اصلی الزامی است'),
  khiaban_faree: yup.string().required('خیابان فرعی الزامی است'),
  tabaghe: yup.string().required('طبقه الزامی است'),
  vahed: yup.string().required('واحد الزامی است'),
  plak: yup.string().required('پلاک الزامی است'),
  kooche: yup.string().required('کوچه الزامی است'),
  sherkat_name: yup.string()
})

function SidebarAddCourier({ open, toggle, setChange, user, edit, showUser }) {
  // eslint-disable-next-line camelcase
  const [selectedSenderOstan, setSelectedSenderOstan] = useState('')
  const [hasDiscount, setHasDiscount] = useState(false)
  const [LatLang, setLatLang] = useState([51.3347, 35.7219])
  useEffect(() => {
    if (edit) {
      setHasDiscount(user.off_percent_status)
    }
  }, [hasDiscount])

  const emptyForm = {
    natural_number: '',
    full_name: '',
    phone_number: '',
    tel_number: '',
    postal_code: '',
    ostan: '',
    shahr: '',
    other_information: '',
    khiaban_asli: '',
    khiaban_faree: '',
    tabaghe: '',
    vahed: '',
    plak: '',
    kooche: '',
    sherkat_name: ''
  }

  function onChangeSenderOstan(event, onChange, values) {
    onChange(values)
    setSelectedSenderOstan(ostan.find(element => element.name === event.target.innerText)?.id)
  }

  const defaultValues = user
    ? {
        natural_number: user.natural_number,
        full_name: user.full_name,
        phone_number: user.phone_number,
        tel_number: user.tel_number,
        postal_code: user.postal_code,
        ostan: user.ostan,
        shahr: user.shahr,
        other_information: user.other_information,
        khiaban_asli: user.khiaban_asli,
        khiaban_faree: user.khiaban_faree,
        tabaghe: user.tabaghe,
        vahed: user.vahed,
        plak: user.plak,
        kooche: user.kooche,
        sherkat_name: user.sherkat_name
      }
    : emptyForm

  useEffect(() => {
    if (user) {
      if (user.lang !== 0 && user.lat !== 0) {
        setLatLang([user.lang, user.lat])
      }
    } else {
      navigator.geolocation.getCurrentPosition(pos => {
        setLatLang([pos.coords.longitude, pos.coords.latitude])
      })
    }
  }, [setLatLang])

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const handleClose = () => {
    toggle()
    reset(emptyForm)
  }

  const onSubmit = data => {
    if (edit) {
      toast.promise(
        editUser(user.natural_number, data).then(() => {
          setChange(true)
          handleClose()
        }),
        {
          loading: 'در حال ویرایش کاربر',
          success: 'کاربر ویرایش شد',
          error: err => (err.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
        }
      )
      // eslint-disable-next-line no-param-reassign
      delete data.password
    } else {
      toast.promise(
        registerUser(data).then(() => {
          setChange(true)
          handleClose()
        }),
        {
          loading: 'در حال ایجاد کاربر',
          success: 'کاربر ایجاد شد',
          error: err => (err.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
        }
      )
    }
  }

  return (
    <Drawer
      open={open}
      anchor='left'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <Header>
        <Typography variant='h6'>اطلاعات بازاریاب</Typography>
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
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              fullWidth
              name='natural_number'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='کدملی'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.natural_number)}
                  inputProps={{ maxLength: 10 }}
                  dir='ltr'
                  disabled={showUser}
                />
              )}
            />
            {errors.natural_number && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.natural_number.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='full_name'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='نام و نام خانوادگی'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.full_name)}
                  disabled={showUser}
                />
              )}
            />
            {errors.full_name && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.full_name.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='phone_number'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='موبایل'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.phone_number)}
                  inputProps={{ maxLength: 11 }}
                  placeholder='09*********'
                  dir='ltr'
                  disabled={showUser}
                />
              )}
            />
            {errors.phone_number && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.phone_number.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='tel_number'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label=' شماره تلفن'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.tel_number)}
                  inputProps={{ maxLength: 12 }}
                  dir='ltr'
                  disabled={showUser}
                />
              )}
            />
            {errors.tel_number && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.tel_number.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='postal_code'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='کدپستی'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.postal_code)}
                  inputProps={{ maxLength: 10 }}
                  dir='ltr'
                  disabled={showUser}
                />
              )}
            />
            {errors.postal_code && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.postal_code.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='sherkat_name'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='نام شرکت'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.sherkat_name)}
                  disabled={showUser}
                />
              )}
            />
            {errors.sherkat_name && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.sherkat_name.message}</FormHelperText>
            )}
          </FormControl>
          <Typography fullWidth sx={{ mb: 2 }}>
            آدرس
          </Typography>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              fullWidth
              name='ostan'
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value, onBlur } }) => (
                <Autocomplete
                  disabled={showUser}
                  onBlur={onBlur}
                  select
                  options={ostan.map(element => element.name)}
                  disableClearable
                  onChange={(event, values, value) => onChangeSenderOstan(event, onChange, values, value)}
                  value={value}
                  renderInput={params => (
                    <TextField
                      /* eslint-disable-next-line react/jsx-props-no-spreading */
                      {...params}
                      label='استان'
                      variant='outlined'
                      onChange={onChange}
                      error={Boolean(errors.ostan)}
                    />
                  )}
                />
              )}
            />
            {errors.ostan && <FormHelperText sx={{ color: 'error.main' }}>{errors.ostan.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='shahr'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <Autocomplete
                  disabled={showUser}
                  onBlur={onBlur}
                  select
                  disableClearable
                  options={shahr.filter(element => element.ostan === selectedSenderOstan).map(element => element.name)}
                  onChange={(event, values) => onChange(values)}
                  value={value}
                  renderInput={params => (
                    <TextField
                      /* eslint-disable-next-line react/jsx-props-no-spreading */
                      {...params}
                      label='شهر'
                      variant='outlined'
                      onChange={onChange}
                      error={Boolean(errors.shahr)}
                    />
                  )}
                />
              )}
            />
            {errors.shahr && <FormHelperText sx={{ color: 'error.main' }}>{errors.shahr.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='khiaban_asli'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='خیابان اصلی'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.khiaban_asli)}
                  disabled={showUser}
                />
              )}
            />
            {errors.khiaban_asli && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.khiaban_asli.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='khiaban_faree'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='خیابان فرعی'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.khiaban_faree)}
                  disabled={showUser}
                />
              )}
            />
            {errors.khiaban_faree && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.khiaban_faree.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='kooche'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='کوچه'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.kooche)}
                  disabled={showUser}
                />
              )}
            />
            {errors.kooche && <FormHelperText sx={{ color: 'error.main' }}>{errors.kooche.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='plak'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='پلاک'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.plak)}
                  disabled={showUser}
                />
              )}
            />
            {errors.plak && <FormHelperText sx={{ color: 'error.main' }}>{errors.plak.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='tabaghe'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='طبقه'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.tabaghe)}
                  disabled={showUser}
                  dir='ltr'
                />
              )}
            />
            {errors.tabaghe && <FormHelperText sx={{ color: 'error.main' }}>{errors.tabaghe.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='vahed'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='واحد'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.vahed)}
                  disabled={showUser}
                  dir='ltr'
                />
              )}
            />
            {errors.vahed && <FormHelperText sx={{ color: 'error.main' }}>{errors.vahed.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='other_information'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='سایر اطلاعات'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.other_information)}
                  disabled={showUser}
                  multiline
                  rows={2}
                />
              )}
            />
            {errors.other_information && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.other_information.message}</FormHelperText>
            )}
          </FormControl>

          {!showUser && (
            <Button size='large' type='submit' variant='contained' sx={{ mr: 3 }} fullWidth>
              ذخیره
            </Button>
          )}
        </form>
      </Box>
    </Drawer>
  )
}

export default SidebarAddCourier
