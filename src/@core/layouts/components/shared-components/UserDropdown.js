// ** React Imports
import { useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CogOutline from 'mdi-material-ui/CogOutline'
import LogoutVariant from 'mdi-material-ui/LogoutVariant'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import { useAuth } from 'hooks/useAuth'
import toast from 'react-hot-toast'

// ** Styled Components
const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}))

function UserDropdown(props) {
  // ** Props
  const { settings } = props

  // ** States
  const [anchorEl, setAnchorEl] = useState(null)

  // ** Hooks
  const router = useRouter()
  const { logout } = useAuth()
  const { user } = useAuth()

  // ** Vars
  const { direction } = settings

  const handleDropdownOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = url => {
    if (url) {
      router.push(url)
    }
    setAnchorEl(null)
  }

  const handleLogout = () => {
    toast.promise(logout(), {
      loading: 'در حال خروج ',
      success: 'خارج شدید',
      error: err => {
        handleDropdownClose()

        return err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.'
      }
    })
  }

  const styles = {
    py: 2,
    px: 4,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: 'text.primary',
    textDecoration: 'none',
    '& svg': {
      fontSize: '1.375rem',
      color: 'text.secondary'
    }
  }
  const auth = useAuth()

  return (
    <>
      <Badge
        overlap='circular'
        onClick={handleDropdownOpen}
        sx={{ ml: 2, cursor: 'pointer' }}
        badgeContent={<BadgeContentSpan />}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <Avatar alt={user.name} onClick={handleDropdownOpen} sx={{ width: 40, height: 40 }}>
          {user.name.slice(0, 2)}
        </Avatar>
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 230, marginTop: 4 } }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: direction === 'ltr' ? 'right' : 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: direction === 'ltr' ? 'right' : 'left'
        }}
      >
        <Box sx={{ pt: 2, pb: 3, px: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Badge
              overlap='circular'
              badgeContent={<BadgeContentSpan />}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
            >
              <Avatar alt={user.name} sx={{ width: '2.5rem', height: '2.5rem' }}>
                {user.name.slice(0, 2)}
              </Avatar>
            </Badge>
            <Box
              sx={{
                display: 'flex',
                marginLeft: 3,
                alignItems: 'flex-start',
                flexDirection: 'column'
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>{user.name} </Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ mt: 0, mb: 1 }} />
        {!auth.user.isSuperAdmin && (
          <>
            <MenuItem
              sx={{ p: 0 }}
              onClick={() => {
                handleDropdownClose()
                router.push('/account-settings')
              }}
            >
              <Box sx={styles}>
                <AccountOutline sx={{ marginRight: 2 }} />
                پروفایل کاربری
              </Box>
            </MenuItem>
            <Divider />
            <MenuItem
              sx={{ p: 0 }}
              onClick={() => {
                handleDropdownClose()
                router.push('/settings')
              }}
            >
              <Box sx={styles}>
                <CogOutline sx={{ marginRight: 2 }} />
                تنظیمات
              </Box>
            </MenuItem>
            <Divider />
          </>
        )}
        <MenuItem sx={{ py: 2 }} onClick={handleLogout}>
          <LogoutVariant
            sx={{
              marginRight: 2,
              fontSize: '1.375rem',
              color: 'text.secondary'
            }}
          />
          خروج
        </MenuItem>
      </Menu>
    </>
  )
}

export default UserDropdown
