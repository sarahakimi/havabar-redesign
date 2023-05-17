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
import { downloadDataFromServer, fetchData } from './requests'
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

function ACLPage() {
  const [sortModel, setSortModel] = useState({ page: 1, page_size: 10, sort_by: '1 asc', search: '' })
  const [data, setData] = useState([])
  const [change, setChange] = useState(false)
  const [downloadData, setDownloadData] = useState([])
  const [filter, setFilter] = useState({})
  const [addFilterOpen, setAddFilterOpen] = useState(false)

  const headers = [
    { key: 'id', label: 'شناسه' },
    { key: 'time', label: 'تاریخ و ساعت' },
    { key: 'name', label: 'تام کاربر' },
    { key: 'username', label: 'تام کاربری' },
    { key: 'log', label: 'عملیات' }
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
            {moment(row.time, 'YYYY/MM/DD HH:mm:ss').locale('fa').format('YYYY/MM/DD HH:mm:ss')}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 50,
      field: '2',
      headerName: 'نام کاربری',
      filterOperators,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.username}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 50,
      field: '3',
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
      flex: 0.1,
      field: '4',
      minWidth: 50,
      headerName: 'عملیات',
      filterOperators,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.log}
          </Typography>
        </Box>
      )
    }
  ]

  useEffect(() => {
    setDownloadData([])
    fetchData(sortModel, filter)
      .then(response => {
        if (response.data.userLogs === null) {
          setData([])
        } else setData(response.data.userLogs)
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

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <TableHeader data={downloadData} api={downloadApi} headers={headers} name='گزارش ورود و خروج' noAdd>
            <Button
              sx={{ mb: 2 }}
              onClick={toggleAddUserDrawer}
              variant='contained'
              color='info'
              startIcon={<Magnify />}
            >
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
