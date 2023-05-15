import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { getGridStringOperators } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import moment from 'jalali-moment'
import Paper from '@mui/material/Paper'
import CustomChip from '@core/components/mui/chip'
import toast from 'react-hot-toast'
import Table from '@core/components/table/table'
import AddCourierDrawer from './AddCourierDrawer'
import TableHeader from '../../@core/components/table-header/TableHeader'
import EditDuration from './EditDuration'
import { fetchData } from './requests'
import RowOptions from './row-options'

export const GridContainer = styled(Paper)({
  flexGrow: 1,
  '.MuiDataGrid-root': {
    border: 'none'
  },
  '.MuiTablePagination-displayedRows': {
    display: 'none'
  }
})

const userStatusObj = {
  فعال: 'success',
  غیرفعال: 'secondary'
}

function ACLPage() {
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [sortModel, setSortModel] = useState({ page: 1, page_size: 10, sort_by: '1 asc' })
  const [data, setData] = useState([])
  const [selectedCompany, setSelectedCompany] = useState({})
  const [openEdit, setOpenEdit] = useState(false)
  const [openDurationEdit, setOpenDurationEdit] = useState(false)
  const [showUser, setShowUser] = useState(false)
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)
  const toggleEditUserDrawer = () => setOpenEdit(!openEdit)
  const toggleEditDurationDrawer = () => setOpenDurationEdit(!openDurationEdit)
  const toggleShowUserDrawer = () => setShowUser(!showUser)
  const [change, setChange] = useState(false)

  const filterOperators = getGridStringOperators().filter(({ value }) =>
    ['contains' /* add more over time */].includes(value)
  )

  const columns = [
    {
      flex: 0.1,
      minWidth: 50,
      field: '2',
      filterOperators,
      headerName: 'نام کوریر',
      hideable: false,
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
      flex: 0.1,
      minWidth: 50,
      field: 'first_login',
      filterable: false,
      headerName: 'اولین ورود',
      sortable: false,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {row?.duration_of_activity === 0 ? 'وارد نشده' : row.first_login}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.15,
      field: 'expire_time',
      minWidth: 50,
      filterOperators,
      headerName: 'تاریخ انقضای اکانت',
      hideable: false,
      sortable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row?.duration_of_activity === 0 ? 'وارد نشده' : row.expire_time}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.15,
      field: 'duration_of_activity',
      minWidth: 50,
      filterOperators,
      headerName: 'مهلت اکانت',
      hideable: false,
      sortable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row?.duration_of_activity >= 1000000 ? 'بی نهایت' : row?.duration_of_activity}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 50,
      field: 'active',
      filterable: false,
      headerName: 'وضعیت',
      hideable: false,
      sortable: false,
      renderCell: ({ row }) => (
        <CustomChip
          skin='light'
          size='small'
          label={row.active}
          color={userStatusObj[row.active]}
          sx={{ textTransform: 'capitalize', '& .MuiChip-label': { lineHeight: '18px' } }}
        />
      )
    },
    {
      flex: 0.1,
      minWidth: 50,
      sortable: false,
      hideable: false,
      field: 'گزینه ها',
      filterable: false,
      headerName: 'گزینه ها',
      renderCell: ({ row }) => (
        <RowOptions
          company={row}
          toggleEditDurationDrawer={toggleEditDurationDrawer}
          toggleShowUserDrawer={toggleShowUserDrawer}
          toggleEditUserDrawer={toggleEditUserDrawer}
          setSelectedCompany={setSelectedCompany}
          setChange={setChange}
          selectedCompany={selectedCompany}
        />
      )
    }
  ]

  useEffect(() => {
    fetchData(sortModel)
      .then(response => {
        if (response.data === null) {
          setData([])
        } else setData(response.data)
        if (change) setChange(false)
      })
      .catch(err => {
        const errorMessage = err.response.data.message ? err.response.data.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
      })
  }, [sortModel, change])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <TableHeader toggle={toggleAddUserDrawer} name='شرکت' noExport />
          <GridContainer sx={{ p: 4, m: 1 }}>
            <Table columns={columns} data={data} sortModel={sortModel} setSortModel={setSortModel} noFilter />
          </GridContainer>
        </Card>
      </Grid>
      {addUserOpen && (
        <AddCourierDrawer
          open={addUserOpen}
          toggle={toggleAddUserDrawer}
          edit={false}
          company={null}
          setChange={setChange}
          showUser
        />
      )}

      {openEdit && (
        <AddCourierDrawer
          open={openEdit}
          toggle={toggleEditUserDrawer}
          company={selectedCompany}
          edit
          setChange={setChange}
        />
      )}
      {openDurationEdit && (
        <EditDuration
          open={openDurationEdit}
          toggle={toggleEditDurationDrawer}
          company={selectedCompany}
          edit
          setChange={setChange}
        />
      )}
      {showUser && <AddCourierDrawer open={showUser} toggle={toggleShowUserDrawer} edit company={selectedCompany} />}
    </Grid>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default ACLPage
