import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-hat1',
  templateUrl: './character-hat1.component.html',
  styleUrls: ['./character-hat1.component.scss'],
})
export class CharacterHat1Component  implements OnInit {

  @Input('hatBackgroundColor') hatBackgroundColor!: string;
 
  constructor() { }

  ngOnInit() {}

}
