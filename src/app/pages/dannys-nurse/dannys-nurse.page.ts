import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-dannys-nurse',
  templateUrl: './dannys-nurse.page.html',
  styleUrls: ['./dannys-nurse.page.scss'],
})
export class DannysNursePage implements OnInit {
  constructor(
    @Inject(DOCUMENT) document: Document,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
  ) {
    document.dir = 'ltr';
  }

  gameNumber = this.getRandomGameNumber(1, 2);

  ionViewDidLeave() {
    document.dir = 'rtl';
  }

  ngOnInit(): void { }

  getRandomGameNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  done(event: any) {
    const soundAddress = '../../../assets/sounds/sounds-effect/Win-Effect.mp3';
    const audio = new Audio(soundAddress)
    this.alertCtrl.create({
      message: 'تو تونستی دنی رو خوشحال کنی 🥳🥳',
      mode: 'ios',
      backdropDismiss: false,
      buttons: [
        {
          text: 'ادامه',
          handler: () => {
            this.resetGame();
            audio.pause();
          }
        },
        {
          text: 'بازگشت به صفحه اصلی',
          handler: () => {
            this.navCtrl.navigateBack('/home');
            audio.pause();
          }
        }
      ]
    }).then(alertEl => alertEl.present());
  }

  resetGame() {
    const oldGameNumber = this.gameNumber;
    while (oldGameNumber === this.gameNumber) {
      this.gameNumber = this.getRandomGameNumber(1, 4);
    }
  }
}
