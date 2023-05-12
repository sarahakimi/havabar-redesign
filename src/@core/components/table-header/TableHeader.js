import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import React from 'react'
import { Typography } from '@mui/material'
import ExportButton from '../export-button/export-button'

function TableHeader({ toggle, data, headers, api, name, noAdd, children, noExport, withTitle }) {
  return (
    <Box sx={{ p: 5, pb: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box>
        {!noExport && <ExportButton api={api} headers={headers} data={data} />}
        {withTitle && <Typography variant='h6'>{name}</Typography>}
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2 }}>
        {children}
        {!noAdd && (
          <Button sx={{ mb: 2 }} onClick={toggle} variant='contained'>
            افزودن {name}
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default TableHeader
