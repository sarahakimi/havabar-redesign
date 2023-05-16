import React, { useEffect, useState } from 'react'
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

import Button from '@mui/material/Button'
import Magnify from 'mdi-material-ui/Magnify'
import { downloadDataFromServer, fetchData, deleteUser } from './requests'
import AddFilter from './addFilter'
import RowOptions from '../../@core/components/row-options/row-options'
import AddUserDrawer from './AddUserDrawer'
import ShowManifest from './ShowManifest'

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
  const [sortModel, setSortModel] = useState({ page: 1, page_size: 10, sort_by: '1 asc', search: '' })
  const [data, setData] = useState([])
  const [change, setChange] = useState(false)
  const [downloadData, setDownloadData] = useState([])
  const [filter, setFilter] = useState({})
  const [addFilterOpen, setAddFilterOpen] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState({})
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [showUser, setShowUser] = useState(false)

  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  const toggleShowUserDrawer = () => setShowUser(!showUser)

  const headers = [
    { key: 'manifest_id', label: 'شناسه' },
    { key: 'time', label: 'تاریخ و ساعت' },
    { key: 'qrcode', label: 'qrcode' },
    { key: 'logistic_name', label: 'تام لاجستیک' },
    { key: 'manifest_id', label: 'شماره مانیفست' },
    { key: 'hub_destination_name', label: 'گیرنده' },
    { key: 'hub_source_name', label: 'فرستنده' }
  ]

  const downloadApi = () =>
    toast.promise(
      downloadDataFromServer().then(response => {
        setDownloadData(
          response.data.map(element => ({
            ...element,
            time: moment(element.time, 'YYYY/MM/DD HH:mm:ss').locale('fa').format('YYYY/MM/DD HH:mm:ss')
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

  const deleteFunction = company => {
    toast.promise(deleteUser(company.order.id).then(setChange(true)), {
      loading: 'در حال حذف سفارش',
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
      field: '1',
      minWidth: 50,
      headerName: 'تاریخ',
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
      field: 'id',
      headerName: 'شماره مانیفست',
      sortable: false,
      filterOperators,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.manifest_id}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 50,
      field: '2',
      headerName: ' مبدا',
      sortable: false,
      filterOperators,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.hub_source_name}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 50,
      field: '3',
      headerName: 'مقصد',
      sortable: false,
      hideable: false,
      filterOperators,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.hub_destination_name}
            </Typography>
          </Box>
        </Box>
      )
    },

    {
      flex: 0.1,
      field: '4',
      minWidth: 50,
      headerName: 'نام لاجستیک',
      filterOperators,
      hideable: false,
      sortable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.logistic_name}
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
          setSelectedCompany={setSelectedCompany}
          setChange={setChange}
          selectedCompany={selectedCompany}
          deleteFunction={deleteFunction}
          noEdit
        />
      )
    }
  ]

  useEffect(() => {
    setDownloadData([])
    fetchData(sortModel, filter)
      .then(response => {
        if (response.data.manifest === null) {
          setData([])
        } else setData(response.data.manifest)
        if (change) setChange(false)
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
      })
  }, [sortModel, setDownloadData, change, filter])
  const toggleFilter = () => setAddFilterOpen(!addFilterOpen)
  const hasFilter = Object.keys(filter).length !== 0

  const handleRemoveFilter = () => {
    setFilter({})
    setChange(true)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <TableHeader
            data={downloadData}
            api={downloadApi}
            headers={headers}
            name='مانیفست'
            toggle={toggleAddUserDrawer}
          >
            <Button sx={{ mb: 2 }} onClick={toggleFilter} variant='contained' startIcon={<Magnify />} color='info'>
              فیلتر
            </Button>
            {hasFilter && (
              <Button sx={{ mb: 2 }} onClick={handleRemoveFilter} variant='contained' color='warning'>
                حذف فیلتر
              </Button>
            )}
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
          toggle={toggleFilter}
          setChange={setChange}
        />
      )}
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
      {showUser && (
        <ShowManifest
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
