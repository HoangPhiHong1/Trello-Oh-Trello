import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { useState, useEffect } from 'react'
import { DndContext, PointerSensor, useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'

function BoardContent({ board }) {
  const pointerSensor = useSensor(PointerSensor, { activationConstraint:{ distance: 10 } })
  const mouseSensor = useSensor(MouseSensor, { activationConstraint:{ distance: 10 } })
  const touchSensor = useSensor(TouchSensor, { activationConstraint:{ delay: 250, tolerance: 500 } })

  const mySensors = useSensors(pointerSensor)

  const [orderedColumns, setOrderedColumns] = useState([])

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = (event) => {
    console.log('handleDragEnd: ', event)
    const { active, over } = event

    if (!over) return

    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
      const newIndex = orderedColumns.findIndex(c => c._id === over.id)
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
      // console.log('dndOrderedColumns: ', dndOrderedColumns)
      // console.log('dndOrderedColumnsIds: ', dndOrderedColumnsIds)
      setOrderedColumns(dndOrderedColumns)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={mySensors}>
      <Box sx= {{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height:(theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}>
        <ListColumns columns = {orderedColumns} />

      </Box>
    </DndContext>
  )
}

export default BoardContent