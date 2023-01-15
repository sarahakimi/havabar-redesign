import React, {useEffect, useState} from "react"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'


import http from "services/http";
import {CSVDownload} from "react-csv";
import ExportVariant from "mdi-material-ui/ExportVariant";


function TableHeader({toggle, sortModel, setLoading, setAlert}) {
  const [data, setData] = useState([])
  const [initiateDownload, setInitiateDownload] = useState(false)

  const headers = [{key: "id", label: "شناسه"}, {key: "name", label: "تام هاب"}, {
    key: "telephone",
    label: "شماره تلفن"
  }, {key: "fax", label: "فکس"}, {key: "provence", label: "استان"}, {key: "city", label: "شهر"},];


  useEffect(() => {
    if (data.length) {
      setInitiateDownload(true)
    }
  }, [data])

  useEffect(() => {
    // Enables user to download data more than once
    if (initiateDownload) {
      setInitiateDownload(false)
    }
  }, [initiateDownload])

  const fetchCsvData = () => {
    setLoading(true)
    setInitiateDownload(false)
    http
      .get('hub/company/all', sortModel, {
        Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
      })
      .then(response => {
        setData(response.data)
        setLoading(false)
        setAlert({open: true, message: "با موفقیت انجام شد", variant: "success"})
      })
      .catch((err) => {
        setLoading(false)
        setAlert({open: true, message: err.response.data.message, variant: "error"})
      })
  }

  return (
    <Box sx={{p: 5, pb: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between'}}>
      <Button sx={{mr: 4, mb: 2}} color='secondary' variant='outlined' onClick={fetchCsvData}
              startIcon={<ExportVariant fontSize='small'/>}>
        خروجی
      </Button>
      {initiateDownload && <CSVDownload data={data} headers={headers} target="_blank"/>}

      <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>
        <Button sx={{mb: 2}} onClick={toggle} variant='contained'>
          افزودن هاب
        </Button>
      </Box>
    </Box>)
}

export default TableHeader
