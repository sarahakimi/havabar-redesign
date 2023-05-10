import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {Button, Card, CardHeader} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import {Controller, useForm} from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {editData, fetchData} from "./requests";


const schema = yup.object().shape({
  "rent_level_code": yup.string().typeError("به درستی وارد نمایید"),
  "rent_chapter_code": yup.string().typeError("به درستی وارد نمایید"),
  "rent_explain": yup.string().typeError("به درستی وارد نمایید"),
  "stamp_level_code": yup.string().typeError("به درستی وارد نمایید"),
  "stamp_chapter_code": yup.string().typeError("به درستی وارد نمایید"),
  "stamp_explain": yup.string().typeError("به درستی وارد نمایید"),
  "packaging_level_code": yup.string().typeError("به درستی وارد نمایید"),
  "packaging_chapter_code": yup.string().typeError("به درستی وارد نمایید"),
  "packaging_explain": yup.string().typeError("به درستی وارد نمایید"),
  "collect_level_code": yup.string().typeError("به درستی وارد نمایید"),
  "collect_chapter_code": yup.string().typeError("به درستی وارد نمایید"),
  "collect_explain": yup.string().typeError("به درستی وارد نمایید"),
  "distribution_level_code": yup.string().typeError("به درستی وارد نمایید"),
  "distribution_chapter_code": yup.string().typeError("به درستی وارد نمایید"),
  "distribution_explain": yup.string().typeError("به درستی وارد نمایید"),
  "origin_level_code": yup.string().typeError("به درستی وارد نمایید"),
  "origin_chapter_code": yup.string().typeError("به درستی وارد نمایید"),
  "origin_explain": yup.string().typeError("به درستی وارد نمایید"),
  "goal_level_code": yup.string().typeError("به درستی وارد نمایید"),
  "goal_chapter_code": yup.string().typeError("به درستی وارد نمایید"),
  "goal_explain": yup.string().typeError("به درستی وارد نمایید"),
  "discount_level_code": yup.string().typeError("به درستی وارد نمایید"),
  "discount_chapter_code": yup.string().typeError("به درستی وارد نمایید"),
  "discount_explain": yup.string().typeError("به درستی وارد نمایید"),
  "maliat_level_code": yup.string().typeError("به درستی وارد نمایید"),
  "maliat_chapter_code": yup.string().typeError("به درستی وارد نمایید"),
  "maliat_explain": yup.string().typeError("به درستی وارد نمایید"),
  "avarez_level_code": yup.string().typeError("به درستی وارد نمایید"),
  "avarez_chapter_code": yup.string().typeError("به درستی وارد نمایید"),
  "avarez_explain": yup.string().typeError("به درستی وارد نمایید"),
  "insurance_level_code": yup.string().typeError("به درستی وارد نمایید"),
  "insurance_chapter_code": yup.string().typeError("به درستی وارد نمایید"),
  "insurance_explain": yup.string().typeError("به درستی وارد نمایید"),
  "other_level_code": yup.string().typeError("به درستی وارد نمایید"),
  "other_chapter_code": yup.string().typeError("به درستی وارد نمایید"),
  "other_explain": yup.string().typeError("به درستی وارد نمایید"),
  "rond_level_code": yup.string().typeError("به درستی وارد نمایید"),
  "rond_chapter_code": yup.string().typeError("به درستی وارد نمایید"),
  "rond_explain": yup.string().typeError("به درستی وارد نمایید"),

})

