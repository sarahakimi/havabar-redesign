// ** MUI Imports
import { styled } from '@mui/material/styles'
import MuiBox from '@mui/material/Box'

// ** Icons Imports
import Alert from 'mdi-material-ui/Alert'
import CheckCircle from 'mdi-material-ui/CheckCircle'

// ** Util Imports
import { hexToRGBA } from '@core/utils/hex-to-rgba'

// Styled Box component
const Box = styled(MuiBox)(({ theme }) => ({
  width: 20,
  height: 20,
  borderWidth: 3,
  borderRadius: '50%',
  borderStyle: 'solid',
  borderColor: hexToRGBA(theme.palette.primary.main, 0.12)
}))

function StepperCustomDot(props) {
  // ** Props
  const { active, completed, error } = props
  if (error) {
    return <Alert sx={{ width: 20, height: 20, color: 'error.main', transform: 'scale(1.2)' }} />
  }
  if (completed) {
    return <CheckCircle sx={{ width: 20, height: 20, color: 'primary.main', transform: 'scale(1.2)' }} />
  }

  return (
    <Box
      sx={{
        ...(active && { borderColor: 'primary.main' })
      }}
    />
  )
}

export default StepperCustomDot
