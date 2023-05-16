import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { getGridStringOperators } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import toast from 'react-hot-toast'
import { saveAs } from 'file-saver'
import TableHeader from '@core/components/table-header/TableHeader'
import Table from '@core/components/table/table'
import Download from 'mdi-material-ui/Download'
import Button from '@mui/material/Button'
import { Autocomplete } from '@mui/material'
import TextField from '@mui/material/TextField'
import { downloadDataFromServer, downloadGroups, downloadGroupsWithTag, fetchData } from './requests'
import AddFilter from './addFilter'

export const GridContainer = styled(Paper)({
  flexGrow: 1,
  '.MuiDataGrid-root': {
    border: 'none'
  },
  '.MuiTablePagination-displayedRows': {
    display: 'none'
  }
})

const fonts = ['IranSans', ' IranYekan', 'BNazanin', 'BMitra']
const pageSizes = ['A3', 'A4', 'A5', 'A6', 'A7']

function ACLPage() {
  const [sortModel, setSortModel] = useState({ page: 1, page_size: 10, sort_by: '1 asc', search: '' })
  const [data, setData] = useState([])
  const [change, setChange] = useState(false)
  const [downloadData, setDownloadData] = useState([])
  const [filter, setFilter] = useState({})
  const [addFilterOpen, setAddFilterOpen] = useState(false)
  const [font, setFont] = useState('IranSans')
  const [pageSize, setPageSize] = useState('A4')

  const headers = [
    { key: 'id', label: 'شناسه' },
    { key: 'time', label: 'تاریخ ثبت' },
    { key: 'total', label: 'مبلغ سفارش' },
    { key: 'state', label: 'وضعیت' },
    { key: 'sender_phone_number', label: 'موبایل فرستنده' },
    { key: 'sender_tel_number', label: 'تلفن فرستنده' },
    { key: 'sender_ostan', label: 'استان فرستنده' },
    { key: 'sender_shahr', label: 'شهر فرستنده' },
    { key: 'sender_address', label: 'آدرس فرستنده' },
    { key: 'receiver_phone_number', label: 'موبایل گیرنده' },
    { key: 'receiver_tel_number', label: 'تلفن گیرنده' },
    { key: 'receiver_ostan', label: 'استان گیرنده' },
    { key: 'receiver_shahr', label: 'شهر گیرنده' },
    { key: 'receiver_address', label: 'آدرس گیرنده' },
    { key: 'weight', label: 'وزن' },
    { key: 'size_y', label: 'طول' },
    { key: 'size_x', label: 'عرض' },
    { key: 'size_z', label: 'ارتفاع' },
    { key: 'bar_code_url', label: 'بارکد' },
    { key: 'pdf_url', label: 'بارنامه' },
    { key: 'barname_generated_id', label: 'شماره بارنامه' },
    { key: 'sender_signature_url', label: 'امضا فرستنده' },
    { key: 'receiver_signature_url', label: 'امضا گیرنده' },
    { key: 'bar_type', label: 'نوع بار' },
    { key: 'payment_method', label: 'نحوه پرداخت' },
    { key: 'payment_state', label: 'نوع پرداخت' },
    { key: 'requires_packing', label: 'نیازمند بسته بندی' },
    { key: 'requires_special_shipping', label: 'بار خاص' },
    { key: 'price', label: 'قیمت کل' },
    { key: 'hub_origin_id', label: 'شناسه هاب مبدا' },
    { key: 'hub_destination_id', label: 'شناسه هاب مقصد' },
    { key: 'logistic_id', label: 'شناسه لاجستیک' },
    { key: 'explain', label: 'توضیحات' },
    { key: 'off_percent_status', label: 'تخفیف' },
    { key: 'off_percent', label: 'مقدار تخفیف' },
    { key: 'content', label: 'محتویات' },
    { key: 'rent', label: 'کرایه' },
    { key: 'stamp', label: 'تمبر' },
    { key: 'packing', label: 'بسته بندی' },
    { key: 'collect', label: 'جمع آوری' },
    { key: 'services', label: 'خدمات' },
    { key: 'accountant_weight', label: 'وزن محتسب' },
    { key: 'distribution', label: 'توزیع' },
    { key: 'taxation', label: 'مالیات' },
    { key: 'insurance', label: 'بیمه' },
    { key: 'added_value', label: 'ارزش افزوده' },
    { key: 'nerkh_be_kg', label: 'نرخ به کیلوگرم' }
  ]

  const getPersianValue = elem => (elem ? 'دارد' : 'ندارد')

  const downloadApi = () =>
    toast.promise(
      downloadDataFromServer().then(response => {
        setDownloadData(
          response.data.map(element => ({
            ...element,
            off_percent_status: getPersianValue(element.off_percent_status),
            requires_special_shipping: getPersianValue(element.requires_special_shipping),
            requires_packing: getPersianValue(element.requires_packing)
          }))
        )
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

  const filterOperators = getGridStringOperators().filter(({ value }) =>
    ['contains' /* add more over time */].includes(value)
  )

  const columns = [
    {
      flex: 0.1,
      field: '1',
      minWidth: 50,
      headerName: 'تاریخ و ساعت',
      filterable: false,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.time}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 50,
      field: '2',
      headerName: 'وضعیت',
      filterOperators,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.state}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: '0 sender_name',
      minWidth: 50,
      filterOperators,
      sortable: false,
      headerName: 'فرستنده',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.sender.full_name}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: '0 sender_city',
      minWidth: 50,
      filterOperators,
      headerName: 'شهر فرستنده',
      sortable: false,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.sender.shahr}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: '0 reiever_name',
      minWidth: 50,
      filterOperators,
      headerName: 'گیرنده',
      sortable: false,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.receiver.full_name}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: '0 reciever_city',
      minWidth: 50,
      filterOperators,
      headerName: 'شهر گیرنده',
      sortable: false,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.receiver.shahr}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 50,
      field: '3',
      headerName: 'شماره بارنامه',
      hideable: false,
      filterOperators,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.id}
            </Typography>
          </Box>
        </Box>
      )
    },

    {
      flex: 0.1,
      field: '4',
      minWidth: 50,
      headerName: 'دانلود',
      filterOperators,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button variant='contained' onClick={() => saveAs(row.pdf_url, `${row.id}.pdf`)}>
            دانلود
          </Button>
        </Box>
      )
    }
  ]

  useEffect(() => {
    setDownloadData([])
    fetchData(sortModel, filter)
      .then(response => {
        if (response.data.barNameModels === null) {
          setData([])
        } else setData(response.data.barNameModels)
        if (change) setChange(false)
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
      })
  }, [sortModel, setDownloadData, change, filter])

  const toggleAddUserDrawer = () => setAddFilterOpen(!addFilterOpen)
  const hasFilter = Object.keys(filter).length !== 0

  const handleRemoveFilter = () => {
    setFilter({})
    setChange(true)
  }

  const downloadGrouped = () => {
    toast.promise(
      downloadGroups({ ...filter, size: pageSize, font }).then(response => {
        if (response.data !== null) {
          saveAs(response.data, 'groupedBarname.pdf')
        }
      }),
      {
        loading: 'در حال دریافت اطلاعات',
        success: 'فایل دانلود شد',
        error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
      }
    )
  }

  const downloadTags = () => {
    toast.promise(
      downloadGroupsWithTag({ ...filter, size: pageSize, font }).then(response => {
        if (response.data !== null) {
          saveAs(response.data, 'groupedTagBarname.pdf')
        }
      }),
      {
        loading: 'در حال دریافت اطلاعات',
        success: 'فایل دانلود شد',
        error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
      }
    )
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} xl={12}>
        <Card>
          <TableHeader data={downloadData} api={downloadApi} headers={headers} name='گزارش ورود و خروج' noAdd>
            <Button sx={{ mb: 2 }} onClick={toggleAddUserDrawer} variant='contained'>
              فیلتر
            </Button>
            {hasFilter && (
              <Button sx={{ mb: 2 }} onClick={handleRemoveFilter} variant='contained' color='warning'>
                حذف فیلتر
              </Button>
            )}

            <Autocomplete
              select
              options={fonts}
              onChange={ev => setFont(ev.target.innerText)}
              value={font}
              disableClearable
              sx={{ mb: 2, minWidth: '200px' }}
              renderInput={params => (
                <TextField
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...params}
                  label='انتخاب فونت'
                  variant='outlined'
                />
              )}
            />
            <Autocomplete
              select
              options={pageSizes}
              onChange={ev => setPageSize(ev.target.innerText)}
              value={pageSize}
              disableClearable
              sx={{ mb: 2, minWidth: '100px' }}
              renderInput={params => (
                <TextField
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...params}
                  label='انتخاب سایز'
                  variant='outlined'
                />
              )}
            />
            <Button sx={{ mb: 2 }} onClick={downloadGrouped} variant='contained' color='info' startIcon={<Download />}>
              دانلود گروهی
            </Button>
            <Button sx={{ mb: 2 }} onClick={downloadTags} variant='contained' color='success' startIcon={<Download />}>
              دانلود گروهی همراه با تگ
            </Button>
          </TableHeader>
          <GridContainer sx={{ p: 4, m: 1 }}>
            <Table columns={columns} data={data} sortModel={sortModel} setSortModel={setSortModel} noFilter />
          </GridContainer>
        </Card>
      </Grid>
      {addFilterOpen && (
        <AddFilter
          setFilter={setFilter}
          filter={filter}
          open={addFilterOpen}
          toggle={toggleAddUserDrawer}
          setChange={setChange}
        />
      )}
    </Grid>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'every-page'
}

export default ACLPage