function ACLPage() {
  const [change, setChange] = useState(false)

  const defaultValues = {
    "rent_level_code": "",
    "rent_chapter_code": "",
    "rent_explain": "",
    "stamp_level_code": "",
    "stamp_chapter_code": "",
    "stamp_explain": "",
    "packaging_level_code": "",
    "packaging_chapter_code": "",
    "packaging_explain": "",
    "collect_level_code": "",
    "collect_chapter_code": "",
    "collect_explain": "",
    "distribution_level_code": "",
    "distribution_chapter_code": "",
    "distribution_explain": "",
    "origin_level_code": "",
    "origin_chapter_code": "",
    "origin_explain": "",
    "goal_level_code": "",
    "goal_chapter_code": "",
    "goal_explain": "",
    "discount_level_code": "",
    "discount_chapter_code": "",
    "discount_explain": "",
    "maliat_level_code": "",
    "maliat_chapter_code": "",
    "maliat_explain": "",
    "avarez_level_code": "",
    "avarez_chapter_code": "",
    "avarez_explain": "",
    "insurance_level_code": "",
    "insurance_chapter_code": "",
    "insurance_explain": "",
    "other_level_code": "",
    "other_chapter_code": "",
    "other_explain": "",
    "rond_level_code": "",
    "rond_chapter_code": "",
    "rond_explain": "",
  }

  const {
    control,
    reset,
    handleSubmit, formState: {errors}
  } = useForm({
    defaultValues, mode: 'onChange', resolver: yupResolver(schema)
  })


  useEffect(() => {
    fetchData().then(response => {
      if (response.data === null) {
        const errorMessage = "خطایی رخ داده است"
        toast.error(errorMessage)
      } else reset(response.data)
    }).catch((err) => {
      const errorMessage = err?.response?.data?.message ? err.response.data.message : "خطایی رخ داده است"
      toast.error(errorMessage)
    })
    setChange(false)

  }, [change])

  const onSubmit = data => {
    toast.promise(editData(data)
        .then(() => {
          setChange(true)
        })
      , {
        loading: 'در حال ذخیره',
        success: 'ذخیره شد',
        error: (err) => err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داده است.",
      })

  }


  return (
    <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}
          style={{width: "100% ", padding: 0, margin: 0}}>
      <Card sx={{width: "100%", mb: 4}}>
        <CardHeader title="ارتباط با مالی"/>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center", backgroundColor: '#EEEEEE'}}/>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center", backgroundColor: '#EEEEEE'}}>
              کد سطح
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center", backgroundColor: '#EEEEEE'}}>
              کد سرفصل
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center", backgroundColor: '#EEEEEE'}}>
              توضیحات
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              مبلغ کرایه
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='rent_level_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.rent_level_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.rent_level_code && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.rent_level_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='adding_price_header_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.rent_chapter_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.rent_chapter_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.rent_chapter_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='rent_explain'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.rent_explain)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.rent_explain && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.rent_explain.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              هزینه تمبر
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='stamp_level_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.stamp_level_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.stamp_level_code && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.stamp_level_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='stamp_chapter_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.stamp_chapter_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.stamp_chapter_code && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.stamp_chapter_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='stamp_explain'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.stamp_explain)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.stamp_explain && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.stamp_explain.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              هزینه بسته بندی
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='packaging_level_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.packaging_level_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.packaging_level_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.packaging_level_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='packaging_chapter_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.packaging_chapter_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.packaging_chapter_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.packaging_chapter_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='packaging_explain'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.packaging_explain)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.packaging_explain && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.packaging_explain.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              هزینه جمع آوری
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='collect_level_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.collect_level_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.collect_level_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.collect_level_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='collect_chapter_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.collect_chapter_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.collect_chapter_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.collect_chapter_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='collect_explain'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.collect_explain)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.collect_explain && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.collect_explain.message}</FormHelperText>)}
              </FormControl>
            </Grid>

            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              هزینه نوزیع
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='distribution_level_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.distribution_level_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.distribution_level_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.distribution_level_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='distribution_chapter_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.distribution_chapter_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.distribution_chapter_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.distribution_chapter_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='distribution_explain'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.distribution_explain)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.distribution_explain && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.distribution_explain.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              سایز هزینه های مبدا
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='origin_level_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.origin_level_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.origin_level_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.origin_level_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='origin_chapter_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.origin_chapter_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.origin_chapter_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.origin_chapter_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='origin_explain'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.origin_explain)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.origin_explain && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.origin_explain.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              سایر هزینه های مقصد
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='goal_level_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.goal_level_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.goal_level_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.goal_level_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='goal_chapter_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.goal_chapter_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.goal_chapter_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.goal_chapter_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='goal_explain'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.goal_explain)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.goal_explain && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.goal_explain.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              تخفیف
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='discount_level_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.discount_level_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.discount_level_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.discount_level_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='discount_chapter_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.discount_chapter_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.discount_chapter_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.discount_chapter_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='discount_explain'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.discount_explain)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.discount_explain && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.discount_explain.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              مالیات ارزش افزوده (مالیات)
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='maliat_level_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.maliat_level_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.maliat_level_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.maliat_level_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='maliat_chapter_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.maliat_chapter_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.maliat_chapter_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.maliat_chapter_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='maliat_explain'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.maliat_explain)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.maliat_explain && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.maliat_explain.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              مالیات ارزش افزوده (عوارض)
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='avarez_level_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.collect_level_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.avarez_level_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.avarez_level_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='avarez_chapter_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.avarez_chapter_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.avarez_chapter_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.avarez_chapter_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='avarez_explain'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.avarez_explain)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.avarez_explain && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.avarez_explain.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              بیمه
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='insurance_level_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.insurance_level_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.insurance_level_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.insurance_level_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='insurance_chapter_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.insurance_chapter_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.insurance_chapter_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.insurance_chapter_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='insurance_explain'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.insurance_explain)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.insurance_explain && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.insurance_explain.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              سایر
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='other_level_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.other_level_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.other_level_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.other_level_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='other_chapter_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.other_chapter_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.other_chapter_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.other_chapter_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='other_explain'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.other_explain)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.other_explain && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.other_explain.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              رند بارنامه
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='rond_level_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.rond_level_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.rond_level_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.rond_level_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='rond_chapter_code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.rond_chapter_code)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.rond_chapter_code && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.rond_chapter_code.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={3} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='rond_explain'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.rond_explain)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.rond_explain && (
                  <FormHelperText
                    sx={{color: 'error.main'}}>{errors.rond_explain.message}</FormHelperText>)}
              </FormControl>
            </Grid>


            <Button type="submit" variant="contained" sx={{width: "100%", mt: 2}}>ذخیره تغییرات</Button>
          </Grid>

        </CardContent>
      </Card>
    </form>
  )
}


ACLPage.acl = {
  action: 'read',
  subject: 'every-page'
}


export default ACLPage
