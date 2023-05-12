import Grid from '@mui/material/Grid'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import {
  addCollect,
  addDistribution,
  editCollect,
  getPricing,
  removeCollect,
  removeDistribution,
  editDistribution,
  editVolume,
  editpackagingPrice,
  editotherPrice,
  editorderNumber
} from './requests'
import RegionalTable from './regionalTable'
import DistributionAndCollectTable from './distributionAndCollctTable'
import SizeForm from './sizeForm'
import PackagingPrice from './packagingPrice'
import OtherPrice from './otherPriceForm'
import Barname from './barname'

function ACLPage() {
  const [change, setChange] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    toast.promise(
      getPricing().then(response => {
        setData(response.data)
        setChange(false)
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
  }, [change])

  return (
    <Grid container spacing={6} sx={{ width: '100%', margin: 0 }}>
      <Grid item sm={12} lg={12} xl={12} xs={12}>
        <RegionalTable data={data?.regionalPrices} setChange={setChange} />
      </Grid>
      <Grid item sm={12} lg={6} xl={6} xs={12}>
        <DistributionAndCollectTable
          data={data?.collectPrice}
          setChange={setChange}
          deleteFunc={removeCollect}
          addFunc={addCollect}
          editFunc={editCollect}
          name='قیمت جمع آوری'
        />
      </Grid>
      <Grid item sm={12} lg={6} xl={6} xs={12}>
        <DistributionAndCollectTable
          data={data?.distributionPrice}
          setChange={setChange}
          deleteFunc={removeDistribution}
          addFunc={addDistribution}
          editFunc={editDistribution}
          name='قیمت توزیع'
        />
      </Grid>
      <Grid item sm={12} lg={12} xl={12} xs={12}>
        <SizeForm setChange={setChange} addFunc={editVolume} user={data.volumePrice} />
      </Grid>
      <Grid item sm={12} lg={12} xl={12} xs={12}>
        <PackagingPrice setChange={setChange} addFunc={editpackagingPrice} user={data.packagingPrice} />
      </Grid>
      <Grid item sm={12} lg={12} xl={12} xs={12}>
        <OtherPrice setChange={setChange} addFunc={editotherPrice} user={data.otherPrice} />
      </Grid>
      <Grid item sm={12} lg={12} xl={12} xs={12}>
        <Barname setChange={setChange} addFunc={editorderNumber} user={data.orderNumber} />
      </Grid>
    </Grid>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'every-page'
}

export default ACLPage
