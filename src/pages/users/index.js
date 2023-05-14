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
import { deleteUser, fetchData, downloadDataFromServer } from './requests'

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

  const roles = [
    { value: 'add_company_role', persianName: '' },
    { value: 'add_user_role', persianName: 'دسترسی ایجاد کاربر' },
    { value: 'delete_user_role', persianName: 'دسترسی حذف کاربر' },
    { value: 'edit_user_role', persianName: 'دسترسی ویرایش کاربر' },
    { value: 'login_report_role', persianName: 'دسترسی گزارش ورود' },
    { value: 'get_admin_role', persianName: 'دسترسی گرفتن کاربر' },
    { value: 'collect_suborder_role', persianName: 'دسترسی جمع آوری سفارش' },
    { value: 'delivery_to_logistic_role', persianName: 'دسترسی رساندن به لاجستیک' },
    { value: 'delivery_from_logistic_role', persianName: 'دسترسی گرفتن از لاجستیک' },
    { value: 'distribute_suborder_role', persianName: 'دسترسی توزیع سفارش' },
    { value: 'delete_manifest_role', persianName: 'دسترسی حذف مانیفست' },
    { value: 'get_backup_role', persianName: 'دسترسی گرفتن بکاپ' },
    { value: 'insert_backup_role', persianName: 'دسترسی جایگذاری بکاپ' },
    { value: 'change_order_number_role', persianName: 'دسترسی تغییرات بازه سفارشات' },
    { value: 'user_log_role', persianName: 'دسترسی گزارش کاربران' },
    { value: 'add_peyk_to_order_role', persianName: 'دسترسی انتساب پیک' },
    { value: 'change_price_role', persianName: 'دسترسی تغییرات قیمت' },
    { value: 'add_order_role', persianName: 'دسترسی ایجاد سفارش' },
    { value: 'edit_order_role', persianName: 'دسترسی ویرایش سفارش' },
    { value: 'delete_order_role', persianName: 'دسترسی حذف سفارش' },
    { value: 'add_person_role', persianName: 'دسترسی ایجاد مشتری' },
    { value: 'edit_person_role', persianName: 'دسترسی ویرایش مشتری' },
    { value: 'delete_person_role', persianName: 'دسترسی حذف مشتری' },
    { value: 'add_marketer_role', persianName: 'دسترسی ایجاد بازاریاب' },
    { value: 'edit_marketer_role', persianName: 'دسترسی ویرایش بازاریاب' },
    { value: 'delete_marketer_role', persianName: 'دسترسی حذف بازاریاب' },
    { value: 'add_hub_role', persianName: 'دسترسی ایجاد هاب' },
    { value: 'edit_hub_role', persianName: 'دسترسی ویرایش هاب' },
    { value: 'delete_hub_role', persianName: 'دسترسی حذف هاب' },
    { value: 'add_logistic_role', persianName: 'دسترسی ایجاد لاجستیک' },
    { value: 'edit_logistic_role', persianName: 'دسترسی ویرایش لاجستیک' },
    { value: 'delete_logistic_role', persianName: 'دسترسی حذف لاجستیک' },
    { value: 'add_discount', persianName: 'دسترسی تخفیف ها' },
    { value: 'change_setting', persianName: 'دسترسی تغییر لوگو' },
    { value: 'get_peyk_role', persianName: 'دسترسی گرفتن پیک' }
  ]

  const headers = [
    { key: 'id', label: 'شناسه' },
    { key: 'name', label: 'تام کاربر' },
    { key: 'username', label: 'تام کاربری' },
    { key: 'phone', label: 'شماره تلفن' },
    { key: 'time', label: 'تاریخ ایجاد' },
    { key: 'natural_code', label: 'کدملی' },
    { key: 'hub_id', label: 'شناسه هاب' },
    { key: 'hub_name', label: 'نام هاب' },
    ...roles.map(role => ({ key: role.value, label: role.persianName }))
  ]

  const downloadApi = () =>
    toast.promise(
      downloadDataFromServer().then(response => {
        setDownloadData(
          response.data.map(element => ({
            ...element,
            time: moment(element.time, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD'),
            ...roles.reduce((obj, item) => {
              const has = element[item.value] ? 'دارد' : 'ندارد'

              return Object.assign(obj, { [item.value]: has })
            }, {})
          }))
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
    toast.promise(deleteUser(company.natural_code).then(setChange(true)), {
      loading: 'در حال حذف کاربر',
      success: 'با موفقیت حذف شد',
      error: err => (err.response.data.message ? err.response.data.message : 'خطایی رخ داده است')
    })
  }

  const filterOperators = getGridStringOperators().filter(({ value }) =>
    ['contains' /* add more over time */].includes(value)
  )

  const columns = [
    {
      flex: 0.2,
      minWidth: 230,
      field: '2',
      headerName: 'نام و نام خانوادگی',
      hideable: false,
      filterOperators,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.name}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.2,
      minWidth: 230,
      field: 'hub',
      headerName: 'نام هاب',
      hideable: false,
      sortable: false,
      filterOperators,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.hub_name}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.2,
      minWidth: 230,
      field: '3',
      headerName: 'کد هاب',
      hideable: false,
      filterOperators,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.hub_id}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.15,
      field: 'natural_code',
      minWidth: 150,
      headerName: 'کدملی',
      filterOperators,
      sortable: false,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.natural_code}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.15,
      field: '4',
      minWidth: 150,
      headerName: 'شماره تلفن',
      filterOperators,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.phone}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.15,
      field: '5',
      minWidth: 150,
      headerName: 'کد کاربر',
      filterOperators,
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
      minWidth: 90,
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
        if (response.data.admins === null) {
          setData([])
        } else setData(response.data.admins)
        if (change) setChange(false)
      })
      .catch(err => {
        const errorMessage = err.response.data.message ? err.response.data.message : 'خطایی رخ داده است'
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
            name='کاربر'
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
          roles={roles}
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
          roles={roles}
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
          roles={roles}
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
