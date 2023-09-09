import { Component, OnInit } from '@angular/core';
import { WeightedRandomPicker } from '../../utilities/randomWeightedNumber';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-destroy-bad-cell',
  templateUrl: './destroy-bad-cell.page.html',
  styleUrls: ['./destroy-bad-cell.page.scss'],
})
export class DestroyBadCellPage implements OnInit {

  // 0: means bad cell and 1 means good cell and 2 means destroyed
  characters: number[] = []
  deadCharacters: number[] = [];

  bulletCount = 10;
  isStartBlank = true;
  isGameFinished = false;
  isEndGameFunctionAlreadyChecked = false;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
  ) { }

  checkCharactersY() {
    if (!this.isGameFinished) {
      const ionContentOffsetHeight = document.getElementById('ionContent')?.offsetHeight;
      const characters = document.getElementById('charactersGrid');
      const charactersBottomPosition = characters?.getBoundingClientRect().bottom;
      if (charactersBottomPosition && charactersBottomPosition && (ionContentOffsetHeight! < charactersBottomPosition!)) {
        characters.classList.remove('charactersGrid')
        this.endGame(true);
      }
      setTimeout(() => {
        this.checkCharactersY()
      }, 800);
    }
  }



  ngOnInit() {
    this.characters = this.createRandomCharacter(16)
    setTimeout(() => {
      this.checkCharactersY()
    }, 800);
  }

  createRandomCharacter(length: number) {
    const items = [0, 1]
    const weight = [0.9, 0.1]
    const randomList: number[] = [];
    for (let i = 0; i < length; i++) {
      if (![0, 7, 8, 15].includes(i)) {
        const picker = new WeightedRandomPicker(items, weight)
        randomList.push(picker.pickRandom());
      } else {
        randomList.push(2);
      }
    }
    return randomList;
  }

  shoot() {
    if (this.bulletCount > 0) {
      this.bulletCount -= 1;
      const newBullet = this.createBullet();
      let checkTimes = 0;
      setTimeout(() => {
        this.checkBulletCollision(newBullet, checkTimes);
      }, 50)
    }
  }

  createBullet() {
    const spaceshipElRect = document.getElementById('spaceshipEl')?.getBoundingClientRect()!;
    const newBullet = document.createElement('div');
    newBullet.className = 'bullet';
    newBullet.style.left = spaceshipElRect.x + 22 + 'px'
    newBullet.style.top = spaceshipElRect.y - 15 + 'px'
    const ionContent = document.getElementById('ionContent');
    ionContent?.appendChild(newBullet);
    newBullet.onanimationend = (en) => {
      ionContent?.removeChild(newBullet);
      newBullet.remove();
    }
    return newBullet;
  }

  checkBulletCollision(bullet: HTMLDivElement, checkTime: number) {
    if (checkTime <= 14) {
      const bulletRect = bullet.getBoundingClientRect()!;
      const characters = document.getElementsByTagName('ion-img');
      for (let i = 0; i < characters.length; i++) {
        const character = characters[i].getBoundingClientRect()!;
        if (
          bulletRect.right >= character.left &&
          bulletRect.left <= character.right &&
          bulletRect.bottom >= character.top &&
          bulletRect.top <= character.bottom
        ) {
          let soundAddress = '';

          if (characters[i].src?.toString().indexOf('good') == -1) {
            this.bulletCount += 1;
            this.deadCharacters.push(0);
            soundAddress = '../../../assets/sounds/laugh/laugh2.mp3'
          } else {
            this.bulletCount -= 1;
            this.deadCharacters.push(1);
            soundAddress = '../../../assets/sounds/sounds-effect/Wrong-Shot-Effect.mp3'
          }

          bullet.remove();
          characters[i].remove();
          if (this.isAllBadCellDestroyed()) {
            this.endGame();
          }
          const audio = new Audio(soundAddress);
          audio.play();
          return;
        }
      }
      checkTime += 1;
      setTimeout(() => {
        this.checkBulletCollision(bullet, checkTime)
      }, 50);
    } else {
      if (this.bulletCount <= 0) {
        if (!this.isEndGameFunctionAlreadyChecked) {
          this.isEndGameFunctionAlreadyChecked = true;
          this.endGame();
        }
      }
    }
  }

  setAnimationMoveRightLeft(index: number) {
    if ([0, 1, 2, 3, 8, 9, 10, 11].includes(index)) {
      return true
    }
    return false;
  }

  moveLeft() {
    const spaceshipCol = document.getElementById('spaceshipColEl');
    if (spaceshipCol) {
      const spaceshipEl = document.getElementById('spaceshipEl');
      if (spaceshipEl?.getBoundingClientRect().left! > 0) {
        const currentRight = parseInt(spaceshipCol.style.right) || 0;
        spaceshipCol.style.right = currentRight + 10 + 'px';
      }
    }
  }

  moveRight() {
    const spaceshipCol = document.getElementById('spaceshipColEl');
    if (spaceshipCol) {
      const spaceshipEl = document.getElementById('spaceshipEl');
      if (spaceshipEl?.getBoundingClientRect().right! < window.innerWidth) {
        const currentRight = parseInt(spaceshipCol.style.right) || 0;
        spaceshipCol.style.right = currentRight - 10 + 'px';
      }
    }
  }

  isAllBadCellDestroyed() {
    const deadBadCellCount = this.deadCharacters.filter(character => character === 0).length
    const badCellCount = this.characters.filter(character => character === 0).length
    return deadBadCellCount >= badCellCount;
  }

  async endGame(isCellReach: boolean = false) {
    let message = '';
    let soundAddress = '';

    const characters = document.getElementById('charactersGrid')!;
    characters.classList.remove('characters')
    if (isCellReach) {
      message = 'سلول ها بهت رسیدن ☹️☹️. از رسیدن سلول ها به خودت جلوگیری کن'
      this.isGameFinished = true;
      soundAddress = '../../../assets/sounds/sounds-effect/Lose-Effect.mp3';
    } else if (!this.isAllBadCellDestroyed() && this.bulletCount <= 0) {
      this.isGameFinished = true;
      message = 'گلوله هات تموم شدن☹️☹️.'
      soundAddress = '../../../assets/sounds/sounds-effect/Lose-Effect.mp3';
    } else if (this.isAllBadCellDestroyed() && this.bulletCount >= 0) {
      message = 'تو تونستی همه سلول هارو از بین ببری 🥳🥳'
      this.isGameFinished = true;
      soundAddress = '../../../assets/sounds/sounds-effect/Win-Effect.mp3';
    }
    const loseEffect = new Audio(soundAddress)
    loseEffect.play();
    this.alertCtrl.create({
      message: message,
      mode: 'ios',
      backdropDismiss: false,
      buttons: [
        {
          text: 'دوباره',
          handler: () => {
            window.location.reload();
          }
        },
        {
          text: 'بازگشت به صفحه اصلی',
          handler: () => {
            this.navCtrl.navigateBack('/home');
          }
        }
      ]
    }).then(alertEl => alertEl.present());
  }
}
