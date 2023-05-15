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
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { ostan, shahr } from 'iran-cities-json'
import toast from 'react-hot-toast'
import OutlinedInput from '@mui/material/OutlinedInput'
import { registerUser } from 'pages/customers/requests'
import yupSchema from '../../configs/yupSchema'
import http from '../../services/http'

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
  texes: yup.boolean().required('فیلد الزامی'),
  off_percent_status: yup.boolean().required('فیلد الزامی'),
  off_percent: yup.number().min(0, ' باید مثبت باشد').max(100, 'حداکثر باید 100 باشد').typeError('باید عدد باشد'),
  khiaban_asli: yup.string().required('خیابان اصلی الزامی است'),
  khiaban_faree: yup.string().required('خیابان فرعی الزامی است'),
  tabaghe: yup.string().required('طبقه الزامی است'),
  vahed: yup.string().required('واحد الزامی است'),
  plak: yup.string().required('پلاک الزامی است'),
  kooche: yup.string().required('کوچه الزامی است'),
  sherkat_name: yup.string(),
  level_code: yupSchema.level_code,
  chapter_code: yupSchema.header_code,
  marketer: yup.number()
})

function NewCustomwr({ open, toggle, setCustomer, setChange }) {
  const [selectedSenderOstan, setSelectedSenderOstan] = useState('')
  const [hasDiscount, setHasDiscount] = useState(false)
  const [marketers, setMarketers] = useState([])

  const emptyForm = {
    natural_number: '',
    sherkat_name: '',
    full_name: '',
    phone_number: '',
    tel_number: '',
    postal_code: '',
    ostan: '',
    shahr: '',
    khiaban_asli: '',
    khiaban_faree: '',
    kooche: '',
    plak: '',
    tabaghe: '',
    vahed: '',
    other_information: '',
    marketer: 0,
    off_percent_status: false,
    texes: true,
    off_percent: 0,
    level_code: '',
    chapter_code: ''
  }

  function onChangeSenderOstan(event, onChange, values) {
    onChange(values)
    setSelectedSenderOstan(ostan.find(element => element.name === event.target.innerText)?.id)
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

  useEffect(() => {
    http
      .get(
        'marketers/',
        {},
        {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        }
      )
      .then(async response => {
        if (response.data.marketers != null) {
          setMarketers([...response.data.marketers, { id: 0, full_name: 'بدون بازاریاب' }])
        } else setMarketers([{ id: 0, full_name: 'بدون بازاریاب' }])
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
        setError('marketers', { type: 'custom', message: errorMessage })
      })
    // eslint-disable-next-line no-unused-expressions
  }, [])

  const handleClose = () => {
    toggle()
    reset(emptyForm)
  }

  const onDiscount = (ev, onChange) => {
    onChange(ev)
    setHasDiscount(ev.target.value)
  }

  const onSubmit = data => {
    toast.promise(
      registerUser(data).then(() => {
        setCustomer(data)
        handleClose()
        setChange(true)
      }),
      {
        loading: 'در حال ایجاد مشتری',
        success: 'مشتری ایجاد شد',
        error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
      }
    )
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
        <Typography variant='h6'>اطلاعات مشتری</Typography>
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
                  multiline
                  rows={2}
                />
              )}
            />
            {errors.other_information && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.other_information.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              fullWidth
              name='texes'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <>
                  <InputLabel>شامل مالیات</InputLabel>
                  <Select
                    label='شامل مالیات'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.texes)}
                  >
                    <MenuItem value>می باشد</MenuItem>
                    <MenuItem value={false}>نمی باشد</MenuItem>
                  </Select>
                </>
              )}
            />
            {errors.texes && <FormHelperText sx={{ color: 'error.main' }}>{errors.texes.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              fullWidth
              name='off_percent_status'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <>
                  <InputLabel>شامل تخفیف</InputLabel>
                  <Select
                    label='شامل تخفیف'
                    value={value}
                    onBlur={onBlur}
                    onChange={ev => onDiscount(ev, onChange)}
                    error={Boolean(errors.off_percent_status)}
                  >
                    <MenuItem value>می باشد</MenuItem>
                    <MenuItem value={false}>نمی باشد</MenuItem>
                  </Select>
                </>
              )}
            />
            {errors.off_percent_status && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.off_percent_status.message}</FormHelperText>
            )}
          </FormControl>
          {hasDiscount && (
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                name='off_percent'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    label='درصد تخفیف'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.off_percent)}
                    type='number'
                    InputProps={{ inputProps: { min: 0, max: 100 } }}
                    dir='ltr'
                    defaultValue={0}
                  />
                )}
              />
              {errors.off_percent && (
                <FormHelperText sx={{ color: 'error.main' }}>{errors.off_percent.message}</FormHelperText>
              )}
            </FormControl>
          )}
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='marketer'
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur } }) => (
                <>
                  <InputLabel>بازاریاب</InputLabel>
                  <Select
                    type='number'
                    onBlur={onBlur}
                    id='demo-multiple-name'
                    onChange={onChange}
                    input={<OutlinedInput label='Name' />}
                    error={Boolean(errors.marketer)}
                    defaultValue={0}
                  >
                    {marketers.map(marketer => (
                      <MenuItem key={marketer.id} value={parseInt(marketer.id, 10)} disabled={marketer.id === 0}>
                        {marketer.full_name}
                      </MenuItem>
                    ))}
                  </Select>
                </>
              )}
            />
            {errors.marketer && <FormHelperText sx={{ color: 'error.main' }}>{errors.marketer.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='level_code'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='کد سطح'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.level_code)}
                />
              )}
            />
            {errors.level_code && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.level_code.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='chapter_code'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='کد سرفصل'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.chapter_code)}
                />
              )}
            />
            {errors.chapter_code && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.chapter_code.message}</FormHelperText>
            )}
          </FormControl>

          <Button size='large' type='submit' variant='contained' sx={{ mr: 3 }} fullWidth>
            ذخیره
          </Button>
        </form>
      </Box>
    </Drawer>
  )
}

export default NewCustomwr
