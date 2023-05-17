import Box from '@mui/material/Box'
import {
  Card,
  CardContent,
  StepConnector,
  stepConnectorClasses,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import { Controller, useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import toast from 'react-hot-toast'
import { styled } from '@mui/material/styles'
import Check from 'mdi-material-ui/Check'
import * as yup from 'yup'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'
import Link from 'next/link'
import urls from '../../configs/requestEndpoints'
import http from '../../services/http'
import Loading from '../../@core/components/loading/loading'
import BlankLayout from '../../@core/layouts/BlankLayout'

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
        toast.error(err.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داد')
      })
  }

  return (
    <Box display='flex' flexDirection='Column' justifyContent='center' alignItems='center' width='100vw'>
      <center>
        <div className='shine'>
          <img src='/images/favicon.png' />
        </div>
      </center>
      <h1 style={{ color: '#093763' }}>سامانه رهگیری مرسولات هوابار</h1>
      <h2 style={{ color: '#093763' }}>
        <b>HAVABAR EXPRESS</b>
      </h2>
      <h5 style={{ color: '#093763' }}>
        <b>Cargo Service</b>
      </h5>

      <Card container spacing={6} sx={{ width: '80%' }}>
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
                <Link passHref href='/login'>
                  <Typography component={MuiLink} variant='body2' sx={{ color: 'primary.main' }}>
                    بازکشت به صفحه ورود
                  </Typography>
                </Link>
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
                      <TableCell sx={{ color: 'black', fontWeight: 500, textAlign: 'center' }}>
                        رویداد : توزیع
                      </TableCell>
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
            </>
          )}
        </CardContent>
        <Loading open={loading} />
      </Card>
    </Box>
  )
}
Index.getLayout = page => <BlankLayout>{page}</BlankLayout>
Index.guestGuard = true

export default Index
