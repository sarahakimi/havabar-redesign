import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { getGridStringOperators } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import toast from 'react-hot-toast'
import Table from '../../@core/components/table/table'
import TableHeader from '../../@core/components/table-header/TableHeader'
import RowOptions from '../../@core/components/row-options/row-options'
import AddPrice from './addDristribuTionOrCollect'

export const GridContainer = styled(Paper)({
  flexGrow: 1,
  '.MuiDataGrid-root': {
    border: 'none'
  },
  '.MuiTablePagination-displayedRows': {
    display: 'none'
  }
})

function DistributionAndCollectTable({ data, setChange, deleteFunc, name, addFunc, editFunc }) {
  const [selectedCompany, setSelectedCompany] = useState({})
  const [openEdit, setOpenEdit] = useState(false)
  const [showUser, setShowUser] = useState(false)
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [sortModel, setSortModel] = useState({ page: 1, page_size: 10, sort_by: '1 asc' })

  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)
  const toggleEditUserDrawer = () => setOpenEdit(!openEdit)
  const toggleShowUserDrawer = () => setShowUser(!showUser)

  const deleteFunction = hub => {
    toast.promise(deleteFunc(hub.id).then(setChange(true)), {
      loading: 'در حال حذف ',
      success: 'با موفقیت حذف شد',
      error: err => (err?.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است')
    })
  }

  const filterOperators = getGridStringOperators().filter(({ value }) =>
    ['contains' /* add more over time */].includes(value)
  )

  const columns = [
    {
      flex: 0.1,
      minWidth: 50,
      field: 'title',
      headerName: 'عنوان',
      filterOperators,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.title}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 50,
      field: 'price',
      headerName: 'مبلغ',
      filterOperators,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.price}
            </Typography>
          </Box>
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
          noEdit
        />
      )
    }
  ]

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <TableHeader toggle={toggleAddUserDrawer} name={name} noExport withTitle />
          <GridContainer sx={{ p: 4, m: 1 }}>
            <Table
              columns={columns}
              data={data}
              sortModel={sortModel}
              setSortModel={setSortModel}
              noFilter
              pageSizeDefault={100}
            />
          </GridContainer>
        </Card>
      </Grid>
      {addUserOpen && (
        <AddPrice
          open={addUserOpen}
          toggle={toggleAddUserDrawer}
          setChange={setChange}
          edit={false}
          company={null}
          showUser={false}
          addFunc={addFunc}
          editFunc={editFunc}
        />
      )}
      {openEdit && (
        <AddPrice
          open={openEdit}
          toggle={toggleEditUserDrawer}
          setChange={setChange}
          user={selectedCompany}
          edit
          showUser={false}
          addFunc={addFunc}
          editFunc={editFunc}
        />
      )}
      {showUser && (
        <AddPrice
          open={showUser}
          toggle={toggleShowUserDrawer}
          setChange={setChange}
          edit
          user={selectedCompany}
          showUser
          addFunc={addFunc}
          editFunc={editFunc}
        />
      )}
    </Grid>
  )
}

export default DistributionAndCollectTable
