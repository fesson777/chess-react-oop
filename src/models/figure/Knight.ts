import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'
import BlackLogo from '../../assets/black-knight.png'
import WhiteLogo from '../../assets/white-knight.png'

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo
    this.name = FigureNames.KNIGHT
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }

    const absX = Math.abs(this.cell.x - target.x)
    const absY = Math.abs(this.cell.y - target.y)

    return (absX === 1 && absY === 2) || (absX === 2 && absY === 1)
  }
}
