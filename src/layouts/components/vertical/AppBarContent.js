// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import MenuIcon from 'mdi-material-ui/Menu'

// ** Components
import ModeToggler from '@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from '@core/layouts/components/shared-components/UserDropdown'

function AppBarContent(props) {
  // ** Props
  const {hidden, settings, saveSettings, toggleNavVisibility} = props

  return (
    <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <Box className='actions-left' sx={{mr: 2, display: 'flex', alignItems: 'center'}}>
        {hidden ? (
          <IconButton color='inherit' sx={{ml: -2.75}} onClick={toggleNavVisibility}>
            <MenuIcon/>
          </IconButton>
        ) : null}
      </Box>
      <Box className='actions-right' sx={{display: 'flex', alignItems: 'center'}}>
        <ModeToggler settings={settings} saveSettings={saveSettings}/>
        {/* <NotificationDropdown settings={settings} /> */}
        <UserDropdown settings={settings}/>
      </Box>
    </Box>
  )
}

export default AppBarContent
