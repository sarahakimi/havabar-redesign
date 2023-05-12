import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { getGridStringOperators } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Close from 'mdi-material-ui/Close'
import RowOptions from '../../@core/components/row-options/row-options'
import { deleteUser } from '../hub/requests'
import TableHeader from '../../@core/components/table-header/TableHeader'
import Table from '../../@core/components/table/table'
import { GridContainer } from '../hub'
import NewRegionalDrawer from './newRegionalPrice'
import { getRegional } from './requests'

function SingleRegional({ setChange, showUser, user, toggle, open }) {
  const [selectedCompany, setSelectedCompany] = useState({})
  const [openEdit, setOpenEdit] = useState(false)

  // const [showPrice, setShowUser] = useState(false)
  const [data, setData] = useState([])

  const [addUserOpen, setAddUserOpen] = useState(false)
  const [sortModel, setSortModel] = useState({ page: 1, page_size: 10, sort_by: '1 asc' })

  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)
  const toggleEditUserDrawer = () => setOpenEdit(!openEdit)

  // const toggleShowUserDrawer = () => setShowUser(!showUser)

  const deleteFunction = hub => {
    toast.promise(deleteUser(hub.id).then(setChange(true)), {
      loading: 'در حال حذف هاب',
      success: 'با موفقیت حذف شد',
      error: err => (err.response.data.message ? err.response.data.message : 'خطایی رخ داده است')
    })
  }

  const filterOperators = getGridStringOperators().filter(({ value }) =>
    ['contains' /* add more over time */].includes(value)
  )

  let columns = [
    {
      flex: 0.2,
      minWidth: 230,
      field: 'from_weight',
      headerName: 'از وزن',
      filterOperators,
      hideable: false,
      sortable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.from_weight}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.2,
      minWidth: 230,
      field: 'to_weight',
      headerName: 'تا وزن',
      filterOperators,
      hideable: false,
      sortable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.to_weight}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.2,
      minWidth: 230,
      field: 'type',
      headerName: 'نوع',
      filterOperators,
      hideable: false,
      sortable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.type === 0 ? 'ثابت' : 'به ازای هر کیلومتذ'}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.2,
      minWidth: 230,
      field: 'price',
      headerName: 'قیمت',
      filterOperators,
      hideable: false,
      sortable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.price} ریال
            </Typography>
          </Box>
        </Box>
      )
    }
  ]

  if (!showUser) {
    columns = [
      ...columns,
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
            toggleEditUserDrawer={toggleEditUserDrawer}
            setSelectedCompany={setSelectedCompany}
            setChange={setChange}
            selectedCompany={selectedCompany}
            deleteFunction={deleteFunction}
            noShow
          />
        )
      }
    ]
  }

  useEffect(() => {
    if (user) {
      toast.promise(
        getRegional(user?.id).then(response => {
          setData(response.data.regionalPrices)
          console.log(response.data.regionalPrices)
        }),
        {
          loading: 'در حال دریافت اطلاعات',
          success: 'اطلاعات دریافت شد',
          error: err => {
            setChange(false)

            return err.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.'
          }
        }
      )
    }
  }, [])

  return (
    <Dialog open={open} maxWidth='xl' onClose={toggle} fullWidth>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
        {user ? `قیمت منطقه ای شماره ${user.id}` : 'افزودن قیمت منطقه ای'}
        <IconButton sx={{ ml: 'auto' }} onClick={toggle}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <TableHeader toggle={toggleAddUserDrawer} name='قیمت' noExport noAdd={!showUser} />
              <GridContainer sx={{ p: 4, m: 1 }}>
                <Table
                  columns={columns}
                  data={data.weight_prices}
                  sortModel={sortModel}
                  setSortModel={setSortModel}
                  noFilter
                />
              </GridContainer>
            </Card>
          </Grid>
          {addUserOpen && (
            <NewRegionalDrawer
              open={addUserOpen}
              toggle={toggleAddUserDrawer}
              setChange={setChange}
              edit={false}
              company={null}
              showUser={false}
            />
          )}
          {openEdit && (
            <NewRegionalDrawer
              open={openEdit}
              toggle={toggleEditUserDrawer}
              setChange={setChange}
              user={selectedCompany}
              edit
              showUser={false}
            />
          )}
        </Grid>
      </DialogContent>
      {!showUser && (
        <DialogActions>
          <Button>ذخیره تغییرات</Button>
        </DialogActions>
      )}
    </Dialog>
  )
}

export default SingleRegional
