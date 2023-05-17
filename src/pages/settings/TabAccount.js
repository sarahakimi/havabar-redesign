// ** React Imports
import { useEffect, useMemo, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

// ** Icons Imports
import { Controller, useForm } from 'react-hook-form'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import * as yup from 'yup'
import { Autocomplete, Typography } from '@mui/material'
import { ostan, shahr } from 'iran-cities-json'
import toast from 'react-hot-toast'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from '../../hooks/useAuth'
import { applyLogo, editHub, fetchData, fetchLogo } from './requests'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(5),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const schema = yup.object().shape({
  name: yup.string().required('نام الزامی است'),
  fax: yup
    .string()
    .required('فگس الزامی است')
    .matches(/^[0-9]*$/, ' باید عدد باشد'),
  state: yup.string().required('استان الزامی است'),
  city: yup.string().required('شهر الزامی است'),
  tel_phone: yup
    .string()
    .required('تلفن الزامی است')
    .matches(/^[0-9]*$/, ' باید عدد باشد'),
  economic_code: yup.string().required('الزامی است').typeError('به درستی وارد نمایید').min(2, 'به درستی وازد نمایید'),
  management_name: yup.string().required('الزامی است').typeError('به درستی وارد نمایید').min(5, 'به درستی وازد نمایید'),
  registration_number: yup.string().typeError('به درستی وارد نمایید'),
  workshop_number: yup.string().typeError('به درستی وارد نمایید')
})

function TabAccount() {
  const imgSrc = '/images/favicon.png'
  const [hasHub, setHasHub] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const hub = useAuth().user.hub_id

  const [formData, setFormData] = useState({
    name: '',
    fax: '',
    tel_phone: '',
    state: '',
    city: '',
    address: '',
    economic_code: '',
    management_name: '',
    registration_number: '',
    workshop_number: ''
  })
  const [selectedSenderOstan, setSelectedSenderOstan] = useState('')

  function onChangeSenderOstan(event, onChange, values) {
    onChange(values)
    setSelectedSenderOstan(ostan.find(element => element.name === event.target.innerText)?.id)
  }

  const emptyForm = {
    name: '',
    fax: '',
    tel_phone: '',
    state: '',
    city: ''
  }

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: useMemo(() => formData, [setFormData]),
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    fetchData()
      .then(response => {
        if (response.data.hub === null) {
          setHasHub(false)
          reset(emptyForm)
        } else {
          reset(response.data.hub)
          setImageUrl(response.data.hub.image)
          setSelectedSenderOstan(response.data.hub.state)
          setHasHub(true)
        }
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
      })
  }, [setFormData, setSelectedSenderOstan])
  useEffect(() => {
    if (imageUrl !== '') {
      fetchLogo()
        .then(response => {
          setImageUrl(response.data.logo)
        })
        .catch(err => {
          const errorMessage = err?.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است'
          toast.error(errorMessage)
        })
    }
  }, [imageUrl])

  const onSubmit = data => {
    toast.promise(editHub(hub, data), {
      loading: 'در حال ویرایش هاب',
      success: 'هاب ویرایش شد',
      error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
    })
  }

  const getBase64 = file =>
    new Promise(resolve => {
      let baseURL = ''

      const reader = new FileReader()

      reader.readAsDataURL(file)

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result
        resolve(baseURL)
      }
    })

  const handleFileInputChange = e => {
    const file = e.target.files[0]

    getBase64(file)
      .then(result => {
        file.base64 = result
        toast.promise(
          applyLogo({ logo: result }).then(() => window.location.reload(true)),
          {
            loading: 'در حال آپلود عکس',
            success: 'عکس آپلود شد',
            error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
          }
        )
      })
      .catch(() => {
        toast.error('خطا در آپلود عکس')
      })
  }

  return (
    <CardContent>
      {hasHub ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={6}>
            <Grid item xs={12} sx={{ my: 5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ImgStyled src={imageUrl === '' ? imgSrc : imageUrl} alt='Profile Pic' />
                <Box>
                  <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                    بارگذاری عکس
                    <input
                      hidden
                      type='file'
                      onChange={handleFileInputChange}
                      accept='image/png, image/jpeg'
                      id='account-settings-upload-image'
                      name='image'
                    />
                  </ButtonStyled>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='name'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='نام هاب'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.name)}
                    />
                  )}
                />
                {errors.name && <FormHelperText sx={{ color: 'error.main' }}>{errors.name.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='tel_phone'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='تلفن'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.tel_phone)}
                      inputProps={{ maxLength: 11 }}
                      placeholder='021*******'
                      dir='ltr'
                    />
                  )}
                />
                {errors.tel_phone && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.tel_phone.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='fax'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='فکس'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.fax)}
                      inputProps={{ maxLength: 12 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.fax && <FormHelperText sx={{ color: 'error.main' }}>{errors.fax.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  fullWidth
                  name='state'
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
                      renderInput={params => (
                        <TextField
                          /* eslint-disable-next-line react/jsx-props-no-spreading */
                          {...params}
                          label='استان'
                          variant='outlined'
                          onChange={onChange}
                          error={Boolean(errors.state)}
                        />
                      )}
                    />
                  )}
                />
                {errors.state && <FormHelperText sx={{ color: 'error.main' }}>{errors.state.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='city'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <Autocomplete
                      onBlur={onBlur}
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
                          error={Boolean(errors.city)}
                        />
                      )}
                    />
                  )}
                />
                {errors.city && <FormHelperText sx={{ color: 'error.main' }}>{errors.city.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='economic_code'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='کد اقتصادی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.economic_code)}
                    />
                  )}
                />
                {errors.economic_code && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.economic_code.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='management_name'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='نام مدیر عامل'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.management_name)}
                    />
                  )}
                />
                {errors.management_name && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.management_name.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='registration_number'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='شماره ثبت'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.registration_number)}
                    />
                  )}
                />
                {errors.registration_number && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.registration_number.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='workshop_number'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='کد کارگاه'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.workshop_number)}
                    />
                  )}
                />
                {errors.workshop_number && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.workshop_number.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button variant='contained' type='submit' sx={{ mr: 4 }}>
                ذخیره تغییرات
              </Button>
            </Grid>
          </Grid>
        </form>
      ) : (
        <Typography variant='p'>در حال دریافت اطلاعات هاب</Typography>
      )}
    </CardContent>
  )
}

export default TabAccount
