import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-balloon-win',
  templateUrl: './balloon-win.component.html',
  styleUrls: ['./balloon-win.component.scss'],
})
export class BalloonWinComponent implements OnInit {

  @Input('counter') counter?: number;
  randomImageNumber = Math.floor(Math.random() * 10);
  imageAddress = '../../../assets/images/cartoon-character/'
  randomImageName = `${this.randomImageNumber}.png`;
  audio = new Audio('../../../assets/sounds/sounds-effect/Win-Effect.mp3');

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.audio.play();
  }

  backToHomePage() {
    this.modalCtrl.dismiss().then(_ => {
      this.navCtrl.navigateBack('/').then();
      this.audio.pause();
    })
  }
}
