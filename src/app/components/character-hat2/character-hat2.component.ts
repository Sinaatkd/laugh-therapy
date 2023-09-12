import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-hat2',
  templateUrl: './character-hat2.component.html',
  styleUrls: ['./character-hat2.component.scss'],
})
export class CharacterHat2Component  implements OnInit {

  @Input('hatBackgroundColor') hatBackgroundColor!: string

  constructor() { }

  ngOnInit() {}

}
