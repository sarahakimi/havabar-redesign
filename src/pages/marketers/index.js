import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { getGridStringOperators } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import moment from 'jalali-moment'
import Paper from '@mui/material/Paper'
import toast from 'react-hot-toast'
import Table from '@core/components/table/table'

import TableHeader from '@core/components/table-header/TableHeader'
import RowOptions from '@core/components/row-options/row-options'
import AddUserDrawer from './AddUserDrawer'
import { deleteUser, downloadDataFromServer, fetchData } from './requests'

export const GridContainer = styled(Paper)({
  flexGrow: 1,
  '.MuiDataGrid-root': {
    border: 'none'
  },
  '.MuiTablePagination-displayedRows': {
    display: 'none'
  }
})

function ACLPage() {
  const [selectedCompany, setSelectedCompany] = useState({})
  const [openEdit, setOpenEdit] = useState(false)
  const [showUser, setShowUser] = useState(false)
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [sortModel, setSortModel] = useState({ page: 1, page_size: 10, sort_by: '1 asc', search: '' })
  const [data, setData] = useState([])
  const [change, setChange] = useState(false)
  const [downloadData, setDownloadData] = useState([])

  const headers = [
    { key: 'id', label: 'شناسه' },
    { key: 'full_name', label: 'تام کاربر' },
    { key: 'phone_number', label: 'موبایل' },
    { key: 'tel_number', label: 'شماره تلفن' },
    { key: 'postal_code', label: 'کدپستی' },
    { key: 'natural_number', label: 'کدملی' },
    { key: 'ostan', label: 'استان' },
    { key: 'shahr', label: 'شهر' },
    { key: 'khiaban_asli', label: 'خیابان اصلی' },
    { key: 'khiaban_faree', label: 'خیابان فرعی' },
    { key: 'kooche', label: 'کوچه' },
    { key: 'plak', label: 'پلاک' },
    { key: 'tabaghe', label: 'طبقه' },
    { key: 'vahed', label: 'واحد' },
    { key: 'time', label: 'تاریخ ایجاد' }
  ]

  const downloadApi = () =>
    toast.promise(
      downloadDataFromServer().then(response => {
        setDownloadData(
          response.data.map(element => ({
            ...element,
            time: moment(element.time, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')
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
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)
  const toggleEditUserDrawer = () => setOpenEdit(!openEdit)
  const toggleShowUserDrawer = () => setShowUser(!showUser)

  const deleteFunction = company => {
    toast.promise(deleteUser(company.natural_number).then(setChange(true)), {
      loading: 'در حال حذف بازاریاب',
      success: 'با موفقیت حذف شد',
      error: err => (err?.response?.data?.message ? err?.response?.data?.message : 'خطایی رخ داده است')
    })
  }

  const filterOperators = getGridStringOperators().filter(({ value }) =>
    ['contains' /* add more over time */].includes(value)
  )

  const columns = [
    {
      flex: 0.1,
      minWidth: 50,
      field: 'name',
      filterOperators,
      headerName: 'نام و نام خانوادگی',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.full_name}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: 'person_numbers',
      minWidth: 50,
      filterOperators,
      headerName: 'تعداد کاربر',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.person_numbers}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.15,
      field: 'natural_code',
      minWidth: 50,
      filterOperators,
      headerName: 'کدملی',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.natural_number}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: 'phone',
      minWidth: 50,
      filterOperators,
      headerName: 'شماره تلفن',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.phone_number}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: 'city',
      minWidth: 50,
      filterOperators,
      headerName: 'شهر',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.shahr}
          </Typography>
        </Box>
      )
    },

    {
      flex: 0.1,
      minWidth: 50,
      sortable: false,
      hideable: false,
      filterable: false,
      field: 'گزینه ها',
      headerName: 'گزینه ها',
      renderCell: ({ row }) => (
        <RowOptions
          company={row}
          toggleShowUserDrawer={toggleShowUserDrawer}
          toggleEditUserDrawer={toggleEditUserDrawer}
          setSelectedCompany={setSelectedCompany}
          setChange={setChange}
          selectedCompany={selectedCompany}
          deleteFunction={deleteFunction}
        />
      )
    }
  ]
  useEffect(() => {
    setDownloadData([])
    fetchData(sortModel)
      .then(response => {
        if (response.data.marketer === null) {
          setData([])
        } else setData(response.data.marketer)
        if (change) setChange(false)
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
      })
  }, [sortModel, setDownloadData, change])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <TableHeader
            toggle={toggleAddUserDrawer}
            data={downloadData}
            api={downloadApi}
            headers={headers}
            name='بازاریاب'
          />
          <GridContainer sx={{ p: 4, m: 1 }}>
            <Table columns={columns} data={data} sortModel={sortModel} setSortModel={setSortModel} noFilter />
          </GridContainer>
        </Card>
      </Grid>
      {addUserOpen && (
        <AddUserDrawer
          open={addUserOpen}
          toggle={toggleAddUserDrawer}
          setChange={setChange}
          edit={false}
          company={null}
          showUser={false}
        />
      )}
      {openEdit && (
        <AddUserDrawer
          open={openEdit}
          toggle={toggleEditUserDrawer}
          setChange={setChange}
          user={selectedCompany}
          edit
          showUser={false}
        />
      )}
      {showUser && (
        <AddUserDrawer
          open={showUser}
          toggle={toggleShowUserDrawer}
          setChange={setChange}
          edit
          user={selectedCompany}
          showUser
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
