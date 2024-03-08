import DashboardIcon from '@mui/icons-material/Dashboard'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { NoEncryption } from '@mui/icons-material'

const MENU_STYLES = {
  color:'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '2px',
  borderRadius: '4px',
  '.MuiSvgIcon-root':{
    color: 'white'
  },
  '&:hover':{
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1',
      paddingX: '2',
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
        <Chip
          sx={ MENU_STYLES }
          icon={<DashboardIcon />}
          label="Team Alpha"
          clickable
        />
        <Chip
          sx={ MENU_STYLES }
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx={ MENU_STYLES }
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={ MENU_STYLES }
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={ MENU_STYLES }
          icon={<FilterListIcon />}
          label="Filter"
          clickable
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon/>}
          sx={{
            color:'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={6}
          total={22}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0de' }
            }
          }}
        >
          <Tooltip>
            <Avatar alt='Me' src='https://i.pinimg.com/564x/28/5b/60/285b60bd12182d676582ce7006813c8d.jpg' />
          </Tooltip>
          <Tooltip>
            <Avatar alt='Me' src='https://shorturl.at/CNU26' />
          </Tooltip>
          <Tooltip>
            <Avatar alt='Me' src='https://shorturl.at/kmwEY' />
          </Tooltip>
          <Tooltip>
            <Avatar alt='Me' src='https://shorturl.at/kltY4' />
          </Tooltip>
          <Tooltip>
            <Avatar alt='Me' src='https://shorturl.at/swLT9' />
          </Tooltip>
          <Tooltip>
            <Avatar alt='Me' src='https://shorturl.at/fotz7' />
          </Tooltip>
          <Tooltip>
            <Avatar alt='Me' src='https://i.kym-cdn.com/entries/icons/facebook/000/041/742/cover3.jpg ' />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar