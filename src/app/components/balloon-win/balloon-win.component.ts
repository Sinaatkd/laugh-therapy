import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-balloon-win',
  templateUrl: './balloon-win.component.html',
  styleUrls: ['./balloon-win.component.scss'],
})
export class BalloonWinComponent implements OnInit {

  @Input('counter') counter?: number;
  @Input('characterImage') characterImage?: string;
  audio = new Audio('../../../assets/sounds/sounds-effect/Win-Effect.mp3');

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.audio.play();
  }

  continueGame() {
    this.modalCtrl.dismiss().then(_ => {
      this.audio.pause();
    })
  }
}
