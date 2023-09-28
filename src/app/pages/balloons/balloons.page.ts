import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { BalloonWinComponent } from 'src/app/components/balloon-win/balloon-win.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-balloons',
  templateUrl: './balloons.page.html',
  styleUrls: ['./balloons.page.scss'],
})
export class BalloonsPage implements OnInit {
  characters = [
    {
      id: 0,
      image: '../../../assets/images/cartoon-character/0.png',
      sound: '../../../assets/sounds/characters-sound/0.mp3',
    },
    {
      id: 1,
      image: '../../../assets/images/cartoon-character/1.png',
      sound: '../../../assets/sounds/characters-sound/1.mp3',
    },
    {
      id: 2,
      image: '../../../assets/images/cartoon-character/2.png',
      sound: '../../../assets/sounds/characters-sound/2.mp3',
    },
    {
      id: 3,
      image: '../../../assets/images/cartoon-character/3.png',
      sound: '../../../assets/sounds/characters-sound/3.mp3',
    },
    {
      id: 4,
      image: '../../../assets/images/cartoon-character/4.png',
      sound: '../../../assets/sounds/characters-sound/4.mp3',
    },
    {
      id: 5,
      image: '../../../assets/images/cartoon-character/5.png',
      sound: '../../../assets/sounds/characters-sound/5.mp3',
    },
    {
      id: 6,
      image: '../../../assets/images/cartoon-character/6.png',
      sound: '../../../assets/sounds/characters-sound/6.mp3',
    },
    {
      id: 7,
      image: '../../../assets/images/cartoon-character/7.png',
      sound: '../../../assets/sounds/characters-sound/7.mp3',
    },
    {
      id: 8,
      image: '../../../assets/images/cartoon-character/8.png',
      sound: '../../../assets/sounds/characters-sound/8.mp3',
    },
    {
      id: 9,
      image: '../../../assets/images/cartoon-character/9.png',
      sound: '../../../assets/sounds/characters-sound/9.mp3',
    },


  ]
  balloonsIndex = [...Array(environment.BALLOON_COUNT).keys()];
  correctBalloonIndex = Math.floor(Math.random() * environment.BALLOON_COUNT);
  counter = 0;
  selectedCharacter = this.characters.find(character => character.id === this.correctBalloonIndex);
  @ViewChild('CharacterSoundAudioEl') CharacterSoundAudioEl?: ElementRef<HTMLAudioElement>

  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  balloonBurst(balloonEl: HTMLElement, balloonIndex: number) {
    if (balloonEl.style.opacity !== '0') {
      balloonEl.style.opacity = '0';
      this.counter += 1;
      if (balloonIndex == this.correctBalloonIndex) {
        this.stopCharacterSound();
        this.openBalloonWinModal();
      } else {
        const audio = new Audio('../../../assets/sounds/sounds-effect/Wrong-Shot-Effect.mp3');
        audio.play().then();
      }
    }
  }

  async openBalloonWinModal() {
    const winModal = await this.modalCtrl.create({
      component: BalloonWinComponent,
      breakpoints: [0.4, 0.5, 0.6, 0.7],
      initialBreakpoint: 0.7,
      backdropDismiss: false,
      mode: 'ios',
      componentProps: {
        counter: this.counter,
        characterImage: this.selectedCharacter?.image
      }
    })
    winModal.onDidDismiss().then((data) => {
      this.resetGame();
    })
    return await winModal.present();
  }

  stopCharacterSound() {
    this.CharacterSoundAudioEl?.nativeElement.pause();
  }

  backToHomePage() {
    this.stopCharacterSound();
    this.navCtrl.navigateBack('/home');
  }

  getCharacterImageByIndex(balloonIndex: number) {
    return this.characters.find(character => character.id === balloonIndex)?.image;
  }

  resetGame() {
    const balloons = document.getElementsByClassName('balloon');
    for (let i = 0; i < balloons.length; i++) {
      const el = balloons[i] as HTMLElement;
      el.style.opacity = '1';
    }
    this.correctBalloonIndex = Math.floor(Math.random() * environment.BALLOON_COUNT);
    this.selectedCharacter = this.characters.find(character => character.id === this.correctBalloonIndex);
    this.counter = 0;
    this.CharacterSoundAudioEl?.nativeElement.setAttribute('src', this.selectedCharacter!.sound);
  }
}
