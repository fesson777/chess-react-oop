import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'
import BlackLogo from '../../assets/black-queen.png'
import WhiteLogo from '../../assets/white-queen.png'

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo
    this.name = FigureNames.QUEEN
  }

  canMove(target: Cell): boolean {
    return true
  }
}
