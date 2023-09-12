import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-hair1',
  templateUrl: './character-hair1.component.html',
  styleUrls: ['./character-hair1.component.scss'],
})
export class CharacterHair1Component  implements OnInit {

  @Input('hairBackgroundColor') hairBackgroundColor!: string
  @Input('isHairTop') isHairTop: boolean = false;
  @Input('isHairBack') isHairBack: boolean = false;
  
  constructor() { }

  ngOnInit() {}

}
