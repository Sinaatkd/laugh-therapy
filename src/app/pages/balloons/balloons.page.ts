import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
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
    private alertCtrl: AlertController
  ) {
  }

  ngOnInit() {
  }

  balloonBurst(balloonEl: HTMLElement, balloonIndex: number) {
    if (balloonEl.style.opacity !== '0') {
      const audio = new Audio('../../../assets/sounds/sounds-effect/Balloon-Blast-Sound-Effect.mp3');
      audio.play().then();
      this.counter += 1;
      balloonEl.style.opacity = '0';
      if (balloonIndex == this.fullBalloonIndex) {
        
      }
    }
  }
}
