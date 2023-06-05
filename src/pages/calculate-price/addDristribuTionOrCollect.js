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
import toast from 'react-hot-toast'

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const schema = yup.object().shape({
  title: yup.string().required('عنوان الزامی است').typeError('عنوان الزامی است'),
  price: yup.number().required('قیمت الزامی است').min(1, 'باید بیشتر از ۰ باشد').typeError('قیمت الزامی است')
})

function AddPrice({ open, toggle, setChange, user, edit, showUser, addFunc, editFunc }) {
  const emptyForm = {
    title: '',
    price: 0
  }

  const defaultValues = user
    ? {
        title: user.title,
        price: user.price
      }
    : emptyForm

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

  const onSubmit = async data => {
    if (edit) {
      toast.promise(
        editFunc(user.id, data).then(() => {
          setChange(true)
          handleClose()
        }),
        {
          loading: 'در حال ویرایش قیمت',
          success: 'قیمت ویرایش شد',
          error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
        }
      )
    } else {
      toast.promise(
        addFunc(data).then(() => {
          setChange(true)
          handleClose()
        }),
        {
          loading: 'در حال ایجاد قیمت',
          success: 'قیمت ایجاد شد',
          error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
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
        <Typography variant='h6'>اطلاعات قیمت</Typography>
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
              name='title'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='عنوان'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.title)}
                  disabled={showUser}
                />
              )}
            />
            {errors.title && <FormHelperText sx={{ color: 'error.main' }}>{errors.title.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='price'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='قیمت'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.price)}
                  inputProps={{ maxLength: 11, min: 0, style: { textAlign: 'left' } }}
                  disabled={showUser}
                />
              )}
            />
            {errors.price && <FormHelperText sx={{ color: 'error.main' }}>{errors.price.message}</FormHelperText>}
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

export default AddPrice
