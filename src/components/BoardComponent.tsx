import React, { Fragment, useEffect, useState } from 'react'
import { Board } from '../models/Board'
import { Cell } from '../models/Cell'
import { Player } from '../models/Player'
import CellComponent from './CellComponent'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
  currentPlayer: Player | null
  swapPlayer: () => void
}

export default function BoardComponent({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}: BoardProps) {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  function handleclick(cell: Cell) {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell?.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell)
      swapPlayer()
      setSelectedCell(null)
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell)
      }
    }
  }

  useEffect(() => {
    highlightCells() // eslint-disable-next-line
  }, [selectedCell])

  function highlightCells() {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
    <div>
      <h3>Текущий игрок {currentPlayer?.color}</h3>
      <div className={'board'}>
        {board.cells.map((row, index) => (
          <Fragment key={index}>
            {row.map((cell) => {
              return (
                <CellComponent
                  cell={cell}
                  key={cell.id}
                  onclick={handleclick}
                  selected={
                    cell.x === selectedCell?.x && cell.y === selectedCell?.y
                  }
                />
              )
            })}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
