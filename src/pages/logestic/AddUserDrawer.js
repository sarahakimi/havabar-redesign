import { useState } from 'react'
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
import { ostan, shahr } from 'iran-cities-json'
import toast from 'react-hot-toast'
import { editUser, registerUser } from './requests'

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const schema = yup.object().shape({
  name: yup.string().required('نام الزامی است')
})

function SidebarAddCourier({ open, toggle, setChange, user, edit, showUser }) {
  const [success, setSuccess] = useState(false)

  const emptyForm = {
    name: ''
  }

  const defaultValues = user || emptyForm

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
        editUser(user.id, data).then(() => {
          setChange(true)
          handleClose()
        }),
        {
          loading: 'در حال ویرایش لاجستیک',
          success: 'لاجستیک ویرایش شد',
          error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
        }
      )
    } else {
      toast.promise(
        registerUser(data).then(() => {
          setChange(true)
          handleClose()
        }),
        {
          loading: 'در حال ایجاد لاجستیک',
          success: 'لاجستیک ایجاد شد',
          error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
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
        <Typography variant='h6'>اطلاعات لاجستیک</Typography>
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
              name='name'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='عنوان لاجستیک'
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

          {!showUser && (
            <Button size='large' type='submit' variant='contained' sx={{ mr: 3 }} fullWidth>
              ذخیره
            </Button>
          )}
        </form>
      </Box>
      <Dialog open={success} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>ایجاد هاب</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>هاب مورد نظر ایجاد شد</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>متوجه شدم</Button>
        </DialogActions>
      </Dialog>
    </Drawer>
  )
}

export default SidebarAddCourier
