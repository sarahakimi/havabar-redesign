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
import { Autocomplete, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import DialogContentText from '@mui/material/DialogContentText'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import toast from 'react-hot-toast'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import http from 'services/http'
import { editUser, registerUser } from './requests'

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const schema = yup.object().shape({
  natural_code: yup
    .string()
    .required('کدملی  الزامی است')
    .matches(/d*/, 'کدملی باید عدد باشد')
    .test('len', 'کدملی باید 10 رقم باشد', val => val.toString().length === 10),
  name: yup.string().required('نام و نام خانوادگی الزامی است').min(5, 'فیلد را به درستی پر کنید'),
  phone: yup
    .string()
    .required('موبایل الزامی است')
    .matches(/09d*/, ' موبایل باید عدد باشد و با 09 شروع شود')
    .test('len', 'موبایل باید 11 رقم باشد', val => val.toString().length === 11),
  username: yup.string().required('نام کاربری الزامی است').min(4, 'حداقل باید ع کاراکتر باشد'),
  password: yup.string().required('رمز عبور الزامی است').min(4, 'حداقل باید ع کاراکتر باشد'),
  car: yup.string().required(' الزامی است').min(3, 'به درستی وارد نمایید'),
  hub_id: yup.number().required('هاب الزامی است')
})

function SidebarAddCourier({ open, toggle, setChange, user, edit, showUser }) {
  const [success, setSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  // eslint-disable-next-line camelcase
  const [hub_ids, sethub_ids] = useState([])

  const emptyForm = {
    natural_code: '',
    name: '',
    phone: '',
    username: '',
    password: '',
    car: '',
    hub_id: 0
  }

  const defaultValues = user
    ? {
        natural_code: user.natural_code,
        name: user.name,
        phone: user.phone,
        username: user.username,
        car: user.car,
        hub_id: user.hub_id,
        password: '***************'
      }
    : emptyForm

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const handleClose = () => {
    toggle()
    reset(defaultValues)
  }
  useEffect(() => {
    http
      .get(
        'hubs/',
        {},
        {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        }
      )
      .then(async response => {
        if (response.data.hubs != null) {
          sethub_ids([...response.data.hubs, { id: 0, name: 'بدون هاب(ادمین اصلی شرکت)' }])
        } else sethub_ids([{ id: 0, name: 'بدون هاب(ادمین اصلی شرکت)' }])
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
        setError('hub_id', { type: 'custom', message: errorMessage })
      })
    // eslint-disable-next-line no-unused-expressions
  }, [])

  const onSubmit = data => {
    if (edit) {
      toast.promise(
        editUser(user.natural_code, { ...data, password: '' }).then(() => {
          setChange(true)
          handleClose()
        }),
        {
          loading: 'در حال ویرایش راننده',
          success: 'راننده ویرایش شد',
          error: err => (err.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
        }
      )
    } else {
      toast.promise(
        registerUser(data).then(() => {
          setChange(true)
          handleClose()
        }),
        {
          loading: 'در حال ایجاد راننده',
          success: 'راننده ایجاد شد',
          error: err => (err.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
        }
      )
    }
  }

  const handleDialogClose = () => {
    setSuccess(false)
    setChange(true)
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
        <Typography variant='h6'>اطلاعات راننده</Typography>
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
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              fullWidth
              name='natural_code'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='کدملی'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.natural_code)}
                  inputProps={{ maxLength: 10 }}
                  dir='ltr'
                  disabled={showUser}
                />
              )}
            />
            {errors.natural_code && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.natural_code.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='name'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='نام و نام خانوادگی'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.name)}
                  disabled={showUser}
                />
              )}
            />
            {errors.name && <FormHelperText sx={{ color: 'error.main' }}>{errors.name.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='phone'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='موبایل'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.phone)}
                  inputProps={{ maxLength: 11 }}
                  placeholder='09*********'
                  dir='ltr'
                  disabled={showUser}
                />
              )}
            />
            {errors.phone && <FormHelperText sx={{ color: 'error.main' }}>{errors.phone.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='car'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='وسیله نقلیه'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.car)}
                  disabled={showUser}
                />
              )}
            />
            {errors.car && <FormHelperText sx={{ color: 'error.main' }}>{errors.car.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='hub_id'
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur } }) => (
                <>
                  <InputLabel>هاب</InputLabel>
                  <Select
                    type='number'
                    onBlur={onBlur}
                    id='demo-multiple-name'
                    onChange={onChange}
                    input={<OutlinedInput label='Name' />}
                    error={Boolean(errors.hub_id)}
                    disabled={showUser}
                    defaultValue={user ? user.hub_id : 0}
                  >
                    {/* eslint-disable-next-line camelcase */}
                    {hub_ids.length === 0 ? (
                      <MenuItem value={undefined}>
                        هاب موجود نیست
                        {/* eslint-disable-next-line camelcase */}
                      </MenuItem>
                    ) : (
                      hub_ids.map(
                        (
                          hub_id // eslint-disable-next-line camelcase
                        ) => (
                          <MenuItem key={hub_id.id} value={parseInt(hub_id.id, 10)} disabled={hub_id.id === 0}>
                            {/* eslint-disable-next-line camelcase */}
                            {hub_id.name}
                          </MenuItem>
                        )
                      )
                    )}
                  </Select>
                </>
              )}
            />
            {errors.hub_id && <FormHelperText sx={{ color: 'error.main' }}>{errors.hub_id.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='username'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='نام کاربری'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.username)}
                  disabled={showUser}
                />
              )}
            />
            {errors.username && <FormHelperText sx={{ color: 'error.main' }}>{errors.username.message}</FormHelperText>}
          </FormControl>
          {!edit && (
            <FormControl fullWidth sx={{ mb: 4 }}>
              <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
                کلمه عبور
              </InputLabel>
              <Controller
                name='password'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <OutlinedInput
                    disabled={showUser}
                    value={value}
                    onBlur={onBlur}
                    label='Password'
                    onChange={onChange}
                    id='auth-login-v2-password'
                    error={Boolean(errors.password)}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          edge='end'
                          onMouseDown={e => e.preventDefault()}
                          onClick={() => !showUser && setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOutline /> : <EyeOffOutline />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                )}
              />
            </FormControl>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {!showUser && (
              <Button size='large' type='submit' variant='contained' sx={{ mr: 3 }} fullWidth>
                ذخیره
              </Button>
            )}
          </Box>
        </form>
      </Box>
      <Dialog open={success} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>ایجاد راننده</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>راننده مورد نظر ایجاد شد</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>متوجه شدم</Button>
        </DialogActions>
      </Dialog>
    </Drawer>
  )
}

export default SidebarAddCourier
