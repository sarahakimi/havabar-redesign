import React from 'react'
import Button from '@mui/material/Button'
import { Dialog, DialogTitle, DialogContentText, DialogActions, DialogContent } from '@mui/material'
import toast from 'react-hot-toast'
import { deliveryFromLogestic } from './requests'

function DeliveryFromLogestic({ open, setOpen, setChange, id }) {
  const handleClose = () => setOpen(false)

  const onSubmit = () => {
    toast.promise(
      deliveryFromLogestic(id).then(() => {
        setChange(true)
        handleClose()
      }),
      {
        loading: 'در حال ثبت',
        success: 'با موفقیت انجام شد',
        error: err => (err.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
      }
    )
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>تحویل سفارش به هاب مقصد</DialogTitle>
      <DialogContent>
        <DialogContentText>
          از تحویل سفارش {id} به هاب مقصد (هابی که این اکانت به آن تعلق دارد) اطمینان دارید؟
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>انصراف</Button>
        <Button onClick={onSubmit}>بله</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeliveryFromLogestic
