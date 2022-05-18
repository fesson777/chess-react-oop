import { Cell } from '../models/Cell'

interface CellProps {
  cell: Cell
  selected: boolean
  onclick: (cell: Cell) => void
}

export default function CellComponent({ cell, selected, onclick }: CellProps) {
  function handleClick() {
    onclick(cell)
  }
  return (
    <div
      className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
      onClick={handleClick}
      style={{ background: cell.available && cell.figure ? 'green' : '' }}
    >
      {cell.available && !cell.figure && <div className={'available'} />}
      {cell.figure?.logo && <img src={cell.figure.logo} alt="figure" />}
    </div>
  )
}
