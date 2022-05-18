import BoardComponent from './components/BoardComponent'
import './App.css'
import { useEffect, useState } from 'react'
import { Board } from './models/Board'

function App() {
  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    restartBoard()
  }, [])

  function restartBoard() {
    const newBoard = new Board()
    newBoard.initCells()
    setBoard(newBoard)
  }
  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  )
}

export default App
