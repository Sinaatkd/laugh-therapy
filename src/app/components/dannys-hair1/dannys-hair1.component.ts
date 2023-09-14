import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dannys-hair1',
  templateUrl: './dannys-hair1.component.html',
  styleUrls: ['./dannys-hair1.component.scss'],
})
export class DannysHair1Component  implements OnInit {

  @Input('hairBackgroundColor') hairBackgroundColor: string = '#963'
  @Input('isHairTop') isHairTop: boolean = false;
  @Input('isHairBack') isHairBack: boolean = false;
  
  constructor() { }

  ngOnInit() {}

}
