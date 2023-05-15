import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { getGridStringOperators } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { Autocomplete, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Close from 'mdi-material-ui/Close'
import * as yup from 'yup'
import { ostan, shahr } from 'iran-cities-json'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import RowOptions from '../../@core/components/row-options/row-options'
import TableHeader from '../../@core/components/table-header/TableHeader'
import Table from '../../@core/components/table/table'
import { GridContainer } from '../hub'
import NewRegionalDrawer from './newRegionalPrice'
import { addRegional, getRegional } from './requests'

const schema = yup.object().shape({
  origin_state: yup.string().required('استان الزامی است').typeError('الزامی است'),
  origin_city: yup.string().required('شهر الزامی است'),
  destination_state: yup.string().required('استان الزامی است').typeError('الزامی است'),
  destination_city: yup.string().required('شهر الزامی است')
})

function SingleRegional({ setChange, showUser, user, toggle, open }) {
  const [selectedCompany, setSelectedCompany] = useState({})
  const [openEdit, setOpenEdit] = useState(false)
  const [selectedSenderOstan, setSelectedSenderOstan] = useState('')
  const [selectedRecieverOstan, setSelectedRecieverOstan] = useState('')

  const emptyForm = {
    origin_state: '',
    origin_city: '',
    destination_state: '',
    destination_city: ''
  }

  const [data, setData] = useState({
    origin_state: '',
    origin_city: '',
    destination_state: '',
    destination_city: '',
    weight_prices: []
  })

  function onChangeSenderOstan(event, onChange, values) {
    onChange(values)
    setSelectedSenderOstan(ostan.find(element => element.name === event.target.innerText)?.id)
  }

  function onChangeRecieverOstan(event, onChange, values) {
    onChange(values)
    setSelectedRecieverOstan(ostan.find(element => element.name === event.target.innerText)?.id)
  }

  const [addUserOpen, setAddUserOpen] = useState(false)
  const [sortModel, setSortModel] = useState({ page: 1, page_size: 10, sort_by: '1 asc' })
  const [priceChange, setPriceChange] = useState(false)

  const defaultValues = user
    ? {
        origin_state: user.origin_state,
        origin_city: user.origin_city,
        destination_state: user.destination_state,
        destination_city: user.destination_city
      }
    : emptyForm

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)
  const toggleEditUserDrawer = () => setOpenEdit(!openEdit)

  // const toggleShowUserDrawer = () => setShowUser(!showUser)

  const deleteFunction = hub => {
    setData({
      ...data,
      weight_prices: [...data.weight_prices.filter(elem => elem.id !== hub.id)]
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
    if (priceChange) {
      if (priceChange?.id) {
        setData({
          ...data,
          weight_prices: [
            ...data.weight_prices.map(elem => {
              if (elem.id === priceChange.id) return priceChange

              return elem
            })
          ]
        })
      } else {
        setData({
          ...data,
          weight_prices: [...data.weight_prices, { ...priceChange, id: data.weight_prices.length + 2 }]
        })
      }
      setPriceChange(false)
    } else if (user) {
      toast.promise(
        getRegional(user?.id).then(response => {
          setData(response.data.regionalPrices)
        }),
        {
          loading: 'در حال دریافت اطلاعات',
          success: 'اطلاعات دریافت شد',
          error: err => {
            setChange(false)

            return err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.'
          }
        }
      )
    }
  }, [priceChange, data])

  const onSubmit = async formdata => {
    if (data.weight_prices.length === 0) {
      toast.error('لطفا حداقل یک قیمت انتخاب کنید')

      return
    }

    const config = {
      ...formdata,
      weight_prices: data.weight_prices
    }

    toast.promise(
      addRegional(config).then(() => {
        setChange(true)
        toggle()
      }),
      {
        loading: 'در حال ایجاد قیمت',
        success: 'قیمت ایجاد شد',
        error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
      }
    )
  }

  return (
    <Dialog open={open} maxWidth='xl' onClose={toggle} fullWidth>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
          {user ? `قیمت منطقه ای شماره ${user.id}` : 'افزودن قیمت منطقه ای'}
          <IconButton sx={{ ml: 'auto' }} onClick={toggle}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3} my={2}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='origin_state'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value, onBlur } }) => (
                    <Autocomplete
                      onBlur={onBlur}
                      select
                      options={ostan.map(element => element.name)}
                      onChange={(event, values, value) => onChangeSenderOstan(event, onChange, values, value)}
                      value={value}
                      disableClearable
                      renderInput={params => (
                        <TextField
                          /* eslint-disable-next-line react/jsx-props-no-spreading */
                          {...params}
                          label='استان مبدا'
                          variant='outlined'
                          onChange={onChange}
                          error={Boolean(errors.origin_state)}
                        />
                      )}
                    />
                  )}
                />
                {errors.origin_state && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.origin_state.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3} my={2}>
              <FormControl fullWidth>
                <Controller
                  name='origin_city'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <Autocomplete
                      onBlur={onBlur}
                      select
                      options={shahr
                        .filter(element => element.ostan === selectedSenderOstan)
                        .map(element => element.name)}
                      onChange={(event, values) => onChange(values)}
                      value={value}
                      disableClearable
                      renderInput={params => (
                        <TextField
                          /* eslint-disable-next-line react/jsx-props-no-spreading */
                          {...params}
                          label=' شهر مبدا'
                          variant='outlined'
                          onChange={onChange}
                          error={Boolean(errors.origin_city)}
                        />
                      )}
                    />
                  )}
                />
                {errors.origin_city && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.origin_city.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3} my={2}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='destination_state'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value, onBlur } }) => (
                    <Autocomplete
                      onBlur={onBlur}
                      select
                      options={ostan.map(element => element.name)}
                      onChange={(event, values, value) => onChangeRecieverOstan(event, onChange, values, value)}
                      value={value}
                      disableClearable
                      renderInput={params => (
                        <TextField
                          /* eslint-disable-next-line react/jsx-props-no-spreading */
                          {...params}
                          label='استان مقصد'
                          variant='outlined'
                          onChange={onChange}
                          error={Boolean(errors.destination_state)}
                        />
                      )}
                    />
                  )}
                />
                {errors.destination_state && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.destination_state.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3} my={2}>
              <FormControl fullWidth>
                <Controller
                  name='destination_city'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <Autocomplete
                      onBlur={onBlur}
                      select
                      options={shahr
                        .filter(element => element.ostan === selectedRecieverOstan)
                        .map(element => element.name)}
                      onChange={(event, values) => onChange(values)}
                      value={value}
                      disableClearable
                      renderInput={params => (
                        <TextField
                          /* eslint-disable-next-line react/jsx-props-no-spreading */
                          {...params}
                          label='شهر مقصد'
                          variant='outlined'
                          onChange={onChange}
                          error={Boolean(errors.destination_city)}
                        />
                      )}
                    />
                  )}
                />
                {errors.destination_city && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.destination_city.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <TableHeader toggle={toggleAddUserDrawer} name='قیمت' noExport noAdd={showUser} />
                <GridContainer sx={{ p: 4, m: 1 }}>
                  <Table
                    columns={columns}
                    data={data.weight_prices}
                    sortModel={sortModel}
                    setSortModel={setSortModel}
                    noFilter
                    pageSizeDefault={100}
                  />
                </GridContainer>
              </Card>
            </Grid>
            {addUserOpen && (
              <NewRegionalDrawer
                open={addUserOpen}
                toggle={toggleAddUserDrawer}
                setChange={setPriceChange}
                edit={false}
                company={null}
                showUser={false}
              />
            )}
            {openEdit && (
              <NewRegionalDrawer
                open={openEdit}
                toggle={toggleEditUserDrawer}
                setChange={setPriceChange}
                user={selectedCompany}
                edit
                showUser={false}
              />
            )}
          </Grid>
        </DialogContent>
        {!showUser && (
          <DialogActions>
            <Button size='large' type='submit' variant='contained' sx={{ mr: 3 }}>
              ذخیره تغییرات
            </Button>
          </DialogActions>
        )}
      </form>
    </Dialog>
  )
}

export default SingleRegional
