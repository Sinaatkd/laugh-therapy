import { Component } from '@angular/core';
import { GameService } from '../services/game.service';
import { GameDTO } from '../DTOs/game.dto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  games: GameDTO[] = [];

  constructor(
    private gameService: GameService
  ) {}

  ionViewDidEnter() {
    this.games = this.gameService.games.value    
  }
}
