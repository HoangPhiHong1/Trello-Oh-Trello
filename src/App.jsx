import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'

function App() {

  return (
    <>
      <div>Web 1 Web</div>
      <Typography variant='body2' color='text.secondary'>Test Typography</Typography>
      <Button variant='contained'>Hello World</Button> <br/>
      <Button variant='outlined'>Xin Chao</Button>  <br />
      <Button variant='text'>Chao Xin</Button>  <br />
      <HomeIcon sx={{ color: pink [500] }}/>

    </>
  )
}

export default App
