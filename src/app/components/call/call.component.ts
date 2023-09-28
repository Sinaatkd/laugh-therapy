import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss'],
})
export class CallComponent implements OnInit {

  characters = [
    {
      id: 0,
      image: '../../../assets/images/cartoon-character/0.png',
      text: 'باب اسفنجی'
    },
    {
      id: 1,
      image: '../../../assets/images/cartoon-character/1.png',
      text: 'پاتریک'
    },
    {
      id: 2,
      image: '../../../assets/images/cartoon-character/2.png',
      text: 'پسر عمه زا'
    },
    {
      id: 3,
      image: '../../../assets/images/cartoon-character/3.png',
      text: 'پلنگ صورتی'
    },
    {
      id: 4,
      image: '../../../assets/images/cartoon-character/4.png',
      text: 'پت و مت'
    },
    {
      id: 5,
      image: '../../../assets/images/cartoon-character/5.png',
      text: 'میکی موس'
    },
    {
      id: 6,
      image: '../../../assets/images/cartoon-character/6.png',
      text: 'میگ میگ'
    },
    {
      id: 7,
      image: '../../../assets/images/cartoon-character/7.png',
      text: 'بچه'
    },
    {
      id: 8,
      image: '../../../assets/images/cartoon-character/8.png',
      text: 'تام و جری'
    },
    {
      id: 9,
      image: '../../../assets/images/cartoon-character/9.png',
      text: 'کلاه قرمزی'
    },
  ]

  characterIndex = Math.floor(Math.random() * environment.CARTOON_CHARACTERS_COUNT);
  selectedCharacter = this.characters.find(character => character.id === this.characterIndex);
  musicName = this.getRandomHappyMusicName();

  status: 'unknown' | 'answer' | 'reject' = 'unknown';

  offsetX = 0;

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }


  floatingAnswerButtonTouch(event: TouchEvent, elementId: string) {
    const El = document.getElementById(elementId)!;
    const rect = El.getBoundingClientRect()!
    const answerButton = document.getElementById('answer-button')!;
    const rejectButton = document.getElementById('reject-button')!;

    let initialX = 0;


    if (event.type === 'touchstart') {
      initialX = rect.x;

      this.offsetX = event.targetTouches[0].clientX


    } else if (event.type === 'touchmove') {

      const newX = event.targetTouches[0].clientX - this.offsetX

      El.style.transform = `translateX(${newX}px)`


    } else if (event.type === 'touchend') {
      if (answerButton.getBoundingClientRect().x + 30 > rect.x) {
        this.changeStatus('answer');
      }
      if (rejectButton.getBoundingClientRect().x - 30 < rect.x) {
        this.changeStatus('reject');
        this.dismissCall();
      }
      El.style.transform = `translateX(${initialX}px)`
    }
  }

  dismissCall() {
    this.modalCtrl.dismiss().then();
  }

  getRandomMusicNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomHappyMusicName() {
    const getRandomMusicNumber = this.getRandomMusicNumber(1, 7);
    const musicName = `happy-music${getRandomMusicNumber}.mp3`
    const path = '../../../assets/sounds/happy-music/'
    return path + musicName
  }

  musicEnded() {
    this.modalCtrl.dismiss().then();
  }

  changeStatus(newStatus: 'unknown' | 'answer' | 'reject') {
    this.status = newStatus;
    if (newStatus === 'reject') {
      this.dismissCall();
    }
  }
}
