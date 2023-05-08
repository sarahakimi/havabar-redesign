import {useEffect, useState} from 'react'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import {styled} from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {Controller, useForm} from 'react-hook-form'
import Close from 'mdi-material-ui/Close'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import toast from "react-hot-toast";
import {editCompany, fetchSingleCompany, registerCompany} from "./requests";

const Header = styled(Box)(({theme}) => ({
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
    .test('len', 'کدملی باید 10 رقم باشد', val => val.toString().length === 10)
    .matches(/d*/, 'کدملی باید عدد باشد'),
  name: yup.string().required('نام و نام خانوادگی الزامی است').min(5, 'فیلد را به درستی پر کنید'),
  phone_number: yup
    .string()
    .required('موبایل الزامی است')
    .matches(/09d*/, ' موبایل باید عدد باشد و با 09 شروع شود')
    .test('len', 'موبایل باید 11 رقم باشد', val => val.toString().length === 11),
  company_name: yup.string().required('نام شرکت الزامی است').min(4, 'حداقل باید ع کاراکتر باشد'),
  username: yup.string().required('نام کاربری الزامی است').min(4, 'حداقل باید ع کاراکتر باشد'),
  password: yup.string().required('رمز عبور الزامی است').min(8, 'حداقل باید 8 کاراکتر باشد'),

  // duration_of_activity: yup.number().required(' الزامی است').min(1, 'حداقل 1 روز').typeError('باید عدد باشد')
})

function SidebarAddCourier({open, toggle, setChange, company, edit, showUser}) {
  const [showPassword, setShowPassword] = useState(false)


  const defaultValues = {
    natural_code: '',
    company_name: '',
    phone_number: '',

    // duration_of_activity: 0,
    username: '',
    password:"",
    name: ''
  }

  const {
    reset,
    control,
    handleSubmit,
    setError,
    formState: {errors}
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    if (company) {
      const toastid=toast.loading("در حال دریافت اطلاعات")
      fetchSingleCompany(company.id).then(response => {
        toast.dismiss(toastid)
        reset({
          natural_code: response.data?.admin.natural_code,
          company_name: response.data?.courier.name,
          phone_number: response.data?.admin.phone,
          username: response.data?.admin.username,
          name: response.data?.admin.name,
          password:'*************',
        })

      }).catch((err) => {
        toast.dismiss(toastid)
        const errorMessage = err?.response?.data?.message ? err.response.data.message : "خطایی رخ داده است"
        toast.error(errorMessage)
      })
    }

  }, [])


  const onSubmit = data => {
    if (edit) {
      // eslint-disable-next-line no-param-reassign
      delete data.password
      toast.promise(
        editCompany(company.id, data)
          .then(() => {
            reset(defaultValues)
            setChange(true)
            toggle()
          })
          .catch(err => {
            setError('company_name', {type: 'custom', message: err?.response?.data?.message})
          }), {
          loading: 'در حال ویرایش شرکت',
          success: 'شرکت ویرایش شد',
          error: (err) => err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داده است.",
        })
    } else {

      toast.promise(
        registerCompany(data)
          .then(() => {
            reset(defaultValues)
            setChange(true)
            toggle()
          })
          .catch(err => {
            setError('company_name', {type: 'custom', message: err?.response?.data?.message})
          }), {
          loading: 'در حال ایجاد شرکت',
          success: 'شرکت ایجاد شد',
          error: (err) => err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داده است.",
        })
    }
  }

  const handleClose = () => {
    toggle()
    reset(defaultValues)
  }

  return (
    <Drawer
      open={open}
      anchor='left'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{keepMounted: true}}
      sx={{'& .MuiDrawer-paper': {width: {xs: 300, sm: 400}}}}
    >
      <Header>
        <Typography variant='h6'>اطلاعات شرکت</Typography>
        <Close fontSize='small' onClick={handleClose} sx={{cursor: 'pointer'}}/>
      </Header>
      <Box sx={{
        p: 5, "& .MuiInputBase-input.Mui-disabled": {
          WebkitTextFillColor: "rgba(76,78,100,0.87)",
        },
        "& 	.MuiInputLabel-root.Mui-disabled": {
          WebkitTextFillColor: "rgba(76,78,100,0.87)",
        }
      }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth sx={{mb: 4}}>
            <Controller
              name='company_name'
              control={control}
              rules={{required: true}}
              render={({field: {value, onChange, onBlur}}) => (
                <TextField
                  inputProps={{maxLength: 30}}

                  label='نام شرکت'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.company_name)}
                  disabled={showUser}
                />
              )}
            />
            {errors.company_name &&
              <FormHelperText sx={{color: 'error.main'}}>{errors.company_name.message}</FormHelperText>}
          </FormControl>
          {/* <FormControl fullWidth sx={{mb: 4}}> */}
          {/*  <Controller */}
          {/*    name='duration_of_activity' */}
          {/*    control={control} */}
          {/*    type='number' */}
          {/*    rules={{required: true}} */}
          {/*    render={({field: {value, onChange, onBlur}}) => ( */}
          {/*      <TextField */}

          {/*        label='اعتبار اکانت (روز)' */}
          {/*        value={value} */}
          {/*        onBlur={onBlur} */}
          {/*        onChange={onChange} */}
          {/*        error={Boolean(errors.duration_of_activity)} */}
          {/*        disabled={edit} */}
          {/*      /> */}
          {/*    )} */}
          {/*  /> */}
          {/*  {errors.duration_of_activity && ( */}
          {/*    <FormHelperText sx={{color: 'error.main'}}>{errors.duration_of_activity.message}</FormHelperText> */}
          {/*  )} */}
          {/* </FormControl> */}
          <Box sx={{mb: 4}}>
            <Typography variant='p' fullwidth>
              ادمین
            </Typography>
          </Box>
          <FormControl fullWidth sx={{mb: 4}}>
            <Controller
              fullWidth
              name='natural_code'
              control={control}
              rules={{required: true}}
              render={({field: {value, onChange, onBlur}}) => (
                <TextField

                  label='کدملی'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.natural_code)}
                  inputProps={{maxLength: 10}}
                  dir='ltr'
                  disabled={showUser}
                />
              )}
            />
            {errors.natural_code && (
              <FormHelperText sx={{color: 'error.main'}}>{errors.natural_code.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{mb: 4}}>
            <Controller
              name='name'
              control={control}
              rules={{required: true}}
              render={({field: {value, onChange, onBlur}}) => (
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
            {errors.name && (
              <FormHelperText sx={{color: 'error.main'}}>{errors.name.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{mb: 4}}>
            <Controller
              name='phone_number'
              control={control}
              rules={{required: true}}
              render={({field: {value, onChange, onBlur}}) => (
                <TextField

                  label='موبایل'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.phone_number)}
                  inputProps={{maxLength: 11}}
                  placeholder='09*********'
                  dir='ltr'
                  disabled={showUser}
                />
              )}
            />
            {errors.phone_number &&
              <FormHelperText sx={{color: 'error.main'}}>{errors.phone_number.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{mb: 4}}>
            <Controller
              name='username'
              control={control}
              rules={{required: true}}
              render={({field: {value, onChange, onBlur}}) => (
                <TextField

                  label='نام کاربری'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.username)}
                  dir='ltr'
                  disabled={showUser}
                />
              )}
            />
            {errors.username && <FormHelperText sx={{color: 'error.main'}}>{errors.username.message}</FormHelperText>}
          </FormControl>
          {!edit && <FormControl fullWidth sx={{mb: 4}}>
            <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
              کلمه عبور
            </InputLabel>
            <Controller
              name='password'
              control={control}
              rules={{required: true}}
              render={({field: {value, onChange, onBlur}}) => (
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
                        onClick={() => !edit && setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOutline/> : <EyeOffOutline/>}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
          </FormControl>}
          {!showUser && (
            <Button size='large' type='submit' variant='contained' sx={{mr: 3}} fullWidth>
              ذخیره
            </Button>
          )}
        </form>
      </Box>
    </Drawer>
  )
}

export default SidebarAddCourier
