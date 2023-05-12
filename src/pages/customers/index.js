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
  const [sortModel, setSortModel] = useState({ page: 1, page_size: 10, sort_by: '1 id asc', serach: '' })
  const [data, setData] = useState([])
  const [change, setChange] = useState(false)
  const [downloadData, setDownloadData] = useState([])

  const headers = [
    { key: 'full_name', label: 'تام کاربر' },
    { key: 'phone_number', label: 'موبایل' },
    { key: 'area_code', label: 'پیش شماره' },
    { key: 'tel_number', label: 'شماره تلفن' },
    { key: 'postal_code', label: 'کدپستی' },
    { key: 'natural_number', label: 'کدملی' },
    { key: 'ostan', label: 'استان' },
    { key: 'shahr', label: 'شهر' },
    { key: 'khiaban_asli', label: 'خیابان اصلی' },
    { key: 'khiaban_faree', label: 'خیابان فرعی' },
    { key: 'kooche', label: 'کوچه' },
    { key: 'tabaghe', label: 'طبقه' },
    { key: 'plak', label: 'پلاک' },
    { key: 'vahed', label: 'واحد' },
    { key: 'time', label: 'تاریخ ایجاد' },
    { key: 'other_information', label: 'سایر اطلاعات' },
    { key: 'texes', label: 'شامل مالیات' },
    { key: 'off_percent_status', label: 'شامل تخفیف' },
    { key: 'off_percent', label: 'درصد تخفیف' },
    { key: 'sherkat_name', label: 'شرکت' },
    { key: 'chapter_code', label: 'کد سرفصل' },
    { key: 'level_code', label: 'کد سطح' }
  ]

  const downloadApi = () =>
    toast.promise(
      downloadDataFromServer().then(response => {
        setDownloadData(
          response.data.map(element => {
            const hasDiscount = element.off_percent_status ? 'می باشد' : 'نمی باشد'
            const hasTexes = element.texes ? 'می باشد' : 'نمی باشد'

            return {
              ...element,
              off_percent_status: hasDiscount,
              texes: hasTexes
            }
          })
        )
      }),
      {
        loading: 'در حال دانلود',
        success: 'دانلود انجام شد',
        error: err =>
          err.response?.data?.message
            ? err.response?.data?.message
            : 'خطایی رخ داده است.از خالی نبودن موارد دانلود مطمئن شوید.'
      }
    )
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)
  const toggleEditUserDrawer = () => setOpenEdit(!openEdit)
  const toggleShowUserDrawer = () => setShowUser(!showUser)

  const deleteFunction = company => {
    toast.promise(deleteUser(company.natural_number).then(setChange(true)), {
      loading: 'در حال حذف مشتری',
      success: 'با موفقیت حذف شد',
      error: err => (err.response.data.message ? err.response.data.message : 'خطایی رخ داده است')
    })
  }

  const filterOperators = getGridStringOperators().filter(({ value }) =>
    ['contains' /* add more over time */].includes(value)
  )

  const columns = [
    {
      flex: 0.1,
      minWidth: 150,
      field: '2 full_name',
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
      minWidth: 150,
      field: '3 sherkat_name',
      filterOperators,
      headerName: 'شرکت',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.sherkat_name}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: '4 natural_number',
      minWidth: 150,
      filterOperators,
      headerName: 'کدملی',
      filterable: false,
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
      field: '5 tel_number',
      minWidth: 150,
      filterOperators,
      headerName: 'شماره تلفن',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.tel_number}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: '6 phone_number',
      minWidth: 150,
      filterOperators,
      headerName: 'موبایل',
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
      field: 'postal_code',
      minWidth: 150,
      filterOperators,
      headerName: 'کدپستی',
      sortable: false,
      filterable: false,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.postal_code}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: '7 shahr',
      minWidth: 150,
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
        if (response.data.person === null) {
          setData([])
        } else setData(response.data.person)
        if (change) setChange(false)
      })
      .catch(err => {
        const errorMessage = err.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است'
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
            name='مشتری'
          />
          <GridContainer sx={{ p: 4, m: 1 }}>
            <Table columns={columns} data={data} sortModel={sortModel} setSortModel={setSortModel} />
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
