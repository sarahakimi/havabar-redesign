import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import {
  Card,
  CardContent,
  StepConnector,
  stepConnectorClasses,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Box
} from '@mui/material'
import toast from 'react-hot-toast'
import Check from 'mdi-material-ui/Check'
import urls from 'configs/requestEndpoints'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import Step from '@mui/material/Step'
import { styled } from '@mui/material/styles'

import Loading from '@core/components/loading/loading'
import http from 'services/http'

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)'
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4'
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4'
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1
  }
}))

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4'
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor'
  }
}))

function QontoStepIcon(props) {
  const { active, completed, className } = props

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? <Check className='QontoStepIcon-completedIcon' /> : <div className='QontoStepIcon-circle' />}
    </QontoStepIconRoot>
  )
}

const schema = yup.object().shape({
  code: yup.number().typeError('به درستی وارد نمایید').min(1, 'به درستی وارد نمایید')
})

function Index() {
  const [data, setData] = useState({})
  const [hasUser, setHasUser] = useState(false)
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState(0)

  const defaultValues = {
    code: 0
  }

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    setData({})
    setState(0)
    setHasUser(false)
    const toastid = toast.loading('در حال دریافت اطلاعات...')
    setLoading(true)
    http
      .get(urls.getOrder(data.code), {})
      .then(async response => {
        setLoading(false)
        setHasUser(true)
        toast.dismiss(toastid)
        if (response.data.track === null) setData({})
        else {
          setData(response.data.track)
          if (response.data.track.delivery_state === 'ثبت سفارش') {
            setState(0)
          } else if (response.data.track.delivery_state === 'جمع آوری') {
            setState(1)
          } else if (response.data.track.delivery_state === 'جابجایی با پست') {
            setState(2)
          } else if (response.data.track.delivery_state === 'توزیع') {
            setState(3)
          } else if (response.data.track.delivery_state === 'سفارش تحویل داده شد.') {
            setState(5)
          }
        }
      })
      .catch(err => {
        setLoading(false)
        toast.dismiss(toastid)
        toast.error(err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داد')
      })
  }

  return (
    <Card container spacing={6}>
      <CardContent>
        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} mb={6}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} />
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='code'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='شماره سفارش'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderCodeMelli)}
                      inputProps={{ min: 0, style: { textAlign: 'left' } }}
                      fullWidth
                    />
                  )}
                />

                {errors.senderCodeMelli && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.senderCodeMelli.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} />
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} />

            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Button size='large' type='success' variant='contained' sx={{ m: 1 }} fullWidth>
                رهگیری
              </Button>
            </Grid>
          </Grid>
        </form>
        {hasUser && (
          <>
            <Stepper activeStep={state} alternativeLabel connector={<QontoConnector />} sx={{ mb: 6 }}>
              <Step>
                <StepLabel StepIconComponent={QontoStepIcon}>ثبت سفارش</StepLabel>
              </Step>
              <Step>
                <StepLabel StepIconComponent={QontoStepIcon}>جمع آوری</StepLabel>
              </Step>
              <Step>
                <StepLabel StepIconComponent={QontoStepIcon}>جابجایی با پست</StepLabel>
              </Step>
              <Step>
                <StepLabel StepIconComponent={QontoStepIcon}>توزیع</StepLabel>
              </Step>
              <Step>
                <StepLabel StepIconComponent={QontoStepIcon}>سفارش تحویل داده شد.</StepLabel>
              </Step>
            </Stepper>
            <Box
              style={{ margin: '1px auto', color: ' #000' }}
              display='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              gap={8}
            >
              <Table
                style={{
                  textAlign: 'right',
                  padding: '15px',
                  color: 'black',
                  width: '60%',
                  margin: 'auto'
                }}
                sx={{ mb: 8 }}
              >
                <TableHead style={{ backgroundColor: '#093763', color: '#fff' }}>
                  <TableRow>
                    <TableCell sx={{ color: '#fff' }}>
                      مشخصات سفارش شماره:
                      <span>{data.sub_order_id}</span>
                    </TableCell>
                    <TableCell sx={{ color: '#fff' }}>
                      تاریخ و ساعت قبول سفارش:
                      <span>{data.submit_order_time}</span>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{ backgroundColor: '#fff' }}>
                  <TableRow>
                    <TableCell sx={{ color: 'black', fontWeight: 500 }}>
                      مبدا:
                      <span>{data.source_city}</span>
                    </TableCell>
                    <TableCell sx={{ color: 'black', fontWeight: 500 }}>
                      مقصد:
                      <span>{data.destination_city}</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: 'black', fontWeight: 500 }}>
                      فرستنده:
                      <span>{data.sender_name}</span>
                    </TableCell>
                    <TableCell sx={{ color: 'black', fontWeight: 500 }}>
                      گیرنده:
                      <span>{data.receiver_name}</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: 'black', fontWeight: 500 }}>
                      نوع پرداخت:
                      <span id='payment_state'>{data.payment_state}</span>
                    </TableCell>
                    <TableCell sx={{ color: 'black', fontWeight: 500 }}>
                      شماره مرسوله :<span>{data.sub_order_id}</span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Table
                style={{ textAlign: 'right', padding: '15px', color: '#093763', width: '90%', margin: 'auto' }}
                fullWidth
              >
                <TableHead style={{ backgroundColor: '#093763', color: '#fff', textAlign: 'center' }}>
                  <TableRow>
                    <TableCell style={{ textAlign: 'center', color: '#fff' }}>آخرین وضعیت مرسوله</TableCell>
                    <TableCell style={{ textAlign: 'center', color: '#fff' }}>رویداد</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{ backgroundColor: '#fff' }} id='orderStates'>
                  <TableRow style={{ backgroundColor: state >= 0 && '#9df5c9' }}>
                    <TableCell sx={{ color: 'black', fontWeight: 500, textAlign: 'center' }}>
                      تاریخ و ساعت :<span>{data.submit_order_time}</span>
                    </TableCell>
                    <TableCell sx={{ color: 'black', fontWeight: 500, textAlign: 'center' }}>
                      رویداد : ثبت سفارش
                    </TableCell>
                  </TableRow>
                  <TableRow style={{ backgroundColor: state >= 1 && '#9df5c9' }}>
                    <TableCell sx={{ color: 'black', fontWeight: 500, textAlign: 'center' }}>
                      تاریخ و ساعت :<span>{data.collect_time}</span>
                    </TableCell>
                    <TableCell sx={{ color: 'black', fontWeight: 500, textAlign: 'center' }}>
                      رویداد : جمع آوري
                    </TableCell>
                  </TableRow>
                  <TableRow style={{ backgroundColor: state >= 2 && '#9df5c9' }}>
                    <TableCell sx={{ color: 'black', fontWeight: 500, textAlign: 'center' }}>
                      تاریخ و ساعت :<span>{data.moving_by_post_time}</span>
                    </TableCell>
                    <TableCell sx={{ color: 'black', fontWeight: 500, textAlign: 'center' }}>
                      رویداد : جابجايي با پست
                    </TableCell>
                  </TableRow>
                  <TableRow style={{ backgroundColor: state >= 3 && '#9df5c9' }}>
                    <TableCell sx={{ color: 'black', fontWeight: 500, textAlign: 'center' }}>
                      تاریخ و ساعت :<span>{data.distribution_time}</span>
                    </TableCell>
                    <TableCell sx={{ color: 'black', fontWeight: 500, textAlign: 'center' }}>رویداد : توزیع</TableCell>
                  </TableRow>
                  <TableRow style={{ backgroundColor: state >= 5 && '#9df5c9' }}>
                    <TableCell sx={{ color: 'black', fontWeight: 500, textAlign: 'center' }}>
                      تاریخ و ساعت :<span>{data.delivery_time}</span>
                    </TableCell>
                    <TableCell sx={{ color: 'black', fontWeight: 500, textAlign: 'center' }}>
                      رویداد : سفارش تحویل داده شد.
                      <span>{data.delivery_state}</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell />
                    <TableCell sx={{ color: 'black', fontWeight: 500, textAlign: 'center' }}>
                      توضیحات:
                      <span>{data.explain_states}</span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
            {/* <Accordion> */}
            {/*  /!* <AccordionSummary expandIcon={<IconExpandMore />} aria-controls='panel1a-content' id='panel1a-header'> *!/ */}
            {/*  /!*  <Typography>اطلاعات سفارش</Typography> *!/ */}
            {/*  /!* </AccordionSummary> *!/ */}
            {/*  /!* <AccordionDetails> *!/ */}
            {/*  /!*  <Card *!/ */}
            {/*  /!*    sx={{ *!/ */}
            {/*  /!*      p: 5, *!/ */}
            {/*  /!*      '& .MuiInputBase-input.Mui-disabled': { *!/ */}
            {/*  /!*        WebkitTextFillColor: 'rgba(76,78,100,0.87)' *!/ */}
            {/*  /!*      }, *!/ */}
            {/*  /!*      '& 	.MuiInputLabel-root.Mui-disabled': { *!/ */}
            {/*  /!*        WebkitTextFillColor: 'rgba(76,78,100,0.87)' *!/ */}
            {/*  /!*      }, *!/ */}
            {/*  /!*      mb: 5 *!/ */}
            {/*  /!*    }} *!/ */}
            {/*  /!*  > *!/ */}
            {/*  /!*    <CardHeader title='اطلاعات سفارش' /> *!/ */}
            {/*  /!*    <CardContent> *!/ */}
            {/*  /!*      <Grid container spacing={2}> *!/ */}
            {/*  /!*        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ */}
            {/*  /!*          <TextField label='شماره سفارش' value={data.sub_order_id} dir='ltr' disabled fullWidth /> *!/ */}
            {/*  /!*        </Grid> *!/ */}

            {/*  /!*        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ */}
            {/*  /!*          <TextField label='وضعیت' value={data.delivery_state} disabled fullWidth /> *!/ */}
            {/*  /!*        </Grid> *!/ */}
            {/*  /!*      </Grid> *!/ */}
            {/*  /!*    </CardContent> *!/ */}
            {/*  /!*  </Card> *!/ */}
            {/*  /!*  /!* <Card *!/ *!/ */}
            {/*  /!*  /!*  sx={{ *!/ *!/ */}
            {/*  /!*  /!*    p: 5, *!/ *!/ */}
            {/*  /!*  /!*    '& .MuiInputBase-input.Mui-disabled': { *!/ *!/ */}
            {/*  /!*  /!*      WebkitTextFillColor: 'rgba(76,78,100,0.87)' *!/ *!/ */}
            {/*  /!*  /!*    }, *!/ *!/ */}
            {/*  /!*  /!*    '& 	.MuiInputLabel-root.Mui-disabled': { *!/ *!/ */}
            {/*  /!*  /!*      WebkitTextFillColor: 'rgba(76,78,100,0.87)' *!/ *!/ */}
            {/*  /!*  /!*    }, *!/ *!/ */}
            {/*  /!*  /!*    mb: 5 *!/ *!/ */}
            {/*  /!*  /!*  }} *!/ *!/ */}
            {/*  /!*  /!* > *!/ *!/ */}
            {/*  /!*  /!*  <CardHeader title='فرستنده' /> *!/ *!/ */}

            {/*  /!*  /!*  <CardContent> *!/ *!/ */}
            {/*  /!*  /!*    <Grid container spacing={2}> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField *!/ *!/ */}
            {/*  /!*  /!*          label='کدملی' *!/ *!/ */}
            {/*  /!*  /!*          value={data.sender_customer.identity_code} *!/ *!/ */}
            {/*  /!*  /!*          fullWidth *!/ *!/ */}
            {/*  /!*  /!*          dir='ltr' *!/ *!/ */}
            {/*  /!*  /!*          disabled *!/ *!/ */}
            {/*  /!*  /!*        /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField disable fullWidth label='نام و نام خانوادگی' value={data.sender_customer.name} /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField fullWidth label='موبایل' value={data.sender_customer.mobile} disabled /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={8} sm={8} md={4} lg={2} xl={2}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField fullWidth label='تلفن' value={data.sender_customer.tel} disabled /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={4} sm={4} md={2} lg={1} xl={1}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField *!/ *!/ */}
            {/*  /!*  /!*          fullWidth *!/ *!/ */}
            {/*  /!*  /!*          label='پیش شماره' *!/ *!/ */}
            {/*  /!*  /!*          value={data.sender_customer.area_code} *!/ *!/ */}
            {/*  /!*  /!*          dir='ltr' *!/ *!/ */}
            {/*  /!*  /!*          disabled *!/ *!/ */}
            {/*  /!*  /!*        /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField fullWidth label='شرکت' value={data.sender_customer.company_name} disabled /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField fullWidth label='استان' value={data.sender_customer.provence} disabled /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField fullWidth label='شهر' value={data.sender_customer.city} disabled /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField *!/ *!/ */}
            {/*  /!*  /!*          disabled *!/ *!/ */}
            {/*  /!*  /!*          fullWidth *!/ *!/ */}
            {/*  /!*  /!*          label='کدپستی' *!/ *!/ */}
            {/*  /!*  /!*          value={data.sender_customer.postal_code} *!/ *!/ */}
            {/*  /!*  /!*          dir='ltr' *!/ *!/ */}
            {/*  /!*  /!*        /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField *!/ *!/ */}
            {/*  /!*  /!*          disabled *!/ *!/ */}
            {/*  /!*  /!*          fullWidth *!/ *!/ */}
            {/*  /!*  /!*          label='سایر اطلاعات' *!/ *!/ */}
            {/*  /!*  /!*          value={data.sender_customer.other_information} *!/ *!/ */}
            {/*  /!*  /!*        /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}> *!/ *!/ */}
            {/*  /!*  /!*        <Typography variant='p' component='p' mb={4}> *!/ *!/ */}
            {/*  /!*  /!*          آدرس *!/ *!/ */}
            {/*  /!*  /!*        </Typography> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField disabled fullWidth label='خیابان اصلی' value={data.sender_customer.main_street} /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField disabled fullWidth label='خیابان فرعی' value={data.sender_customer.side_street} /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField disabled fullWidth label='کوچه' value={data.sender_customer.alley} /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={4} sm={4} md={2} lg={1} xl={1}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField disabled fullWidth label='پلاک' value={data.sender_customer.plaque} /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={4} sm={4} md={2} lg={1} xl={1}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField disabled fullWidth label='طبقه' value={data.sender_customer.floor} /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={4} sm={4} md={2} lg={1} xl={1}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField disabled fullWidth label='واحد' value={data.sender_customer.home_unit} /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*    </Grid> *!/ *!/ */}
            {/*  /!*  /!*  </CardContent> *!/ *!/ */}
            {/*  /!*  /!* </Card> *!/ *!/ */}
            {/*  /!*  /!* <Card *!/ *!/ */}
            {/*  /!*  /!*  sx={{ *!/ *!/ */}
            {/*  /!*  /!*    p: 5, *!/ *!/ */}
            {/*  /!*  /!*    '& .MuiInputBase-input.Mui-disabled': { *!/ *!/ */}
            {/*  /!*  /!*      WebkitTextFillColor: 'rgba(76,78,100,0.87)' *!/ *!/ */}
            {/*  /!*  /!*    }, *!/ *!/ */}
            {/*  /!*  /!*    '& 	.MuiInputLabel-root.Mui-disabled': { *!/ *!/ */}
            {/*  /!*  /!*      WebkitTextFillColor: 'rgba(76,78,100,0.87)' *!/ *!/ */}
            {/*  /!*  /!*    }, *!/ *!/ */}
            {/*  /!*  /!*    mb: 5 *!/ *!/ */}
            {/*  /!*  /!*  }} *!/ *!/ */}
            {/*  /!*  /!* > *!/ *!/ */}
            {/*  /!*  /!*  <CardHeader title='گیرنده' /> *!/ *!/ */}

            {/*  /!*  /!*  <CardContent> *!/ *!/ */}
            {/*  /!*  /!*    <Grid container spacing={2}> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField *!/ *!/ */}
            {/*  /!*  /!*          label='کدملی' *!/ *!/ */}
            {/*  /!*  /!*          value={data.receiver_customer.identity_code} *!/ *!/ */}
            {/*  /!*  /!*          fullWidth *!/ *!/ */}
            {/*  /!*  /!*          dir='ltr' *!/ *!/ */}
            {/*  /!*  /!*          disabled *!/ *!/ */}
            {/*  /!*  /!*        /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField disable fullWidth label='نام و نام خانوادگی' value={data.receiver_customer.name} /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField fullWidth label='موبایل' value={data.receiver_customer.mobile} disabled /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={8} sm={8} md={4} lg={2} xl={2}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField fullWidth label='تلفن' value={data.receiver_customer.tel} disabled /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={4} sm={4} md={2} lg={1} xl={1}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField *!/ *!/ */}
            {/*  /!*  /!*          fullWidth *!/ *!/ */}
            {/*  /!*  /!*          label='پیش شماره' *!/ *!/ */}
            {/*  /!*  /!*          value={data.receiver_customer.area_code} *!/ *!/ */}
            {/*  /!*  /!*          dir='ltr' *!/ *!/ */}
            {/*  /!*  /!*          disabled *!/ *!/ */}
            {/*  /!*  /!*        /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField fullWidth label='شرکت' value={data.receiver_customer.company_name} disabled /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField fullWidth label='استان' value={data.receiver_customer.provence} disabled /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField fullWidth label='شهر' value={data.receiver_customer.city} disabled /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField *!/ *!/ */}
            {/*  /!*  /!*          disabled *!/ *!/ */}
            {/*  /!*  /!*          fullWidth *!/ *!/ */}
            {/*  /!*  /!*          label='کدپستی' *!/ *!/ */}
            {/*  /!*  /!*          value={data.receiver_customer.postal_code} *!/ *!/ */}
            {/*  /!*  /!*          dir='ltr' *!/ *!/ */}
            {/*  /!*  /!*        /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField *!/ *!/ */}
            {/*  /!*  /!*          disabled *!/ *!/ */}
            {/*  /!*  /!*          fullWidth *!/ *!/ */}
            {/*  /!*  /!*          label='سایر اطلاعات' *!/ *!/ */}
            {/*  /!*  /!*          value={data.receiver_customer.other_information} *!/ *!/ */}
            {/*  /!*  /!*        /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}> *!/ *!/ */}
            {/*  /!*  /!*        <Typography variant='p' component='p' mb={4}> *!/ *!/ */}
            {/*  /!*  /!*          آدرس *!/ *!/ */}
            {/*  /!*  /!*        </Typography> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField disabled fullWidth label='خیابان اصلی' value={data.receiver_customer.main_street} /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField disabled fullWidth label='خیابان فرعی' value={data.receiver_customer.side_street} /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField disabled fullWidth label='کوچه' value={data.receiver_customer.alley} /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={4} sm={4} md={2} lg={1} xl={1}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField disabled fullWidth label='پلاک' value={data.receiver_customer.plaque} /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={4} sm={4} md={2} lg={1} xl={1}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField disabled fullWidth label='طبقه' value={data.receiver_customer.floor} /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={4} sm={4} md={2} lg={1} xl={1}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField disabled fullWidth label='واحد' value={data.receiver_customer.home_unit} /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*    </Grid> *!/ *!/ */}
            {/*  /!*  /!*  </CardContent> *!/ *!/ */}
            {/*  /!*  /!* </Card> *!/ *!/ */}
            {/*  /!*  /!* <Card *!/ *!/ */}
            {/*  /!*  /!*  sx={{ *!/ *!/ */}
            {/*  /!*  /!*    p: 5, *!/ *!/ */}
            {/*  /!*  /!*    '& .MuiInputBase-input.Mui-disabled': { *!/ *!/ */}
            {/*  /!*  /!*      WebkitTextFillColor: 'rgba(76,78,100,0.87)' *!/ *!/ */}
            {/*  /!*  /!*    }, *!/ *!/ */}
            {/*  /!*  /!*    '& 	.MuiInputLabel-root.Mui-disabled': { *!/ *!/ */}
            {/*  /!*  /!*      WebkitTextFillColor: 'rgba(76,78,100,0.87)' *!/ *!/ */}
            {/*  /!*  /!*    }, *!/ *!/ */}
            {/*  /!*  /!*    mb: 5 *!/ *!/ */}
            {/*  /!*  /!*  }} *!/ *!/ */}
            {/*  /!*  /!* > *!/ *!/ */}
            {/*  /!*  /!*  <CardHeader title='مرسوله' /> *!/ *!/ */}
            {/*  /!*  /!*  <CardContent> *!/ *!/ */}
            {/*  /!*  /!*    <Grid container spacing={2}> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField disabled fullWidth label='وزن (گرم)' value={data.product.weight} dir='ltr' /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField disabled label='طول (سانتی متر)' value={data.product.length} fullWidth dir='ltr' /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField disabled label='عرض (سانتی متر)' value={data.product.width} fullWidth dir='ltr' /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField *!/ *!/ */}
            {/*  /!*  /!*          disabled *!/ *!/ */}
            {/*  /!*  /!*          label='ارتفاع (سانتی متر)' *!/ *!/ */}
            {/*  /!*  /!*          value={data.product.height} *!/ *!/ */}
            {/*  /!*  /!*          fullWidth *!/ *!/ */}
            {/*  /!*  /!*          dir='ltr' *!/ *!/ */}
            {/*  /!*  /!*        /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField *!/ *!/ */}
            {/*  /!*  /!*          disabled *!/ *!/ */}
            {/*  /!*  /!*          label='ارزش کالا (ریال)' *!/ *!/ */}
            {/*  /!*  /!*          value={data.product.product_cost} *!/ *!/ */}
            {/*  /!*  /!*          dir='ltr' *!/ *!/ */}
            {/*  /!*  /!*          fullWidth *!/ *!/ */}
            {/*  /!*  /!*        /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField disabled label='وسیله حمل کننده' value={data.product.vehicle} fullWidth /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField *!/ *!/ */}
            {/*  /!*  /!*          disabled *!/ *!/ */}
            {/*  /!*  /!*          label='نیاز به حمل ویژه' *!/ *!/ */}
            {/*  /!*  /!*          value={data.product.special_vehicle_required ? 'دارد' : 'ندارد'} *!/ *!/ */}
            {/*  /!*  /!*          fullWidth *!/ *!/ */}
            {/*  /!*  /!*        /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField *!/ *!/ */}
            {/*  /!*  /!*          disabled *!/ *!/ */}
            {/*  /!*  /!*          label='بار خاص' *!/ *!/ */}
            {/*  /!*  /!*          value={data.product.special_product ? 'دارد' : 'ندارد'} *!/ *!/ */}
            {/*  /!*  /!*          fullWidth *!/ *!/ */}
            {/*  /!*  /!*        /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*    </Grid> *!/ *!/ */}
            {/*  /!*  /!*  </CardContent> *!/ *!/ */}
            {/*  /!*  /!* </Card> *!/ *!/ */}
            {/*  /!*  /!* <Card *!/ *!/ */}
            {/*  /!*  /!*  sx={{ *!/ *!/ */}
            {/*  /!*  /!*    p: 5, *!/ *!/ */}
            {/*  /!*  /!*    '& .MuiInputBase-input.Mui-disabled': { *!/ *!/ */}
            {/*  /!*  /!*      WebkitTextFillColor: 'rgba(76,78,100,0.87)' *!/ *!/ */}
            {/*  /!*  /!*    }, *!/ *!/ */}
            {/*  /!*  /!*    '& 	.MuiInputLabel-root.Mui-disabled': { *!/ *!/ */}
            {/*  /!*  /!*      WebkitTextFillColor: 'rgba(76,78,100,0.87)' *!/ *!/ */}
            {/*  /!*  /!*    }, *!/ *!/ */}
            {/*  /!*  /!*    mb: 5 *!/ *!/ */}
            {/*  /!*  /!*  }} *!/ *!/ */}
            {/*  /!*  /!* > *!/ *!/ */}
            {/*  /!*  /!*  <CardHeader title='پرداخت' /> *!/ *!/ */}
            {/*  /!*  /!*  <CardContent> *!/ *!/ */}
            {/*  /!*  /!*    <Grid container spacing={2}> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField disabled label='نحوه چرداخت' value={data.product.payment_method} fullWidth /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField *!/ *!/ */}
            {/*  /!*  /!*          disabled *!/ *!/ */}
            {/*  /!*  /!*          label='نیازمند جابجابی' *!/ *!/ */}
            {/*  /!*  /!*          value={data.product.movement_required ? 'دارد' : 'ندارد'} *!/ *!/ */}
            {/*  /!*  /!*          fullWidth *!/ *!/ */}
            {/*  /!*  /!*        /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField *!/ *!/ */}
            {/*  /!*  /!*          disabled *!/ *!/ */}
            {/*  /!*  /!*          label='نیازمند بارگیری' *!/ *!/ */}
            {/*  /!*  /!*          value={data.product.product_loading_required ? 'دارد' : 'ندارد'} *!/ *!/ */}
            {/*  /!*  /!*          fullWidth *!/ *!/ */}
            {/*  /!*  /!*        /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField *!/ *!/ */}
            {/*  /!*  /!*          disabled *!/ *!/ */}
            {/*  /!*  /!*          label='نیازمند تخلیه' *!/ *!/ */}
            {/*  /!*  /!*          value={data.product.product_unloading_required ? 'دارد' : 'ندارد'} *!/ *!/ */}
            {/*  /!*  /!*          fullWidth *!/ *!/ */}
            {/*  /!*  /!*        /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}> *!/ *!/ */}
            {/*  /!*  /!*        <TextField *!/ *!/ */}
            {/*  /!*  /!*          disabled *!/ *!/ */}
            {/*  /!*  /!*          label='سفارش برون شهری' *!/ *!/ */}
            {/*  /!*  /!*          value={data.product.is_suburb ? 'دارد' : 'ندارد'} *!/ *!/ */}
            {/*  /!*  /!*          fullWidth *!/ *!/ */}
            {/*  /!*  /!*        /> *!/ *!/ */}
            {/*  /!*  /!*      </Grid> *!/ *!/ */}
            {/*  /!*  /!*    </Grid> *!/ *!/ */}
            {/*  /!*  /!*  </CardContent> *!/ *!/ */}
            {/*  /!*  /!* </Card> *!/ *!/ */}
            {/*  /!* </AccordionDetails> *!/ */}
            {/* </Accordion> */}
          </>
        )}
      </CardContent>
      <Loading open={loading} />
    </Card>
  )
}

Index.acl = {
  action: 'read',
  subject: 'every-page'
}

export default Index
