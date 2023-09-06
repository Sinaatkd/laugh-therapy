import { Component, OnInit } from '@angular/core';
import { WeightedRandomPicker } from '../utilities/randomWeightedNumber';

@Component({
  selector: 'app-destroy-bad-cell',
  templateUrl: './destroy-bad-cell.page.html',
  styleUrls: ['./destroy-bad-cell.page.scss'],
})
export class DestroyBadCellPage implements OnInit {

  // 0: means bad cell and 1 means good cell and 2 means destroyed
  characters: number[] = []
  deadCharacters: number[] = [];

  bullet = 10;
  isStartBlank = true;

  constructor() { }

  checkCharactersX() {
    const ionContentOffsetHeight = document.getElementById('ionContent')?.offsetHeight;
    const characters = document.getElementById('characters');
    const charactersBottomPosition = characters?.getBoundingClientRect().bottom;
    if (charactersBottomPosition && charactersBottomPosition && (ionContentOffsetHeight! < charactersBottomPosition!)) {
      characters.classList.remove('characters')
    }
  }

  checkCharactersXIntervalID = setInterval(this.checkCharactersX, 800);

  ionViewWillLeave() {
    clearInterval(this.checkCharactersXIntervalID)
  }

  ngOnInit() {
    this.characters = this.createRandomCharacter(16)
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
    if (this.bullet > 0) {
      this.bullet -= 1;
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
          bullet.remove();
          if (characters[i].src?.toString().indexOf('good') == -1) {
            this.bullet += 1;
            this.deadCharacters.push(0);
          } else {
            this.bullet -= 1;
            this.deadCharacters.push(1);
          }
          characters[i].remove();
          return;
        }
      }
      checkTime += 1;
      setTimeout(() => {
        this.checkBulletCollision(bullet, checkTime)
      }, 50);
    }
  }

  setAnimationMoveRightLeft(index: number) {
    if ([1, 2, 3, 9, 10, 11].includes(index)) {
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
}
