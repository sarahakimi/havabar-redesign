import { useEffect, useState } from 'react'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import Close from 'mdi-material-ui/Close'
import { Autocomplete, Card, CardContent, CardHeader, Grid, Modal } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { ostan, shahr } from 'iran-cities-json'
import toast from 'react-hot-toast'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Table from '../newOrder/table'

import { calculatePrice, createOrder } from '../newOrder/requests'

import http from '../../services/http'
import NewCustomwr from '../newOrder/newCustomer'
import { editUser } from './requests'

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
}

const schema = yup.object().shape({
  senderCodeMelli: yup
    .string()
    .required('کدملی فرستنده الزامی است')
    .matches(/d*/, 'کدملی باید عدد باشد')
    .test('len', 'کدملی باید 10 رقم باشد', val => val.toString().length === 10),
  senderName: yup.string().required('نام و نام خانوادگی فرستنده الزامی است').min(5, 'فیلد را به درستی پر کنید'),
  senderMobile: yup
    .string()
    .required('موبایل فرستنده الزامی است')
    .matches(/09d*/, ' موبایل باید عدد باشد و با 09 شروع شود')
    .test('len', 'موبایل باید 11 رقم باشد', val => val.toString().length === 11),
  senderPhone: yup
    .string()
    .required('تلفن فرستنده الزامی است')
    .matches(/d*/, ' تلفن باید عدد باشد')
    .min(3, 'تلفن باید حداقل 3 رقم باشد'),
  senderCompany: yup.string().typeError('به درستی وارد کنید'),
  senderCounty: yup.string().required('استان الزامی است').typeError('الزامی است'),
  senderCity: yup.string().required('شهر الزامی است'),
  senderCodePosti: yup
    .string()
    .required('کدپستی فرستنده الزامی است')
    .matches(/d*/, 'کدپستی باید عدد باشد')
    .test('len', 'کدپستی باید 10 رقم باشد', val => val.toString().length === 10),
  senderOtherInfo: yup.string().typeError('به درستی وارد کنید'),
  senderMainRoard: yup.string().required('خیابان اصلی الزامی است'),
  senderSubRoad: yup.string().required('خیابان فرعی الزامی است'),
  senderAlley: yup.string().required('کوچه الزامی است'),
  senderPlaque: yup.string().required('پلاک الزامی است').matches(/d*/, 'باید عدد باشد'),
  senderFloor: yup.string().required('طبقه الزامی است').matches(/d*/, 'باید عدد باشد'),
  senderUnit: yup.string().required('واحد الزامی است').matches(/d*/, 'باید عدد باشد'),
  recieverCodeMelli: yup
    .string()
    .required('کدملی گیرنده الزامی است')
    .matches(/d*/, 'کدملی باید عدد باشد')
    .test('len', 'کدملی باید 10 رقم باشد', val => val.toString().length === 10),
  recieverName: yup.string().required('نام و نام خانوادگی گیرنده الزامی است').min(5, 'فیلد را به درستی پر کنید'),
  recieverMobile: yup
    .string()
    .required('موبایل گیرنده الزامی است')
    .matches(/09d*/, ' موبایل باید عدد باشد و با 09 شروع شود')
    .test('len', 'موبایل باید 11 رقم باشد', val => val.toString().length === 11),
  recieverPhone: yup
    .string()
    .required('تلفن گیرنده الزامی است')
    .matches(/d*/, ' تلفن باید عدد باشد')
    .min(3, 'تلفن باید حداقل 3 رقم باشد'),
  recieverCompany: yup.string(),
  recieverCounty: yup.string().required('استان الزامی است').typeError('الزامی است'),
  recieverCity: yup.string().required('شهر الزامی است'),
  recieverCodePosti: yup
    .string()
    .required('کدپستی گیرنده الزامی است')
    .matches(/d*/, 'کدپستی باید عدد باشد')
    .test('len', 'کدپستی باید 10 رقم باشد', val => val.toString().length === 10),
  recieverMainRoard: yup.string().required('خیابان اصلی الزامی است'),
  recieverSubRoad: yup.string().required('خیابان فرعی الزامی است'),
  recieverAlley: yup.string().required('کوچه الزامی است'),
  recieverPlaque: yup.string().required('پلاک الزامی است').matches(/d*/, 'باید عدد باشد'),
  recieverFloor: yup.string().required('طبقه الزامی است').matches(/d*/, 'باید عدد باشد'),
  recieverUnit: yup.string().required('واحد الزامی است').matches(/d*/, 'باید عدد باشد'),
  receiverOtherInfo: yup.string().typeError('به درستی وارد کنید'),
  weight: yup.number().required('وزن الزامی است').min(1, 'حداقل باید 1 گرم باشد').typeError('باید عدد باشد'),
  length: yup.number().required('طول الزامی است').min(1, 'حداقل باید 1 سانتی متر باشد').typeError('باید عدد باشد'),
  width: yup.number().required('عرض الزامی است').min(1, 'حداقل باید 1 سانتی متر باشد').typeError('باید عدد باشد'),
  height: yup.number().required('ارتفاع الزامی است').min(1, 'حداقل باید 1 سانتی متر باشد').typeError('باید عدد باشد'),
  money: yup.number().required('ارزش کالا الزامی است').typeError('باید عدد باشد').min(1, 'حداقل باید 1 ریال باشد'),
  needsSpecialCarry: yup.boolean().typeError('به درستی انتخاب کنید'),
  SpecialBox: yup.boolean().typeError('به درستی انتخاب کنید'),
  maliat: yup.boolean().typeError('به درستی انتخاب کنید'),
  needsPackaging: yup.boolean().typeError('به درستی انتخاب کنید'),
  packaging: yup.string().required(' الزامی است'),
  barType: yup.string().required(' الزامی است'),
  mohtaviat: yup.string().typeError('به درستی وارد کنید'),
  hub_id: yup.number().required('هاب الزامی است').min(1, 'هاب را انتخاب کنید'),
  collect_price: yup.number().required(' الزامی است'),
  distribution_price: yup.number().required(' الزامی است'),
  paymentMethod: yup.string().required('الزامی است'),
  paymentType: yup.string().required('الزامی است'),
  discount_type: yup.boolean().typeError('به درستی انتخاب کنید'),
  discount: yup.number().typeError('باید عدد باشد')
})

