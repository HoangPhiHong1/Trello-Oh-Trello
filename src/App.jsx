import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'

function App() {

  return (
    <>
      <div>Web 1 Web</div>
      <Button variant='contained'>Hello World</Button> <br/>
      <Button variant='outlined'>Xin Chao</Button>  <br />
      <Button variant='text'>Chao Xin</Button>  <br />
      <HomeIcon sx={{ color: pink [500] }}/>

    </>
  )
}

export default App
