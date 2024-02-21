import Container from '@mui/material/Container'
import AppBar from '../../components/AppBar/index.jsx'
import BoardBar from './BoardBar/index.jsx'
import BoardContent from './BoardContent/index.jsx'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx = {{ height: '100vh' }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}

export default Board