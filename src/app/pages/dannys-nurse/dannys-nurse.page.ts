import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-dannys-nurse',
  templateUrl: './dannys-nurse.page.html',
  styleUrls: ['./dannys-nurse.page.scss'],
})
export class DannysNursePage implements OnInit {
  constructor(
    @Inject(DOCUMENT) document: Document
  ) {
    document.dir = 'ltr';
  }

  ngOnInit(): void {
    
  }
}
