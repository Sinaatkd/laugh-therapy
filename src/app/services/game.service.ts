import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameDTO } from '../DTOs/game.dto';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private ballonGame = new GameDTO("بادکنک ها", "هر شخصیت کارتونی که صداشو میشنوی توی بادکنک ها پیدا کن", "./assets/images/balloons.jpg", '/balloons');
  private destroyBadCell = new GameDTO("سلول های بد", "اینجا توضیحات بازیه", "./assets/images/bad-cell.jpg", '/destroy-bad-cell');
  private destroyBadCell2 = new GameDTO("پرستار دنی کوچولو", "اینجا توضیحات بازیه", "./assets/images/dannys-nurse.jpg", '/dannys-nurse');
  
  private _games: BehaviorSubject<Array<GameDTO>> = new BehaviorSubject<Array<GameDTO>>([
    this.destroyBadCell,
    this.ballonGame,
    this.destroyBadCell2,
  ]);

  get games() {
    return this._games;
  }
  constructor() { }
}
