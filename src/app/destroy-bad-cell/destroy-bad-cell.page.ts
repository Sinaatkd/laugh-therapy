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

  bullet = 10;
  isStartBlank = true;

  constructor() { }

  ngOnInit() {
    this.characters = this.createRandomCharacter(16)
  }

  createRandomCharacter(length: number) {
    const items = [0, 1]
    const weight = [0.9, 0.1]
    const randomList: number[] = [];
    for (let i = 0; i < length; i++) {
      if (i != 0 && i != 7 && i != 8 && i != 15) {
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
    }
  }
  setAnimationMoveRightLeft(index: number) {
    if ([1, 2, 3, 9, 10, 11].includes(index)) {
      return true
    }
    return false;
  }
}