function SidebarAddCourier({ open, toggle, setChange, user, edit, showUser }) {
  const emptyForm = {
    senderCodeMelli: '',
    senderName: '',
    senderMobile: '',
    senderPhone: '',
    senderCompany: '',
    senderCounty: '',
    senderCity: '',
    senderCodePosti: '',
    senderOtherInfo: '',
    senderMainRoard: '',
    senderSubRoad: '',
    senderAlley: '',
    senderPlaque: '',
    senderFloor: '',
    senderUnit: '',
    recieverCodeMelli: '',
    recieverName: '',
    recieverMobile: '',
    recieverPhone: '',
    recieverCompany: '',
    recieverCounty: '',
    recieverCity: '',
    recieverCodePosti: '',
    recieverMainRoard: '',
    recieverSubRoad: '',
    recieverAlley: '',
    recieverPlaque: '',
    recieverFloor: '',
    recieverUnit: '',
    receiverOtherInfo: '',
    weight: 0,
    length: 0,
    width: 0,
    height: 0,
    money: 0,
    needsSpecialCarry: false,
    maliat: false,
    needsPackaging: false,
    packaging: '',
    barType: '',
    mohtaviat: '',
    hub_id: 0,
    collect_price: 0,
    distribution_price: 0,
    paymentMethod: '',
    paymentType: '',
    discount_type: false,
    discount: 0
  }

  const defaultValues = user
    ? {
        senderCodeMelli: user.sender.natural_number,
        senderName: user.sender.full_name,
        senderMobile: user.sender.phone_number,
        senderPhone: user.sender.tel_number,
        senderCompany: user.sender.sherkat_name,
        senderCounty: user.sender.ostan,
        senderCity: user.sender.shahr,
        senderCodePosti: user.sender.postal_code,
        senderOtherInfo: user.sender.other_information,
        senderMainRoard: user.sender.khiaban_asli,
        senderSubRoad: user.sender.khiaban_faree,
        senderAlley: user.sender.kooche,
        senderPlaque: user.sender.plak,
        senderFloor: user.sender.tabaghe,
        senderUnit: user.sender.vahed,
        recieverCodeMelli: user.receiver.natural_number,
        recieverName: user.receiver.full_name,
        recieverMobile: user.receiver.phone_number,
        recieverPhone: user.receiver.tel_number,
        recieverCompany: user.receiver.sherkat_name,
        recieverCounty: user.receiver.ostan,
        recieverCity: user.receiver.shahr,
        recieverCodePosti: user.receiver.postal_code,
        recieverMainRoard: user.receiver.khiaban_asli,
        recieverSubRoad: user.receiver.khiaban_faree,
        recieverAlley: user.receiver.kooche,
        recieverPlaque: user.receiver.plak,
        recieverFloor: user.receiver.tabaghe,
        recieverUnit: user.receiver.vahed,
        receiverOtherInfo: user.receiver.other_information,
        weight: user.bar.weight,
        length: user.bar.size_y,
        width: user.bar.size_x,
        height: user.bar.size_z,
        money: user.bar.arzesh,
        needsSpecialCarry: user.sub_order.requires_special_shipping,
        maliat: user.sub_order.texes,
        needsPackaging: user.sub_order.requires_packing,
        packaging: user.bar.bastebandi_type,
        barType: user.bar.bar_type,
        mohtaviat: user.bar.mohtaviat,
        hub_id: user.sub_order.hub_destination_id,
        collect_price: 0,
        distribution_price: 0,
        paymentMethod: user.sub_order.payment_method,
        paymentType: user.sub_order.payment_state,
        discount_type: user.financial_information.off_percent_status,
        discount: user.financial_information.off
      }
    : {
        senderCodeMelli: '',
        senderName: '',
        senderMobile: '',
        senderPhone: '',
        senderCompany: '',
        senderCounty: '',
        senderCity: '',
        senderCodePosti: '',
        senderOtherInfo: '',
        senderMainRoard: '',
        senderSubRoad: '',
        senderAlley: '',
        senderPlaque: '',
        senderFloor: '',
        senderUnit: '',
        recieverCodeMelli: '',
        recieverName: '',
        recieverMobile: '',
        recieverPhone: '',
        recieverCompany: '',
        recieverCounty: '',
        recieverCity: '',
        recieverCodePosti: '',
        recieverMainRoard: '',
        recieverSubRoad: '',
        recieverAlley: '',
        recieverPlaque: '',
        recieverFloor: '',
        recieverUnit: '',
        receiverOtherInfo: '',
        weight: 0,
        length: 0,
        width: 0,
        height: 0,
        money: 0,
        needsSpecialCarry: false,
        maliat: false,
        needsPackaging: false,
        packaging: '',
        barType: '',
        mohtaviat: '',
        hub_id: 0,
        collect_price: 0,
        distribution_price: 0,
        paymentMethod: '',
        paymentType: '',
        discount_type: false,
        discount: 0
      }
  console.log(user)

  const paymentMethod = ['پیش کرایه', 'پس کرایه']

  const barType = [
    'فروش اینترنتی',
    'لوازم پزشکی',
    'مواد غذایی',
    'لوازم تزئینی',
    'گل و گیاه',
    'دکوراسیون',
    'لوازم الکترونیکی',
    'اواراق'
  ]

  const packaging = ['پاکت', 'بسته', 'کیسه', 'کارتن', 'پالت']

  const paymentType = ['کارتخوان-خرید', 'کارتخوان-مشتری', 'سرویس پرداخت-کارتخوان', 'نقدی']
  const [selectedSenderOstan, setSelectedSenderOstan] = useState('')
  const [selectedRecieverOstan, setSelectedRecieverOstan] = useState('')
  const [newSenderOpen, setNewSenderOpen] = useState(false)
  const [newRecieverOpen, setNewRecieverOpen] = useState(false)
  const [changeorder, setChangeorder] = useState(false)

  const togglenewSenderOpen = () => setNewSenderOpen(!newSenderOpen)
  const togglenewRecieverOpen = () => setNewRecieverOpen(!newRecieverOpen)
  const [opensender, setOpensender] = useState(false)
  const handleOpen = () => setOpensender(true)
  const handleClose = () => setOpensender(false)
  const [sender, setSender] = useState(user ? user.sender : {})
  const [reciever, setReciever] = useState(user ? user.receiver : {})
  const [recieverOpen, setRecieverOpen] = useState(false)
  const handleRecieverOpen = () => setRecieverOpen(true)
  const handleRecieverClose = () => setRecieverOpen(false)
  const [hasSender, setHasSender] = useState(!!user)
  const [hasReciever, setHasReciever] = useState(!!user)
  const [submitType, setSubmitType] = useState('')
  const [senderDefaultAddress, setSenderDefaultAddress] = useState(true)
  const [recieverDefaultAddress, setRecieverDefaultAddress] = useState(true)

  const {
    control,
    reset,
    setValue,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  function onChangeSenderOstan(event, onChange, values) {
    onChange(values)
    setSelectedSenderOstan(ostan.find(element => element.name === event.target.innerText)?.id)
  }

  function onChangeRecieverOstan(event, onChange, values) {
    onChange(values)
    setSelectedRecieverOstan(ostan.find(element => element.name === event.target.innerText)?.id)
  }

  // eslint-disable-next-line camelcase
  const [hub_ids, sethub_ids] = useState([])
  const [collectPrices, setCollectPrices] = useState([])
  const [distributionPrices, setDistributionPrices] = useState([])

  function onChangeHub(event, onChange) {
    onChange(event)
    http
      .post(
        'distribution_hub_price/',
        { hub_id: event.target.value },
        {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        }
      )
      .then(async response => {
        if (response.data != null) {
          setDistributionPrices([...response.data])
        } else setDistributionPrices([])
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
        setError('distribution_price', { type: 'custom', message: errorMessage })
      })
  }

  useEffect(() => {
    http
      .get(
        'hubs/',
        {},
        {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        }
      )
      .then(async response => {
        if (response.data.hubs != null) {
          sethub_ids([...response.data.hubs])
          // eslint-disable-next-line no-unused-expressions
          user && setValue('hub_id', user.sub_order.hub_destination_id)
        } else sethub_ids([])
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
        setError('hub_id', { type: 'custom', message: errorMessage })
      })
    http
      .get(
        'collect_price/',
        {},
        {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        }
      )
      .then(async response => {
        if (response.data != null) {
          setCollectPrices([...response.data])
        } else setCollectPrices([])
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
        setError('collect_price', { type: 'custom', message: errorMessage })
      })
  }, [])

  const onsetSenderCustomer = () => {
    setHasSender(true)

    setValue('senderName', sender.full_name, { shouldValidate: true })
    setValue('senderCodeMelli', sender.natural_number, { shouldValidate: true })
    setValue('senderCompany', sender.sherkat_name, { shouldValidate: true })
    setValue('senderMobile', sender.phone_number, { shouldValidate: true })
    setValue('senderPhone', sender.tel_number, { shouldValidate: true })
    setValue('senderCounty', sender.ostan, { shouldValidate: true })

    setSelectedSenderOstan(ostan.find(element => element.name === sender.ostan)?.id)
    setValue('senderCity', sender.shahr, { shouldValidate: true })
    setValue('senderCodePosti', sender.postal_code, { shouldValidate: true })
    setValue('senderMainRoard', sender.khiaban_asli, { shouldValidate: true })
    setValue('senderSubRoad', sender.khiaban_faree, { shouldValidate: true })
    setValue('senderAlley', sender.kooche, { shouldValidate: true })
    setValue('senderPlaque', sender.plak, { shouldValidate: true })
    setValue('senderFloor', sender.tabaghe, { shouldValidate: true })
    setValue('senderUnit', sender.vahed, { shouldValidate: true })
    setValue('senderOtherInfo', sender.other_information, { shouldValidate: true })

    handleClose()
  }

  const emptySender = () => {
    setHasSender(false)
    setValue('senderName', '', { shouldTouch: true })
    setValue('senderCodeMelli', '', { shouldTouch: true })
    setValue('senderCompany', '', { shouldTouch: true })
    setValue('senderMobile', '', { shouldTouch: true })
    setValue('senderPhone', '', { shouldTouch: true })
    setValue('senderCounty', '', { shouldTouch: true })

    setSelectedSenderOstan('')
    setValue('senderCity', '', { shouldTouch: true })
    setValue('senderCodePosti', '', { shouldTouch: true })
    setValue('senderMainRoard', '', { shouldTouch: true })
    setValue('senderSubRoad', '', { shouldTouch: true })
    setValue('senderAlley', '', { shouldTouch: true })
    setValue('senderPlaque', '', { shouldTouch: true })
    setValue('senderFloor', '', { shouldTouch: true })
    setValue('senderUnit', '', { shouldTouch: true })
    setValue('senderOtherInfo', '', { shouldTouch: true })
  }

  const onsetRecieverCustomer = () => {
    setHasReciever(true)

    setValue('recieverName', reciever.full_name, { shouldValidate: true })
    setValue('recieverCodeMelli', reciever.natural_number, { shouldValidate: true })
    setValue('recieverCompany', reciever.sherkat_name, { shouldValidate: true })
    setValue('recieverMobile', reciever.phone_number, { shouldValidate: true })
    setValue('recieverPhone', reciever.tel_number, { shouldValidate: true })
    setValue('recieverCounty', reciever.ostan, { shouldValidate: true })

    setSelectedRecieverOstan(ostan.find(element => element.name === sender.ostan)?.id)
    setValue('recieverCity', reciever.shahr, { shouldValidate: true })
    setValue('recieverCodePosti', reciever.postal_code, { shouldValidate: true })
    setValue('recieverMainRoard', reciever.khiaban_asli, { shouldValidate: true })
    setValue('recieverSubRoad', reciever.khiaban_faree, { shouldValidate: true })
    setValue('recieverAlley', reciever.kooche, { shouldValidate: true })
    setValue('recieverPlaque', reciever.plak, { shouldValidate: true })
    setValue('recieverFloor', reciever.tabaghe, { shouldValidate: true })
    setValue('recieverUnit', reciever.vahed, { shouldValidate: true })
    setValue('recieverOtherInfo', reciever.other_information, { shouldValidate: true })

    handleRecieverClose()
  }

  const emptyReciever = () => {
    setHasReciever(false)
    setValue('recieverName', '', { shouldTouch: true })
    setValue('recieverCodeMelli', '', { shouldTouch: true })
    setValue('recieverCompany', '', { shouldTouch: true })
    setValue('recieverMobile', '', { shouldTouch: true })
    setValue('recieverPhone', '', { shouldTouch: true })
    setValue('recieverCounty', '', { shouldTouch: true })

    setSelectedRecieverOstan('')
    setValue('recieverCity', '', { shouldTouch: true })
    setValue('recieverCodePosti', '', { shouldTouch: true })
    setValue('recieverMainRoard', '', { shouldTouch: true })
    setValue('recieverSubRoad', '', { shouldTouch: true })
    setValue('recieverAlley', '', { shouldTouch: true })
    setValue('recieverPlaque', '', { shouldTouch: true })
    setValue('recieverFloor', '', { shouldTouch: true })
    setValue('recieverUnit', '', { shouldTouch: true })
    setValue('recieverOtherInfo', '', { shouldTouch: true })
  }

  useEffect(() => {
    if (changeorder) {
      if (Object?.keys(sender).length !== 0) {
        onsetSenderCustomer()
      }
      if (Object?.keys(reciever).length !== 0) {
        onsetRecieverCustomer()
      }
      setChangeorder(false)
    }
  }, [changeorder])

  const onSubmit = data => {
    // eslint-disable-next-line camelcase
    const discount_type = data.discount_type === true ? 1 : 0
    const maliat = data.maliat === true ? 1 : 0
    const needsPackaging = data.needsPackaging === true ? 1 : 0
    const needsSpecialCarry = data.needsSpecialCarry === true ? 1 : 0

    if (submitType === 'submit') {
      if (edit) {
        const config = {
          sender_natural_number: data.senderCodeMelli,
          receiver_natural_number: data.recieverCodeMelli,
          payment_state: data.paymentMethod,
          payment_method: data.paymentType,
          sender_address: `${data.senderMainRoard}- خیابان ${data.senderSubRoad} -کوچه ${data.senderAlley} - پلاک ${data.senderPlaque} - طبقه ${data.senderFloor} - واحد ${data.senderUnit}`,
          receiver_address: `${data.recieverMainRoard}- خیابان ${data.recieverSubRoad} -کوچه ${data.recieverAlley} - پلاک ${data.recieverPlaque} - طبقه ${data.recieverFloor} - واحد ${data.recieverUnit}`,
          requires_packing: needsPackaging,
          requires_special_shipping: needsSpecialCarry,
          texes: maliat,
          bar: {
            weight: data.weight,
            size_x: data.width,
            size_y: data.length,
            size_z: data.height,
            bar_type: data.barType,
            bastebandi_type: data.packaging,
            arzesh: data.money,
            mohtaviat: data.mohtaviat
          },
          off_percent: data.discount,
          hub_destination_id: data.hub_id
        }
        toast.promise(
          editUser(user.sub_order.id, config).then(() => {
            reset(emptyForm)
            setHasReciever(false)
            setHasSender(false)
            toggle()
            setChange(true)
          }),
          {
            loading: 'در حال ثبت سفارش',
            success: 'سفارش ثبت شد',
            error: err => (err.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
          }
        )
      } else {
        const config = {
          sender_natural_number: data.senderCodeMelli,
          receiver_natural_number: data.recieverCodeMelli,
          payment_state: data.paymentMethod,
          payment_method: data.paymentType,
          sender_address: `${data.senderMainRoard}- خیابان ${data.senderSubRoad} -کوچه ${data.senderAlley} - پلاک ${data.senderPlaque} - طبقه ${data.senderFloor} - واحد ${data.senderUnit}`,
          receiver_address: `${data.recieverMainRoard}- خیابان ${data.recieverSubRoad} -کوچه ${data.recieverAlley} - پلاک ${data.recieverPlaque} - طبقه ${data.recieverFloor} - واحد ${data.recieverUnit}`,
          requires_packing: needsPackaging,
          requires_special_shipping: needsSpecialCarry,
          texes: maliat,
          bar: {
            weight: data.weight,
            size_x: data.width,
            size_y: data.length,
            size_z: data.height,
            bar_type: data.barType,
            bastebandi_type: data.packaging,
            arzesh: data.money,
            mohtaviat: data.mohtaviat
          },
          off_percent: data.discount,
          // eslint-disable-next-line camelcase
          off_percent_status: discount_type,
          hub_destination_id: data.hub_id,
          collect_price_id: data.collect_price,
          distribution_price_id: data.distribution_price
        }
        toast.promise(
          createOrder(config).then(() => {
            reset(emptyForm)
            setHasReciever(false)
            setHasSender(false)
            toggle()
            setChange(true)
          }),
          {
            loading: 'در حال ثبت سفارش',
            success: 'سفارش ثبت شد',
            error: err => (err.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
          }
        )
      }
    } else if (submitType === 'calculate') {
      const config = {
        sender_natural_number: data.senderCodeMelli,
        receiver_natural_number: data.recieverCodeMelli,
        payment_state: data.paymentMethod,
        payment_method: data.paymentType,
        requires_packing: data.needsPackaging,
        requires_special_shipping: needsSpecialCarry,
        texes: maliat,
        bar: {
          weight: data.weight,
          size_x: data.width,
          size_y: data.length,
          size_z: data.height,
          bar_type: data.barType,
          bastebandi_type: data.packaging,
          arzesh: data.money,
          mohtaviat: data.mohtaviat
        },
        off_percent: data.discount,
        // eslint-disable-next-line camelcase
        off_percent_status: data.discount_type,
        hub_destination_id: data.hub_id,
        collect_price_id: data.collect_price,
        distribution_price_id: data.distribution_price
      }
      toast.promise(
        calculatePrice(config).then(response => {
          toast(t => (
            <Box flex>
              قیمت محاسبه شده <b>{response.data.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</b> ریال می باشد
              <Button onClick={() => toast.dismiss(t.id)}>بستن</Button>
            </Box>
          ))
        }),
        {
          loading: 'در حال محاسبه قیمت',
          success: 'قیمت محاسبه شد',
          error: err => (err.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
        }
      )
    }
  }

  const clickedOnSubmit = type => {
    setSubmitType(type)
  }

  return (
    <Drawer
      open={open}
      anchor='left'
      variant='temporary'
      onClose={toggle}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: '100%', sm: '100%', lg: '80%', xl: '80%' } } }}
    >
      <Header>
        <Typography variant='h6'>اطلاعات سفارش</Typography>
        <Close fontSize='small' onClick={toggle} sx={{ cursor: 'pointer' }} />
      </Header>
      <Box
        sx={{
          p: 5,
          '& .MuiInputBase-input.Mui-disabled': {
            WebkitTextFillColor: 'rgba(76,78,100,0.87)'
          },
          '& 	.MuiInputLabel-root.Mui-disabled': {
            WebkitTextFillColor: 'rgba(76,78,100,0.87)'
          }
        }}
      >
        {showUser && (
          <>
            <Card mb={5} p={5} sx={{ mb: 5, p: 5 }}>
              <CardHeader title='اطلاعات سفارش' />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <img src={user.sub_order.bar_code_url} width='200px' height='200px' />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField
                      label='لینک بارنامه'
                      value={user.sub_order.pdf_url}
                      dir='ltr'
                      disabled
                      multiline
                      lines={2}
                    />
                  </Grid>{' '}
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField label='مرحله' value={user.sub_order.state} disabled />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField label='سماره سفارش(جهت پیگیری)' value={user.sub_order.id} dir='ltr' disabled />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card mb={5} p={5} sx={{ mb: 5, p: 5 }}>
              <CardHeader title='اطلاعات قیمت' />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField
                      label='ارزش افزوده'
                      value={user.financial_information.arzesh_afzode}
                      dir='ltr'
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField label='عوارض' value={user.financial_information.avarez} dir='ltr' disabled />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField label='بسته بندی' value={user.financial_information.baste_bandy} dir='ltr' disabled />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField label='بیمه' value={user.financial_information.bimeh} dir='ltr' disabled />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField
                      label='قیمت منطقه ای'
                      value={user.financial_information.gheymat_gozary}
                      dir='ltr'
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField label='جمع آوری' value={user.financial_information.jam_avary} dir='ltr' disabled />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField label='خدمات' value={user.financial_information.khadamat} dir='ltr' disabled />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField label='کرایه' value={user.financial_information.kraye} dir='ltr' disabled />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField label='مالیات' value={user.financial_information.maliat} dir='ltr' disabled />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField
                      label='نرخ هر کیلوگرم'
                      value={user.financial_information.nerkh_be_kg}
                      dir='ltr'
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField label='تخفیف' value={user.financial_information.off} dir='ltr' disabled />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField label='قابل پرداخت' value={user.financial_information.payable} dir='ltr' disabled />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField label='نمبر' value={user.financial_information.tambr} dir='ltr' disabled />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField label='توزیع' value={user.financial_information.tozie} dir='ltr' disabled />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField label='مجموع' value={user.financial_information.total} dir='ltr' disabled />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </>
        )}

        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <Card
            sx={{
              p: 5,
              '& .MuiInputBase-input.Mui-disabled': {
                WebkitTextFillColor: 'blue'
              },
              '& 	.MuiInputLabel-root.Mui-disabled': {
                WebkitTextFillColor: 'rgba(76,78,100,0.87)'
              },
              mb: 5
            }}
          >
            <CardHeader
              title='فرستنده'
              subheader={
                !showUser && hasSender ? (
                  <Button onClick={emptySender} color='error'>
                    حذف مشتری انتخاب شده
                  </Button>
                ) : (
                  <>
                    <Button onClick={handleOpen}>جستجوی مشتری</Button>
                    <Button onClick={togglenewSenderOpen}>افزودن مشتری</Button>
                  </>
                )
              }
            />
            <Modal
              open={opensender}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              <Box sx={{ ...style }}>
                <h2 id='modal-modal-title'>انتخاب فرستنده</h2>
                <Table setCustomer={setSender} customer={sender} />
                <Box display='flex' justifyContent='center' alignItems='center'>
                  <Button variant='contained' color='primary' onClick={() => setChangeorder(true)} sx={{ mx: 2 }}>
                    انتخاب{' '}
                  </Button>
                  <Button variant='contained' color='error' onClick={handleClose}>
                    بستن
                  </Button>
                </Box>
              </Box>
            </Modal>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      fullWidth
                      name='senderCodeMelli'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          label='کدملی'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.senderCodeMelli)}
                          inputProps={{ maxLength: 10 }}
                          dir='ltr'
                          disabled
                        />
                      )}
                    />
                    {errors.senderCodeMelli && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.senderCodeMelli.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='senderName'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          disabled
                          label='نام و نام خانوادگی'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.senderName)}
                          inputProps={{ maxLength: 50 }}
                        />
                      )}
                    />
                    {errors.senderName && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.senderName.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='senderMobile'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          label='موبایل'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.senderMobile)}
                          inputProps={{ maxLength: 11 }}
                          placeholder='09*********'
                          dir='ltr'
                          disabled
                        />
                      )}
                    />
                    {errors.senderMobile && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.senderMobile.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='senderPhone'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          label='تلفن'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.senderPhone)}
                          dir='ltr'
                          disabled
                        />
                      )}
                    />
                    {errors.senderPhone && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.senderPhone.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='senderCompany'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          label='شرکت'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.senderCompany)}
                          disabled
                        />
                      )}
                    />
                    {errors.senderCompany && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.senderCompany.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      fullWidth
                      name='senderCounty'
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
                          disabled
                          renderInput={params => (
                            <TextField
                              /* eslint-disable-next-line react/jsx-props-no-spreading */
                              {...params}
                              label='استان'
                              variant='outlined'
                              onChange={onChange}
                              error={Boolean(errors.senderCounty)}
                            />
                          )}
                        />
                      )}
                    />
                    {errors.senderCounty && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.senderCounty.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='senderCity'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <Autocomplete
                          onBlur={onBlur}
                          disabled
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
                              label='شهر'
                              variant='outlined'
                              onChange={onChange}
                              error={Boolean(errors.senderCity)}
                            />
                          )}
                        />
                      )}
                    />
                    {errors.senderCity && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.senderCity.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='senderCodePosti'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          disabled
                          label='کدپستی'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.senderCodePosti)}
                          inputProps={{ maxLength: 10 }}
                          dir='ltr'
                        />
                      )}
                    />
                    {errors.senderCodePosti && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.senderCodePosti.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <FormControl fullWidth>
                    <Controller
                      name='senderOtherInfo'
                      control={control}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          disabled
                          label='سایر اطلاعات'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.senderOtherInfo)}
                          inputProps={{ maxLength: 10 }}
                        />
                      )}
                    />
                    {errors.senderOtherInfo && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.senderOtherInfo.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography variant='h6' component='p' mb={4}>
                    آدرس
                  </Typography>
                </Grid>
                {!showUser && (
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <FormControlLabel
                      control={
                        <Switch
                          value={senderDefaultAddress}
                          checked={senderDefaultAddress}
                          onChange={() => setSenderDefaultAddress(!senderDefaultAddress)}
                        />
                      }
                      sx={{ p: 0, m: 0 }}
                      labelPlacement='start'
                      label='پیش فرض'
                    />
                  </Grid>
                )}
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='senderMainRoard'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          disabled={senderDefaultAddress}
                          label='خیابان اصلی'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.senderMainRoard)}
                        />
                      )}
                    />
                    {errors.senderMainRoard && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.senderMainRoard.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='senderSubRoad'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          disabled={senderDefaultAddress}
                          label='خیابان فرعی'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.senderSubRoad)}
                        />
                      )}
                    />
                    {errors.senderSubRoad && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.senderSubRoad.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='senderAlley'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          disabled={senderDefaultAddress}
                          label='کوچه'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.senderAlley)}
                        />
                      )}
                    />
                    {errors.senderAlley && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.senderAlley.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
                  <FormControl fullWidth>
                    <Controller
                      name='senderPlaque'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          disabled={senderDefaultAddress}
                          label='پلاک'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.senderPlaque)}
                        />
                      )}
                    />
                    {errors.senderPlaque && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.senderPlaque.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
                  <FormControl fullWidth>
                    <Controller
                      name='senderFloor'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          disabled={senderDefaultAddress}
                          label='طبقه'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.senderFloor)}
                        />
                      )}
                    />
                    {errors.senderFloor && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.senderFloor.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
                  <FormControl fullWidth>
                    <Controller
                      name='senderUnit'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          disabled={senderDefaultAddress}
                          label='واحد'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.senderUnit)}
                          inputProps={{ maxLength: 10 }}
                        />
                      )}
                    />
                    {errors.senderUnit && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.senderUnit.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card
            sx={{
              p: 5,
              '& .MuiInputBase-input.Mui-disabled': {
                WebkitTextFillColor: 'blue'
              },
              '& 	.MuiInputLabel-root.Mui-disabled': {
                WebkitTextFillColor: 'rgba(76,78,100,0.87)'
              },
              mb: 5
            }}
          >
            <CardHeader
              title='گیرنده'
              subheader={
                !showUser &&
                (hasReciever ? (
                  <Button onClick={emptyReciever} color='error'>
                    حذف مشتری انتخاب شده
                  </Button>
                ) : (
                  <>
                    <Button onClick={handleRecieverOpen}>جستجوی مشتری</Button>
                    <Button onClick={togglenewRecieverOpen}>افزودن مشتری</Button>
                  </>
                ))
              }
            />
            <Modal
              open={recieverOpen}
              onClose={handleRecieverClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              <Box sx={{ ...style }}>
                <h2 id='modal-modal-title'>انتخاب گیرنده</h2>
                <Table setCustomer={setReciever} customer={reciever} />
                <Box display='flex' justifyContent='center' alignItems='center'>
                  <Button variant='contained' color='primary' onClick={() => setChangeorder(true)} sx={{ mx: 2 }}>
                    انتخاب{' '}
                  </Button>
                  <Button variant='contained' color='error' onClick={handleRecieverClose}>
                    بستن
                  </Button>
                </Box>
              </Box>
            </Modal>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      fullWidth
                      name='recieverCodeMelli'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          label='کدملی'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.recieverCodeMelli)}
                          inputProps={{ maxLength: 10 }}
                          dir='ltr'
                          disabled
                        />
                      )}
                    />
                    {errors.recieverCodeMelli && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverCodeMelli.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='recieverName'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          label='نام و نام خانوادگی'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.recieverName)}
                          inputProps={{ maxLength: 50 }}
                          disabled
                        />
                      )}
                    />
                    {errors.recieverName && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverName.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='recieverMobile'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          label='موبایل'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.recieverMobile)}
                          inputProps={{ maxLength: 11 }}
                          placeholder='09*********'
                          dir='ltr'
                          disabled
                        />
                      )}
                    />
                    {errors.recieverMobile && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverMobile.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='recieverPhone'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          label='تلفن'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.recieverPhone)}
                          dir='ltr'
                          disabled
                        />
                      )}
                    />
                    {errors.recieverPhone && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverPhone.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='recieverCompany'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          label='شرکت'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.recieverCompany)}
                          disabled
                        />
                      )}
                    />
                    {errors.recieverCompany && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverCompany.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      fullWidth
                      name='recieverCounty'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { onChange, value, onBlur } }) => (
                        <Autocomplete
                          onBlur={onBlur}
                          select
                          options={ostan.map(element => element.name)}
                          onChange={(event, values, value) => onChangeRecieverOstan(event, onChange, values, value)}
                          value={value}
                          disabled
                          disableClearable
                          renderInput={params => (
                            <TextField
                              /* eslint-disable-next-line react/jsx-props-no-spreading */
                              {...params}
                              label='استان'
                              variant='outlined'
                              onChange={onChange}
                              error={Boolean(errors.recieverCounty)}
                              disabled
                            />
                          )}
                        />
                      )}
                    />
                    {errors.recieverCounty && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverCounty.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='recieverCity'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <Autocomplete
                          onBlur={onBlur}
                          disabled
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
                              label='شهر'
                              variant='outlined'
                              onChange={onChange}
                              error={Boolean(errors.recieverCity)}
                            />
                          )}
                        />
                      )}
                    />
                    {errors.recieverCity && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverCity.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='recieverCodePosti'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          label='کدپستی'
                          disabled
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.recieverCodePosti)}
                          inputProps={{ maxLength: 10 }}
                          dir='ltr'
                        />
                      )}
                    />
                    {errors.recieverCodePosti && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverCodePosti.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <FormControl fullWidth>
                    <Controller
                      name='receiverOtherInfo'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          label='سایر اطلاعات'
                          disabled
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.receiverOtherInfo)}
                          inputProps={{ maxLength: 10 }}
                        />
                      )}
                    />
                    {errors.receiverOtherInfo && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.receiverOtherInfo.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography variant='h6' component='p'>
                    آدرس
                  </Typography>
                </Grid>
                {!showUser && (
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <FormControlLabel
                      control={
                        <Switch
                          value={recieverDefaultAddress}
                          checked={recieverDefaultAddress}
                          onChange={() => setRecieverDefaultAddress(!recieverDefaultAddress)}
                        />
                      }
                      sx={{ p: 0, m: 0 }}
                      labelPlacement='start'
                      label='پیش فرض'
                    />
                  </Grid>
                )}
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='recieverMainRoard'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          label='خیابان اصلی'
                          disabled={recieverDefaultAddress}
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.recieverMainRoard)}
                          inputProps={{ maxLength: 10 }}
                        />
                      )}
                    />
                    {errors.recieverMainRoard && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverMainRoard.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='recieverSubRoad'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          label='خیابان فرعی'
                          disabled={recieverDefaultAddress}
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.recieverSubRoad)}
                          inputProps={{ maxLength: 10 }}
                        />
                      )}
                    />
                    {errors.recieverSubRoad && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverSubRoad.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='recieverAlley'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          disabled={recieverDefaultAddress}
                          label='کوچه'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.recieverAlley)}
                          inputProps={{ maxLength: 10 }}
                        />
                      )}
                    />
                    {errors.recieverAlley && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverAlley.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
                  <FormControl fullWidth>
                    <Controller
                      name='recieverPlaque'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          disabled={recieverDefaultAddress}
                          label='پلاک'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.recieverPlaque)}
                          inputProps={{ maxLength: 10 }}
                        />
                      )}
                    />
                    {errors.recieverPlaque && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverPlaque.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
                  <FormControl fullWidth>
                    <Controller
                      name='recieverFloor'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          disabled={recieverDefaultAddress}
                          label='طبقه'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.recieverFloor)}
                          inputProps={{ maxLength: 10 }}
                        />
                      )}
                    />
                    {errors.recieverFloor && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverFloor.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
                  <FormControl fullWidth>
                    <Controller
                      name='recieverUnit'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          label='واحد'
                          disabled={recieverDefaultAddress}
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.recieverUnit)}
                          inputProps={{ maxLength: 10 }}
                        />
                      )}
                    />
                    {errors.recieverUnit && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.recieverUnit.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card sx={{ mb: 5, p: 5 }}>
            <CardHeader title='مرسوله' />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      fullWidth
                      name='weight'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          label='وزن (گرم)'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          disabled={showUser}
                          error={Boolean(errors.weight)}
                          dir='ltr'
                        />
                      )}
                    />
                    {errors.weight && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.weight.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      fullWidth
                      name='length'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          label='طول (سانتی متر)'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          disabled={showUser}
                          error={Boolean(errors.length)}
                          dir='ltr'
                        />
                      )}
                    />
                    {errors.length && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.length.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      fullWidth
                      name='width'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          label='عرض (سانتی متر)'
                          value={value}
                          onBlur={onBlur}
                          disabled={showUser}
                          onChange={onChange}
                          error={Boolean(errors.width)}
                          dir='ltr'
                        />
                      )}
                    />
                    {errors.width && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.width.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      fullWidth
                      name='height'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          label='ارتفاع (سانتی متر)'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          disabled={showUser}
                          error={Boolean(errors.height)}
                          dir='ltr'
                        />
                      )}
                    />
                    {errors.height && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.height.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      fullWidth
                      name='money'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          label='ارزش کالا (ریال)'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          disabled={showUser}
                          error={Boolean(errors.money)}
                          dir='ltr'
                        />
                      )}
                    />
                    {errors.money && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.money.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      fullWidth
                      name='needsSpecialCarry'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <>
                          <InputLabel>نیاز به حمل ویژه</InputLabel>
                          <Select
                            label='نیاز به حمل ویژه'
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            disabled={showUser}
                            error={Boolean(errors.needsSpecialCarry)}
                          >
                            <MenuItem value>دارد</MenuItem>
                            <MenuItem value={false}>ندارد</MenuItem>
                          </Select>
                        </>
                      )}
                    />
                    {errors.needsSpecialCarry && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.needsSpecialCarry.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      fullWidth
                      name='maliat'
                      control={control}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <>
                          <InputLabel>شامل مالیات و عوارض</InputLabel>
                          <Select
                            label='بار خاص'
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            disabled={showUser}
                            error={Boolean(errors.maliat)}
                          >
                            <MenuItem value>می باشد</MenuItem>
                            <MenuItem value={false}>نمی باشد</MenuItem>
                          </Select>
                        </>
                      )}
                    />
                    {errors.maliat && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.maliat.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      fullWidth
                      name='needsPackaging'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <>
                          <InputLabel>نیاز به بسته بندی</InputLabel>
                          <Select
                            label='نیاز به بسته بندی'
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            disabled={showUser}
                            error={Boolean(errors.needsPackaging)}
                          >
                            <MenuItem value>دارد</MenuItem>
                            <MenuItem value={false}>ندارد</MenuItem>
                          </Select>
                        </>
                      )}
                    />
                    {errors.needsPackaging && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.needsPackaging.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='packaging'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <Autocomplete
                          onBlur={onBlur}
                          select
                          options={packaging}
                          onChange={(event, values) => onChange(values)}
                          value={value}
                          disabled={showUser}
                          disableClearable
                          renderInput={params => (
                            <TextField
                              /* eslint-disable-next-line react/jsx-props-no-spreading */
                              {...params}
                              label='بسته یندی'
                              variant='outlined'
                              onChange={onChange}
                              error={Boolean(errors.packaging)}
                            />
                          )}
                        />
                      )}
                    />
                    {errors.packaging && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.packaging.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='barType'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <Autocomplete
                          onBlur={onBlur}
                          select
                          options={barType}
                          onChange={(event, values) => onChange(values)}
                          value={value}
                          disabled={showUser}
                          disableClearable
                          renderInput={params => (
                            <TextField
                              /* eslint-disable-next-line react/jsx-props-no-spreading */
                              {...params}
                              label='نوع بار'
                              variant='outlined'
                              onChange={onChange}
                              error={Boolean(errors.barType)}
                            />
                          )}
                        />
                      )}
                    />
                    {errors.barType && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.barType.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <FormControl fullWidth>
                    <Controller
                      name='mohtaviat'
                      control={control}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          label='محتویات'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          disabled={showUser}
                          error={Boolean(errors.mohtaviat)}
                          inputProps={{ maxLength: 10 }}
                          dir='rtl'
                        />
                      )}
                    />
                    {errors.mohtaviat && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.mohtaviat.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card sx={{ mb: 5, p: 5 }}>
            <CardHeader title='پرداخت' />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth sx={{ mb: 4 }}>
                    <Controller
                      name='hub_id'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { onChange, onBlur } }) => (
                        <>
                          <InputLabel>هاب مقصد</InputLabel>
                          <Select
                            type='number'
                            onBlur={onBlur}
                            disabled={showUser}
                            id='demo-multiple-name'
                            onChange={event => onChangeHub(event, onChange)}
                            input={<OutlinedInput label='Name' />}
                            error={Boolean(errors.hub_id)}
                            defaultValue={user && user.sub_order.hub_destination_id}
                          >
                            {/* eslint-disable-next-line camelcase */}
                            {
                              // eslint-disable-next-line camelcase
                              hub_ids.map(
                                (
                                  // eslint-disable-next-line camelcase
                                  hub_id
                                ) => (
                                  // eslint-disable-next-line camelcase
                                  <MenuItem key={hub_id.id} value={parseInt(hub_id.id, 10)} disabled={hub_id.id === 0}>
                                    {/* eslint-disable-next-line camelcase */}
                                    {hub_id.name}
                                  </MenuItem>
                                )
                              )
                            }
                          </Select>
                        </>
                      )}
                    />
                    {errors.hub_id && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.hub_id.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                {!user && (
                  <>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                      <FormControl fullWidth sx={{ mb: 4 }}>
                        <Controller
                          name='collect_price'
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { onChange, onBlur } }) => (
                            <>
                              <InputLabel>قیمت جمع آوری</InputLabel>
                              <Select
                                type='number'
                                onBlur={onBlur}
                                id='demo-multiple-name'
                                onChange={onChange}
                                input={<OutlinedInput label='Name' />}
                                disabled={showUser}
                                error={Boolean(errors.collect_price)}
                              >
                                {collectPrices.length === 0 ? (
                                  <MenuItem value={undefined}>هاب موجود نیست</MenuItem>
                                ) : (
                                  collectPrices.map(price => (
                                    <MenuItem key={price.id} value={parseInt(price.id, 10)} disabled={price.id === 0}>
                                      {price.title}({price.price}ریال)
                                    </MenuItem>
                                  ))
                                )}
                              </Select>
                            </>
                          )}
                        />
                        {errors.collect_price && (
                          <FormHelperText sx={{ color: 'error.main' }}>{errors.collect_price.message}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                      <FormControl fullWidth sx={{ mb: 4 }}>
                        <Controller
                          name='distribution_price'
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { onChange, onBlur } }) => (
                            <>
                              <InputLabel>قیمت توزیع</InputLabel>
                              <Select
                                type='number'
                                onBlur={onBlur}
                                id='demo-multiple-name'
                                onChange={onChange}
                                input={<OutlinedInput label='Name' />}
                                disabled={showUser}
                                error={Boolean(errors.distribution_price)}
                              >
                                {distributionPrices.length === 0 ? (
                                  <MenuItem value={undefined}> موجود نیست</MenuItem>
                                ) : (
                                  distributionPrices.map(price => (
                                    <MenuItem key={price.id} value={parseInt(price.id, 10)} disabled={price.id === 0}>
                                      {price.title}({price.price}ریال)
                                    </MenuItem>
                                  ))
                                )}
                              </Select>
                            </>
                          )}
                        />
                        <FormHelperText>این قیمت از قیمت های هاب مقصد برداشته می شود.</FormHelperText>
                        {errors.distribution_price && (
                          <FormHelperText sx={{ color: 'error.main' }}>
                            {errors.distribution_price.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                  </>
                )}

                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='paymentMethod'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <Autocomplete
                          onBlur={onBlur}
                          select
                          options={paymentMethod}
                          onChange={(event, values) => onChange(values)}
                          value={value}
                          disableClearable
                          disabled={showUser}
                          renderInput={params => (
                            <TextField
                              /* eslint-disable-next-line react/jsx-props-no-spreading */
                              {...params}
                              label='نحوه پرداخت'
                              variant='outlined'
                              onChange={onChange}
                              error={Boolean(errors.paymentMethod)}
                            />
                          )}
                        />
                      )}
                    />
                    {errors.paymentMethod && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.paymentMethod.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormControl fullWidth>
                    <Controller
                      name='paymentType'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <Autocomplete
                          onBlur={onBlur}
                          select
                          options={paymentType}
                          onChange={(event, values) => onChange(values)}
                          value={value}
                          disableClearable
                          disabled={showUser}
                          renderInput={params => (
                            <TextField
                              /* eslint-disable-next-line react/jsx-props-no-spreading */
                              {...params}
                              label='نوع پرداخت'
                              variant='outlined'
                              onChange={onChange}
                              error={Boolean(errors.paymentType)}
                            />
                          )}
                        />
                      )}
                    />
                    {errors.paymentType && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.paymentType.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                {!user && (
                  <>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                      <FormControl fullWidth>
                        <Controller
                          fullWidth
                          name='discount_type'
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { value, onChange, onBlur } }) => (
                            <>
                              <InputLabel>نوع تخفیف</InputLabel>
                              <Select
                                label='نوع تخفیف'
                                value={value}
                                onBlur={onBlur}
                                onChange={onChange}
                                error={Boolean(errors.discount_type)}
                                disabled={showUser}
                              >
                                <MenuItem value>درصدی</MenuItem>
                                <MenuItem value={false}>کسر مقدار از مبلغ سفارش</MenuItem>
                              </Select>
                            </>
                          )}
                        />
                        {errors.discount_type && (
                          <FormHelperText sx={{ color: 'error.main' }}>{errors.discount_type.message}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                      <FormControl fullWidth>
                        <Controller
                          fullWidth
                          name='discount'
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { value, onChange, onBlur } }) => (
                            <TextField
                              label='مقدار تخفیف'
                              value={value}
                              onBlur={onBlur}
                              onChange={onChange}
                              error={Boolean(errors.discount)}
                              dir='ltr'
                              disabled={showUser}
                            />
                          )}
                        />
                        {errors.discount && (
                          <FormHelperText sx={{ color: 'error.main' }}>{errors.discount.message}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                  </>
                )}
              </Grid>
            </CardContent>
          </Card>
          {!showUser && (
            <>
              <Button
                size='large'
                type='submit'
                variant='contained'
                sx={{ m: 1 }}
                onClick={() => clickedOnSubmit('submit')}
              >
                ثبت سفارش
              </Button>
              <Button
                size='large'
                type='submit'
                variant='contained'
                color='info'
                sx={{ m: 1 }}
                onClick={() => clickedOnSubmit('calculate')}
              >
                محاسبه قیمت
              </Button>
            </>
          )}
          <NewCustomwr
            open={newSenderOpen}
            toggle={togglenewSenderOpen}
            setCustomer={setSender}
            setChange={setChangeorder}
          />
          <NewCustomwr
            open={newRecieverOpen}
            toggle={togglenewRecieverOpen}
            setCustomer={setReciever}
            setChange={setChangeorder}
          />
        </form>
      </Box>
    </Drawer>
  )
}

export default SidebarAddCourier
