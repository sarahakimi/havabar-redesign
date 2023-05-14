import Grid from '@mui/material/Grid'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Card, CardContent, CardHeader, colors } from '@mui/material'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Table from '@core/components/table/table'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { fetchData } from './requests'
import TableHeader from '../../@core/components/table-header/TableHeader'

export const GridContainer = styled(Paper)({
  '.MuiTablePagination-displayedRows': {
    display: 'none'
  }
})

function ACLPage() {
  const [data, setData] = useState({
    most_destination: [],
    most_orders: [],
    numbers: {
      collect_count: 0,
      collect_price: 0,
      order_count: 0,
      order_price: 0,
      pas_keraye_count: 0,
      pas_keraye_price: 0,
      pish_keraye_count: 0,
      pish_keraye_price: 0
    }
  })

  useEffect(() => {
    fetchData()
      .then(response => {
        if (response.data.dashboard === null) {
          setData([])
        } else {
          setData(response.data.dashboard)
        }
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
      })
  }, [])

  const columns = [
    {
      flex: 0.2,
      minWidth: 90,
      field: 'id',
      headerName: 'ردیف',
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
      flex: 0.2,
      minWidth: 90,
      field: 'city',
      headerName: 'شهر',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.city}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.2,
      minWidth: 90,
      field: 'counter',
      headerName: 'تعداد سفارش',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.counter}
            </Typography>
          </Box>
        </Box>
      )
    }
  ]

  const personColumns = [
    {
      flex: 0.2,
      minWidth: 90,
      field: 'id',
      headerName: 'ردیف',
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
      flex: 0.2,
      minWidth: 90,
      field: 'person_name',
      headerName: 'نام مشتری',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.person_name}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.2,
      minWidth: 90,
      field: 'counter',
      headerName: 'تعداد سفارش',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.counter}
            </Typography>
          </Box>
        </Box>
      )
    }
  ]

  return (
    <Grid container spacing={6}>
      <Grid item lg={3} xl={3} xs={6}>
        <Card>
          <CardHeader
            sx={{ backgroundColor: '#666CFF', color: 'white' }}
            title={<Typography sx={{ color: 'white' }}>سفارش</Typography>}
          />
          <CardContent>
            <Box py={4}>
              <Typography color='primary' variant='h6'>
                {data.numbers.order_count} سفارش
              </Typography>
              <br />
              <Typography color='primary' variant='h6'>
                {data.numbers.order_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ریال
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={3} xl={3} xs={6}>
        <Card>
          <CardHeader
            sx={{ backgroundColor: 'green', color: 'white' }}
            title={<Typography sx={{ color: 'white' }}>جمع آوری</Typography>}
          />
          <CardContent>
            <Box py={4}>
              <Typography color='green' variant='h6'>
                {data.numbers.collect_count} سفارش
              </Typography>
              <br />
              <Typography color='green' variant='h6'>
                {data.numbers.collect_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ریال
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={3} xl={3} xs={6}>
        <Card>
          <CardHeader
            sx={{ backgroundColor: 'orange', color: 'white' }}
            title={<Typography sx={{ color: 'white' }}>پس کرایه</Typography>}
          />
          <CardContent>
            <Box py={4}>
              <Typography color='orange' variant='h6'>
                {data.numbers.pas_keraye_count} سفارش
              </Typography>
              <br />
              <Typography color='orange' variant='h6'>
                {data.numbers.pas_keraye_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ریال
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={3} xl={3} xs={6}>
        <Card>
          <CardHeader
            sx={{ backgroundColor: 'red', color: 'white' }}
            title={<Typography sx={{ color: 'white' }}>پیش کرایه </Typography>}
          />
          <CardContent>
            <Box py={4}>
              <Typography color='red' variant='h6'>
                {data.numbers.pish_keraye_count} سفارش
              </Typography>
              <br />
              <Typography color='red' variant='h6'>
                {data.numbers.pish_keraye_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ریال
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={6} xl={6} xs={12}>
        <Card>
          <TableHeader name='بیشترین مقاصد' noAdd noExport withTitle />
          <GridContainer sx={{ mt: 4 }}>
            <Table columns={columns} data={data.most_destination} noFilter pageSizeDefault={100} />
          </GridContainer>
        </Card>
      </Grid>
      <Grid item lg={6} xl={6} xs={12}>
        <Card>
          <TableHeader name='بیشترین سفارشات' noAdd noExport withTitle />
          <GridContainer sx={{ mt: 4 }}>
            <Table columns={personColumns} data={data.most_orders} noFilter pageSizeDefault={100} />
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
