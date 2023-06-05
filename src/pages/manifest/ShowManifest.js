import React, { useEffect, useState } from 'react'
import Drawer from '@mui/material/Drawer'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import Close from 'mdi-material-ui/Close'
import toast from 'react-hot-toast'
import Grid from '@mui/material/Grid'
import Table from '@core/components/table/table'
import Paper from '@mui/material/Paper'
import { fetchManifest } from './requests'
import TableHeader from '../../@core/components/table-header/TableHeader'

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const schema = yup.object().shape({
  hub_destination_name: yup.string(),
  hub_source_name: yup.string(),
  logistic_name: yup.string(),
  manifest_id: yup.number()
})

const GridContainer = styled(Paper)({
  flexGrow: 1,
  '.MuiDataGrid-root': {
    border: 'none'
  },
  '.MuiTablePagination-displayedRows': {
    display: 'none'
  }
})
function SidebarAddCourier({ open, toggle, user, showUser }) {
  const [data, setData] = useState([])
  const [downloadData, setDownloadData] = useState([])
  const [sortModel, setSortModel] = useState({ page: 1, page_size: 10, sort_by: 'id desc' })

  const emptyForm = {
    hub_destination_name: '',
    hub_source_name: '',
    logistic_name: '',
    manifest_id: 0
  }

  const headers = [
    { key: 'accountant_weight', label: 'وزن محتسب' },
    { key: 'barname_id', label: 'شماره بارنامه' },
    { key: 'content', label: 'محتویات' },
    { key: 'manifest_id', label: 'شماره مانیفست' },
    { key: 'payment_method', label: 'روش پرداخت' },
    { key: 'receiver_name', label: 'گیرنده' },
    { key: 'sender_name', label: 'فرستنده' },
    { key: 'weight', label: 'وزن' }
  ]

  const downloadApi = () =>
    toast.promise(
      fetchManifest(user.id).then(response => {
        if (response.data.manifests === null) {
          setDownloadData([])
        } else {
          setDownloadData(response.data.manifests.sub_manifests)
        }
      }),
      {
        loading: 'در حال دانلود',
        success: 'دانلود انجام شد',
        error: err =>
          err?.response?.data?.message
            ? err.response?.data?.message
            : 'خطایی رخ داده است.از خالی نبودن موارد دانلود مطمئن شوید.'
      }
    )

  const defaultValues = user || emptyForm

  const {
    reset,
    control,
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

  const columns = [
    {
      flex: 0.1,
      field: 'id',
      minWidth: 50,
      headerName: 'شماره سفارش',
      filterable: false,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.id}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 50,
      field: 'barname_id',
      headerName: 'شماره بارنامه',
      sortable: false,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.barname_id}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 50,
      field: 'weight',
      headerName: ' وزن به کیلو گرم',
      sortable: false,

      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.weight}کیلوگرم
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 50,
      field: 'accountant_weight',
      headerName: 'وزن محتسب',
      sortable: false,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.accountant_weight}
            </Typography>
          </Box>
        </Box>
      )
    },

    {
      flex: 0.1,
      field: 'payment_method',
      minWidth: 50,
      headerName: 'نوع تسویه',

      hideable: false,
      sortable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.payment_method}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: 'price',
      minWidth: 50,
      headerName: 'مبلغ ',

      hideable: false,
      sortable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.price}ریال
          </Typography>
        </Box>
      )
    }
  ]
  useEffect(() => {
    setDownloadData([])
    fetchManifest(user.id)
      .then(response => {
        if (response.data.manifests === null) {
          setData([])
        } else {
          reset(response.data.manifests)
          setData(response.data.manifests.sub_manifests)
        }
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
      })
  }, [setDownloadData])

  return (
    <Drawer
      open={open}
      anchor='left'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: '100%', sm: '100%', lg: '80%', xl: '80%' } } }}
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
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='manifest_id'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='شماره مانیفست'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.manifest_id)}
                      disabled={showUser}
                      inputProps={{ min: 0, style: { textAlign: 'left' } }}
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='logistic_name'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='نام لاجستیک'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.logistic_name)}
                      disabled={showUser}
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='hub_source_name'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='مبدا'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.hub_source_name)}
                      disabled={showUser}
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='hub_destination_name'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='مقصد'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.hub_destination_name)}
                      disabled={showUser}
                    />
                  )}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <GridContainer>
                <TableHeader noAdd name='مانیفست' api={downloadApi} headers={headers} data={downloadData} />
                <Table
                  data={data}
                  pageSizeDefault='100'
                  noFilter
                  sortModel={sortModel}
                  setSortModel={setSortModel}
                  columns={columns}
                />
              </GridContainer>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Drawer>
  )
}

export default SidebarAddCourier
