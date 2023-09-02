import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { BalloonWinComponent } from 'src/app/components/balloon-win/balloon-win.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-balloons',
  templateUrl: './balloons.page.html',
  styleUrls: ['./balloons.page.scss'],
})
export class BalloonsPage implements OnInit {
  balloonsIndex = [...Array(environment.BALLOON_COUNT).keys()];
  fullBalloonIndex = Math.floor(Math.random() * environment.BALLOON_COUNT)
  counter = 0;

  constructor(
    private modalCtrl: ModalController
  ) {
  }

  ngOnInit() { }

  balloonBurst(balloonEl: HTMLElement, balloonIndex: number) {
    if (balloonEl.style.opacity !== '0') {
      const audio = new Audio('../../../assets/sounds/sounds-effect/Balloon-Blast-Sound-Effect.mp3');
      audio.play().then();
      this.counter += 1;
      balloonEl.style.opacity = '0';
      if (balloonIndex == this.fullBalloonIndex) {
        this.openBalloonWinModal();
      }
    }
  }

  openBalloonWinModal() {
    this.modalCtrl.create({
      component: BalloonWinComponent,
      breakpoints: [0.4, 0.5, 0.6, 0.7],
      initialBreakpoint: 0.4,
      backdropDismiss: false,
      mode: 'ios',
      componentProps: {
        counter: this.counter
      }
    }).then(modalEl => {
      modalEl.present();
    })
  }
}
