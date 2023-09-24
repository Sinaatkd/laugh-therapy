import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameDTO } from '../DTOs/game.dto';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private ballonGame = new GameDTO("بادکنک ها", "هر شخصیت کارتونی که صداشو میشنوی توی بادکنک ها پیدا کن", "./assets/images/balloons.jpg", '/balloons');
  private destroyBadCell = new GameDTO("سلول های بد", "سلول های قهوه ای رو تیر بارون کن.", "./assets/images/bad-cell.jpg", '/destroy-bad-cell');
  private dannysNurse = new GameDTO("پرستار دنی کوچولو", "دنی کوچولو رو خوشحال و خندان کن", "./assets/images/dannys-nurse.jpg", '/dannys-nurse');
  private phone = new GameDTO("تلفن بازی", "منتظر بمون تا کاراکتر انیمیشن ها بهت زنگ بزنن", "./assets/images/phone.jpg", '/phone');
  
  private _games: BehaviorSubject<Array<GameDTO>> = new BehaviorSubject<Array<GameDTO>>([
    this.phone,
    this.dannysNurse,
    this.destroyBadCell,
    this.ballonGame,
  ]);

  get games() {
    return this._games;
  }
  constructor() { }
}
