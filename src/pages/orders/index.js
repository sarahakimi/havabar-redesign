import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { getGridStringOperators } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import toast from 'react-hot-toast'
import Table from '@core/components/table/table'
import TableHeader from '@core/components/table-header/TableHeader'
import RowOptions from '@core/components/row-options/row-options'
import Button from '@mui/material/Button'
import Magnify from 'mdi-material-ui/Magnify'
import AddUserDrawer from './AddUserDrawer'
import { deleteUser, fetchData, downloadDataFromServer } from './requests'
import AddPeykDiaolg from './addPeykDiaolg'
import { useAuth } from '../../hooks/useAuth'
import CollectDialog from './collectDialog'
import AssighnToLogisticDialog from './assighnToLogisticDialog'
import DeliveryFromLogestic from './deliveryFromLogestic'
import DistributeOrder from './distributeOrder'
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
  const [selectedCompany, setSelectedCompany] = useState({})
  const [openEdit, setOpenEdit] = useState(false)
  const [showUser, setShowUser] = useState(false)
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [sortModel, setSortModel] = useState({ page: 1, sort_by: '1 date asc', search: '' })
  const [data, setData] = useState([])
  const [change, setChange] = useState(false)
  const [downloadData, setDownloadData] = useState([])
  const [addPeykOpen, setAddPeykOpen] = useState(false)
  const [collectOpen, setCollectOpen] = useState(false)
  const [deliveryToLogisticOpen, setDeliveryToLogesticOpen] = useState(false)
  const [deliveryFromLogestic, setDeliveryFromLogestic] = useState(false)
  const [distributeOpen, setDistributeOpen] = useState(false)
  const [addFilterOpen, setAddFilterOpen] = useState(false)
  const [filter, setFilter] = useState({})

  const currentHub = useAuth().user.hub_id

  const headers = [
    { key: 'id', label: 'شناسه' },
    { key: 'time', label: 'تاریخ ثبت' },
    { key: 'total', label: 'مبلغ سفارش' },
    { key: 'state', label: 'وضعیت' },
    { key: 'sender_phone_number', label: 'موبایل فرستنده' },
    { key: 'sender_tel_number', label: 'تلفن فرستنده' },
    { key: 'sender_ostan', label: 'استان فرستنده' },
    { key: 'sender_shahr', label: 'شهر فرستنده' },
    { key: 'sender_address', label: 'آدرس فرستنده' },
    { key: 'receiver_phone_number', label: 'موبایل گیرنده' },
    { key: 'receiver_tel_number', label: 'تلفن گیرنده' },
    { key: 'receiver_ostan', label: 'استان گیرنده' },
    { key: 'receiver_shahr', label: 'شهر گیرنده' },
    { key: 'receiver_address', label: 'آدرس گیرنده' },
    { key: 'weight', label: 'وزن' },
    { key: 'size_y', label: 'طول' },
    { key: 'size_x', label: 'عرض' },
    { key: 'size_z', label: 'ارتفاع' },
    { key: 'bar_code_url', label: 'بارکد' },
    { key: 'pdf_url', label: 'بارنامه' },
    { key: 'barname_generated_id', label: 'شماره بارنامه' },
    { key: 'sender_signature_url', label: 'امضا فرستنده' },
    { key: 'receiver_signature_url', label: 'امضا گیرنده' },
    { key: 'bar_type', label: 'نوع بار' },
    { key: 'payment_method', label: 'نحوه پرداخت' },
    { key: 'payment_state', label: 'نوع پرداخت' },
    { key: 'requires_packing', label: 'نیازمند بسته بندی' },
    { key: 'requires_special_shipping', label: 'بار خاص' },
    { key: 'price', label: 'قیمت کل' },
    { key: 'hub_origin_id', label: 'شناسه هاب مبدا' },
    { key: 'hub_destination_id', label: 'شناسه هاب مقصد' },
    { key: 'logistic_id', label: 'شناسه لاجستیک' },
    { key: 'explain', label: 'توضیحات' },
    { key: 'off_percent_status', label: 'تخفیف' },
    { key: 'off_percent', label: 'مقدار تخفیف' },
    { key: 'content', label: 'محتویات' },
    { key: 'rent', label: 'کرایه' },
    { key: 'stamp', label: 'تمبر' },
    { key: 'packing', label: 'بسته بندی' },
    { key: 'collect', label: 'جمع آوری' },
    { key: 'services', label: 'خدمات' },
    { key: 'accountant_weight', label: 'وزن محتسب' },
    { key: 'distribution', label: 'توزیع' },
    { key: 'taxation', label: 'مالیات' },
    { key: 'insurance', label: 'بیمه' },
    { key: 'added_value', label: 'ارزش افزوده' },
    { key: 'nerkh_be_kg', label: 'نرخ به کیلوگرم' }
  ]

  const getPersianValue = elem => (elem ? 'دارد' : 'ندارد')

  const downloadApi = () =>
    toast.promise(
      downloadDataFromServer().then(response => {
        setDownloadData(
          response.data.map(element => ({
            ...element,
            off_percent_status: getPersianValue(element.off_percent_status),
            requires_special_shipping: getPersianValue(element.requires_special_shipping),
            requires_packing: getPersianValue(element.requires_packing)
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
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)
  const toggleEditUserDrawer = () => setOpenEdit(!openEdit)
  const toggleShowUserDrawer = () => setShowUser(!showUser)

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

  const onOpenDialog = row => {
    setSelectedCompany(row)
    setAddPeykOpen(true)
  }

  const onCollectOrder = row => {
    setSelectedCompany(row)
    setCollectOpen(true)
  }

  const onDeliveryToLogistic = row => {
    setSelectedCompany(row)
    setDeliveryToLogesticOpen(true)
  }

  const onDeliveryFromLogestic = row => {
    setSelectedCompany(row)
    setDeliveryFromLogestic(true)
  }

  const OnDistributeOrder = row => {
    setSelectedCompany(row)
    setDistributeOpen(true)
  }

  const columns = [
    {
      flex: 0.1,
      minWidth: 50,
      field: '1 date',
      filterable: false,
      headerName: 'تاریخ',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.time}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 50,
      field: '3 sub_order_id',
      filterOperators,
      headerName: ' شماره سفارش',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.sub_order.id}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: '0 sender_name',
      minWidth: 50,
      filterOperators,
      sortable: false,
      headerName: 'فرستنده',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.sender.full_name}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: '0 sender_city',
      minWidth: 50,
      filterOperators,
      headerName: 'شهر فرستنده',
      sortable: false,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.sender.shahr}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: '0 reiever_name',
      minWidth: 50,
      filterOperators,
      headerName: 'گیرنده',
      sortable: false,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.receiver.full_name}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: '0 reciever_city',
      minWidth: 50,
      filterOperators,
      headerName: 'شهر گیرنده',
      sortable: false,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.receiver.shahr}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: '6 price',
      minWidth: 50,
      filterable: false,
      headerName: 'مبلغ سفارش',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.sub_order.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}ریال
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: '4 payment_method',
      minWidth: 50,
      filterable: false,
      headerName: 'نوع تسویه',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.sub_order.payment_state}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.2,
      field: '5 state',
      minWidth: 'min-content',
      filterable: false,
      headerName: 'عملیات',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {row.sub_order.hub_origin_id === currentHub ? (
            <>
              {row.sub_order.state_id === 0 && (
                <Button variant='contained' onClick={() => onOpenDialog(row)}>
                  {row.sub_order.state}
                </Button>
              )}
              {row.sub_order.state_id === 1 && <Typography sx={{ color: 'black' }}>در حال جمع آوری</Typography>}
              {row.sub_order.state_id === 2 && (
                <Button variant='contained' onClick={() => onCollectOrder(row)} color='warning'>
                  تحویل به هاب مبدا
                </Button>
              )}
              {row.sub_order.state_id === 3 && (
                <Button
                  variant='contained'
                  onClick={() => onDeliveryToLogistic(row)}
                  sx={{
                    color: 'white',
                    backgroundColor: 'purple',
                    '&:hover': {
                      backgroundColor: 'purple'
                    }
                  }}
                >
                  تحویل به لاجستیک
                </Button>
              )}
              {row.sub_order.state_id === 4 && <Typography sx={{ color: 'black' }}>در دست لاجستیک</Typography>}
              {row.sub_order.state_id === 5 && <Typography sx={{ color: 'black' }}>در دست هاب مقصد</Typography>}
              {row.sub_order.state_id === 6 && <Typography sx={{ color: 'black' }}>در حال توزیع</Typography>}
              {row.sub_order.state_id === 7 && <Typography sx={{ color: 'green' }}>تکمیل سفارش</Typography>}
            </>
          ) : (
            <>
              {row.sub_order.state_id === 0 && <Typography sx={{ color: 'black' }}>ثبت سفارش</Typography>}
              {row.sub_order.state_id === 1 && <Typography sx={{ color: 'black' }}>در حال جمع آوری</Typography>}
              {row.sub_order.state_id === 2 && <Typography sx={{ color: 'black' }}>اتمام جمع آوری</Typography>}
              {row.sub_order.state_id === 3 && <Typography sx={{ color: 'black' }}>در دست هاب مبدا</Typography>}
              {row.sub_order.state_id === 4 && (
                <Button
                  variant='contained'
                  onClick={() => onDeliveryFromLogestic(row)}
                  sx={{
                    color: 'white',
                    backgroundColor: 'pink',
                    '&:hover': {
                      backgroundColor: 'pink'
                    }
                  }}
                >
                  تحویل از لاجستیک
                </Button>
              )}
              {row.sub_order.state_id === 5 && (
                <Button variant='contained' onClick={() => OnDistributeOrder(row)} color='info'>
                  {row.sub_order.state}
                </Button>
              )}
              {row.sub_order.state_id === 6 && <Typography sx={{ color: 'black' }}>در حال توزیع</Typography>}
              {row.sub_order.state_id === 7 && <Typography sx={{ color: 'green' }}>تکمیل سفارش</Typography>}
            </>
          )}
        </Box>
      )
    },

    // {
    //   flex: 0.2,
    //   field: 'state',
    //   minWidth: 100,
    //   filterOperators,
    //   headerName: 'مرحله',
    //   hideable: false,
    //   renderCell: ({ row }) => (
    //     <Box sx={{ display: 'flex', alignItems: 'center' }}>
    //       <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
    //         {row.order.state}
    //       </Typography>
    //     </Box>
    //   )
    // },
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

    // {
    //   flex: 0.2,
    //   field: 'download',
    //   minWidth: 100,
    //   filterOperators,
    //   headerName: 'مرحله',
    //   hideable: false,
    //   renderCell: ({ row }) => (
    //     <Box sx={{ display: 'flex', alignItems: 'center' }}>
    //       <Button onClick={() => getOrder(row.order.id)}>دانلود</Button>
    //     </Box>
    //   )
    // }
  ]

  const hasFilter = Object.keys(filter).length !== 0

  useEffect(() => {
    setDownloadData([])
    fetchData(sortModel, filter, hasFilter)
      .then(response => {
        if (response.data.subOrderModels === null) {
          setData([])
        } else setData(response.data.subOrderModels.map(element => ({ id: element.sub_order.id, ...element })))
        if (change) setChange(false)
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
      })
  }, [setDownloadData, change, sortModel, filter])

  const handleRemoveFilter = () => {
    setFilter({})
    setChange(true)
  }
  const toggleFilters = () => setAddFilterOpen(!addFilterOpen)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <TableHeader
            toggle={toggleAddUserDrawer}
            data={downloadData}
            api={downloadApi}
            headers={headers}
            name='سفارش'
          >
            <Button sx={{ mb: 2 }} onClick={toggleFilters} variant='contained' color='info' startIcon={<Magnify />}>
              فیلتر
            </Button>
            {hasFilter && (
              <Button sx={{ mb: 2 }} onClick={handleRemoveFilter} variant='contained' color='warning'>
                حذف فیلتر
              </Button>
            )}
          </TableHeader>
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
      {selectedCompany && addPeykOpen && (
        <AddPeykDiaolg
          setChange={setChange}
          open={addPeykOpen}
          setOpen={setAddPeykOpen}
          id={selectedCompany?.sub_order?.id}
        />
      )}
      {selectedCompany && collectOpen && (
        <CollectDialog
          setOpen={setCollectOpen}
          open={collectOpen}
          id={selectedCompany?.sub_order?.id}
          setChange={setChange}
        />
      )}
      {selectedCompany && deliveryToLogisticOpen && (
        <AssighnToLogisticDialog
          setOpen={setDeliveryToLogesticOpen}
          open={deliveryToLogisticOpen}
          id={selectedCompany?.sub_order?.id}
          setChange={setChange}
        />
      )}
      {selectedCompany && deliveryFromLogestic && (
        <DeliveryFromLogestic
          setOpen={setDeliveryFromLogestic}
          open={deliveryFromLogestic}
          id={selectedCompany?.sub_order?.id}
          setChange={setChange}
        />
      )}
      {selectedCompany && distributeOpen && (
        <DistributeOrder
          setOpen={setDistributeOpen}
          open={distributeOpen}
          id={selectedCompany?.sub_order?.id}
          setChange={setChange}
        />
      )}
      {addFilterOpen && (
        <AddFilter
          setFilter={setFilter}
          filter={filter}
          open={addFilterOpen}
          toggle={toggleFilters}
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
