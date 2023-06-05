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
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import React from 'react'

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const schema = yup.object().shape({
  from_weight: yup.number().typeError('به درستی وارد کمید'),
  price: yup.number().typeError('به درستی وارد نمایید'),
  to_weight: yup.number().typeError('به درستی وارد نمایید').moreThan(yup.ref('from_weight'), 'یابد بیشتر از شروع باشد'),
  type: yup.boolean().typeError('به درستی انتخاب نمایید')
})

function NewRegionalDrawer({ open, toggle, setChange, user, showUser }) {
  const emptyForm = {
    from_weight: 0,
    price: 0,
    to_weight: 0,
    type: false
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
    const type = data.type ? 1 : 0
    setChange({ ...data, type })
    toggle()
  }

  return (
    <Drawer
      open={open}
      anchor='left'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } }, zIndex: 10000000000 }}
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
              name='from_weight'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='از وزن(کیلوگرم)'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.from_weight)}
                  disabled={showUser}
                  inputProps={{ min: 0, style: { textAlign: 'left' } }}
                />
              )}
            />
            {errors.from_weight && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.from_weight.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='to_weight'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='تا وزن(کیلوگرم)'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.to_weight)}
                  disabled={showUser}
                  inputProps={{ min: 0, style: { textAlign: 'left' } }}
                />
              )}
            />
            {errors.to_weight && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.to_weight.message}</FormHelperText>
            )}
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
                  disabled={showUser}
                  inputProps={{ min: 0, style: { textAlign: 'left' } }}
                />
              )}
            />
            {errors.price && <FormHelperText sx={{ color: 'error.main' }}>{errors.price.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4, zIndex: 1111111111 }}>
            <Controller
              fullWidth
              name='type'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <FormControlLabel
                  control={<Switch value={value} checked={value} onChange={onChange} />}
                  sx={{ p: 0, m: 0 }}
                  labelPlacement='end'
                  label={value === false ? 'ثابت' : 'به ازای هر کیلوگرم'}
                  onBlur={onBlur}
                />
              )}
            />
            {errors.type && <FormHelperText sx={{ color: 'error.main' }}>{errors.type.message}</FormHelperText>}
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

export default NewRegionalDrawer
