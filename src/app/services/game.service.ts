import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameDTO } from '../DTOs/game.dto';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private ballonGame = new GameDTO("بادکنک ها", "هر شخصیت کارتونی که صداشو میشنوی توی بادکنک ها پیدا کن", "./assets/images/balloons.jpg", '/balloons');
  
  private _games: BehaviorSubject<Array<GameDTO>> = new BehaviorSubject<Array<GameDTO>>([
    this.ballonGame, 
  ]);

  get games() {
    return this._games;
  }
  constructor() { }
}
