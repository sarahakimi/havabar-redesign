import React, { useCallback, useEffect, useState } from 'react'
import { DataGrid, faIR, getGridStringOperators, GridToolbarFilterButton } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import toast from 'react-hot-toast'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { fetchData } from './requests'

export const GridContainer = styled(Paper)({
  flexGrow: 1,
  '.MuiDataGrid-root': {
    border: 'none'
  },
  '.MuiTablePagination-displayedRows': {
    display: 'none'
  }
})

function Table({ setCustomer }) {
  const [sortModel, setSortModel] = useState({ page: 1, page_size: 10, sort_by: '1 id asc', search: '' })
  const [pageSize, setPageSize] = useState(10)
  const [page, setPage] = useState(0)
  const [data, setData] = useState([])
  const [selectionModel, setSelectionModel] = useState([])
  useEffect(() => {
    toast.promise(
      fetchData(sortModel).then(response => {
        if (response.data.person === null) {
          setData([])
        } else setData(response.data.person)
      }),
      {
        loading: 'در حال دریافت مشتریان',
        success: 'مشتری را انتخاب کنید',
        error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
      }
    )
    // eslint-disable-next-line no-unsafe-optional-chaining
    setCustomer(...data?.filter(element => element.id === selectionModel[0]))
  }, [sortModel, selectionModel])

  const filterOperators = getGridStringOperators().filter(({ value }) =>
    ['contains' /* add more over time */].includes(value)
  )

  const columns = [
    {
      flex: 0.1,
      minWidth: 50,
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
      minWidth: 50,
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
      minWidth: 50,
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
      minWidth: 50,
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
      minWidth: 50,
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
      minWidth: 50,
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
    }

    // {
    //   flex: 0.2,
    //   field: 'address',
    //   minWidth: 150,
    //   filterOperators,
    //   headerName: 'ادرس',
    //   align: 'center',
    //   headerAlign: 'center',
    //   hideable: false,
    //   renderCell: ({row}) => (
    //     <Box sx={{display: 'flex', alignItems: 'center'}}>
    //       <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
    //         {row.address}
    //       </Typography>
    //     </Box>
    //   )
    // }
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
    setSelectionModel(prevModel => newSelectionModel.filter(newId => !prevModel.includes(newId)))
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
        rowsPerPageOptions={[10, 25, 50]}
        sx={{
          '& .MuiDataGrid-columnHeaders': { borderRadius: 0 }
        }}
        onSelectionModelChange={selectionModelChange}
        paginationMode='server'
        onPageSizeChange={handlePageSizeChange}
        localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
        checkboxSelection
        selectionModel={selectionModel}
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
