import React, { useCallback, useEffect, useState } from 'react'
import { DataGrid, faIR, getGridStringOperators, GridToolbarFilterButton } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import toast from 'react-hot-toast'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { fetchNoManifest } from './requests'

export const GridContainer = styled(Paper)({
  flexGrow: 1,
  '.MuiDataGrid-root': {
    border: 'none'
  },
  '.MuiTablePagination-displayedRows': {
    display: 'none'
  }
})

function Table({ setCustomer, customer, data, setData }) {
  const [sortModel, setSortModel] = useState({ page: 1, page_size: 100, sort_by: '1 id asc', search: '' })
  const [pageSize, setPageSize] = useState(10)
  const [page, setPage] = useState(0)

  useEffect(() => {
    toast.promise(
      fetchNoManifest().then(response => {
        if (response.data === null) {
          setData([])
        } else setData(response.data)
      }),
      {
        loading: 'در حال دریافت اطلاعات بارنامه ها',
        success: 'بارنامه را انتخاب کنید',
        error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
      }
    )
  }, [sortModel])

  const filterOperators = getGridStringOperators().filter(({ value }) =>
    ['contains' /* add more over time */].includes(value)
  )

  const columns = [
    {
      flex: 0.1,
      field: '1',
      minWidth: 50,
      headerName: 'شماره بارنامه',
      filterable: false,
      hideable: false,
      sortable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.generated_id}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 50,
      field: 'id',
      headerName: 'فرستنده',
      sortable: false,
      filterOperators,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.sender_name}
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
              {row.sender_city}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: '4',
      minWidth: 50,
      headerName: 'گیرنده',
      filterOperators,
      hideable: false,
      sortable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.receiver_name}
          </Typography>
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
              {row.sender_city}
            </Typography>
          </Box>
        </Box>
      )
    }
  ]

  const handlePageSizeChange = newPageSize => {
    setPageSize(newPageSize)
    setSortModel({ ...sortModel, ...{ page_size: newPageSize } })
  }

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
          ...{ search: { [filterModel.items[0].columnField.split(' ')[1]]: filterModel.items[0]?.value } }
        })
      } else {
        setSortModel({ ...sortModel, ...{ search: '' } })
      }
    },
    [filter, setFilter]
  )

  const handleSortModelChange = Model => {
    const sortMode = Model.length !== 0 ? `${Model[0]?.field} ${Model[0]?.sort}` : '1 id asc'
    setSortModel({ ...sortModel, ...{ sort_by: `${sortMode}` } })
  }

  const selectionModelChange = newSelectionModel => {
    setCustomer(newSelectionModel)
  }

  return (
    <GridContainer sx={{ p: 4, m: 1 }}>
      <DataGrid
        autoHeight
        pagination
        rows={data}
        columns={columns}
        pageSize={pageSize}
        disableSelectionOnClick
        rowsPerPageOptions={[100]}
        sx={{
          '& .MuiDataGrid-columnHeaders': { borderRadius: 0 }
        }}
        onSelectionModelChange={selectionModelChange}
        paginationMode='server'
        onPageSizeChange={handlePageSizeChange}
        localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
        checkboxSelection
        selectionModel={customer}
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
  )
}

export default Table
