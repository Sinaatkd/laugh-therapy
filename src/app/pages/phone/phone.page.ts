import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CallComponent } from 'src/app/components/call/call.component';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.page.html',
  styleUrls: ['./phone.page.scss'],
})
export class PhonePage implements OnInit {


  text = '';
  keys = ['3', '2', '1', '6', '5', '4', '9', '8', '7', '*', '0', '#']

  constructor(
    @Inject(DOCUMENT) document: Document,
    private modalCtrl: ModalController,
  ) {
    document.dir = 'ltr';
  }

  ionViewDidEnter() {
    this.call()
  }

  call() {
    setTimeout(() => {
      this.openCallModal();
    }, 6000);
  }

  ionViewDidLeave() {
    document.dir = 'rtl';
  }

  ngOnInit() {
  }

  appendCharacter2Text(char: string) {
    this.text += char;
  }

  clearText() {
    this.text = '';
  }

  openCallModal() {
    this.modalCtrl.create({
      component: CallComponent,
    }).then(modalEl => {
      modalEl.present();
      modalEl.onDidDismiss().then(() => {
        this.call();
      })
    });
  }
}
