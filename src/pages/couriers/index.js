/* eslint-disable react/no-unstable-nested-components */
import { useCallback, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { DataGrid, faIR, getGridStringOperators, GridToolbarFilterButton } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import http from 'services/http'
import CustomChip from '@core/components/mui/chip'
import toast from 'react-hot-toast'

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
  true: 'success',
  false: 'secondary'
}

function ACLPage() {
  const [pageSize, setPageSize] = useState(10)
  const [sortModel, setSortModel] = useState({ page: 1, page_size: 10, sort_by: '1 asc' })
  const [data, setData] = useState([])
  const [change, setChange] = useState(true)

  const filterOperators = getGridStringOperators().filter(({ value }) =>
    ['contains' /* add more over time */].includes(value)
  )

  const columns = [
    {
      flex: 0.1,
      minWidth: 50,
      field: '1',
      headerName: 'وضعیت',
      filterable: false,
      hideable: false,
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
      minWidth: 50,
      field: '2',
      headerName: 'نام کوریر',
      filterOperators,
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
    }
  ]

  const keys = {
    asc: 1,
    desc: 0
  }

  useEffect(() => {
    const toastId = toast.loading('در حال دریافت اطلاعات')
    const sortBy = sortModel.sort_by.split(' ')
    sortBy[1] = keys[sortBy[1]]
    http
      .post(
        `companies/${sortModel.page}/${Number(sortBy.join(''))}/`,
        {},
        {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        }
      )
      .then(async response => {
        if (response.data.courier === null) {
          setData([])
        } else setData(response.data.courier)
        setChange(false)
        toast.dismiss(toastId)
        toast.success('انجام شد')
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err?.response?.data?.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
      })
  }, [sortModel, change])

  const handleSortModelChange = Model => {
    const sortMode = Model.length !== 0 ? `${Model[0]?.field} ${Model[0]?.sort}` : 'id desc'
    setSortModel({ ...sortModel, ...{ sort_by: `${sortMode}` } })
  }

  const handlePageSizeChange = newPageSize => {
    setPageSize(newPageSize)
    setSortModel({ ...sortModel, ...{ page_size: newPageSize } })
  }
  const [page, setPage] = useState(0)

  const handlePageChange = newPage => {
    setPage(newPage)
    setSortModel({ ...sortModel, ...{ page: newPage + 1 } })
  }
  const [filter, setFilter] = useState({})

  const handleFilterChange = useCallback(
    filterModel => {
      setFilter(filterModel)
      if (Object.keys(filterModel).length !== 0 && filterModel.items[0]?.value !== undefined) {
        setSortModel({
          ...sortModel,
          ...{ search: `${filterModel.items[0].columnField}|${filterModel.items[0]?.value}` }
        })
      } else {
        setSortModel({ ...sortModel, ...{ search: '' } })
      }
    },
    [filter, setFilter]
  )

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <GridContainer sx={{ p: 4, m: 1 }}>
            <DataGrid
              autoHeight
              pagination
              rows={data}
              columns={columns}
              pageSize={pageSize}
              disableSelectionOnClick
              rowsPerPageOptions={[10]}
              disableColumnFilter
              sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
              paginationMode='server'
              onPageSizeChange={handlePageSizeChange}
              localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
              disableColumnSelector
              sortingMode='server'
              onSortModelChange={handleSortModelChange}
              onPageChange={handlePageChange}
              page={page}
              rowCount={50}
              onFilterModelChange={handleFilterChange}
              components={{
                Toolbar: GridToolbarFilterButton
              }}
            />
          </GridContainer>
        </Card>
      </Grid>
    </Grid>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'every-page'
}

export default ACLPage
