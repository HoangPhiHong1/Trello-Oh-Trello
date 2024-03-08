import AttachmentIcon from '@mui/icons-material/Attachment'
import GroupIcon from '@mui/icons-material/Group'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

function TrelloCard({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <Card sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset'
      }}>
        <CardContent sx={{
          p: 1.5,
          '&:last-child': { p:1.5 }
        }} >
          <Typography>Card test 01</Typography>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://shorturl.at/RSVY2"
        title="hello"
      />
      <CardContent sx={{
        p: 1.5,
        '&:last-child': { p:1.5 }
      }} >
        <Typography>Say Hello World</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }} >
        <Button size="small" startIcon={<GroupIcon />}>20</Button>
        <Button size="small" startIcon={<ModeCommentIcon />}>15</Button>
        <Button size="small" startIcon={<AttachmentIcon />}>10</Button>
      </CardActions>
    </Card>
  )
}

export default TrelloCard