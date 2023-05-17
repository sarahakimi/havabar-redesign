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
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar } from '@hassanmojab/react-modern-calendar-datepicker'
import { useState } from 'react'

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const schema = yup.object().shape({
  hub_source_name: yup.string().typeError('به درستی وارد نمایید'),
  hub_destination_name: yup.string().typeError('به درستی وارد نمایید'),
  date: yup.mixed()
})

function SidebarAddCourier({ open, toggle, setChange, filter, showUser, setFilter }) {
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null
  })

  const emptyForm = {
    hub_source_name: '',
    hub_destination_name: '',
    state: ''
  }
  const hasFilter = Object.keys(filter).length !== 0

  const defaultValues = hasFilter ? filter : emptyForm

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
    if (selectedDayRange.from !== null) {
      if (selectedDayRange.to !== null) {
        setFilter({
          ...data,
          start_day: selectedDayRange.from?.day,
          start_month: selectedDayRange.from?.month,
          start_year: selectedDayRange.from?.year,
          finish_day: selectedDayRange.to?.day,
          finish_month: selectedDayRange.to?.month,
          finish_year: selectedDayRange.to?.year
        })
      } else
        setFilter({
          ...data,
          start_day: selectedDayRange.from?.day,
          start_month: selectedDayRange.from?.month,
          start_year: selectedDayRange.from?.year
        })
    } else setFilter(data)
    setChange(true)
    toggle()
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <Header>
        <Typography variant='h6'>فیلتر</Typography>
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
              name='hub_source_name'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='هاب مبدا'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.hub_source_name)}
                  disabled={showUser}
                />
              )}
            />
            {errors.hub_source_name && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.hub_source_name.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='hub_destination_name'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='هاب مقصد'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.hub_destination_name)}
                  disabled={showUser}
                />
              )}
            />
            {errors.hub_destination_name && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.hub_destination_name.message}</FormHelperText>
            )}
          </FormControl>

          <p>انتخاب بازه زمانی:</p>
          <Box display='flex' justifyContent='center' sx={{ mb: 4 }}>
            <Calendar value={selectedDayRange} onChange={setSelectedDayRange} shouldHighlightWeekends locale='fa' />
          </Box>

          <Button size='large' type='submit' variant='contained' sx={{ mr: 3 }} fullWidth>
            ذخیره
          </Button>
        </form>
      </Box>
    </Drawer>
  )
}

export default SidebarAddCourier