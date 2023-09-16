import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dannys-pain',
  templateUrl: './dannys-pain.component.html',
  styleUrls: ['./dannys-pain.component.scss'],
})
export class DannysPainComponent implements OnInit {

  secondOfAudio = 0;
  playedMusicId = 0;
  isPause = false;

  musics = [
    [
      {
        id: 1,
        address: '../../../assets/sounds/happy-music/happy-music1.mp3',
        min: 0,
        max: 227
      },
      {
        id: 2,
        address: '../../../assets/sounds/happy-music/happy-music2.mp3',
        min: 0,
        max: 100
      },
      {
        id: 3,
        address: '../../../assets/sounds/happy-music/happy-music3.mp3',
        min: 0,
        max: 81
      },
    ],
  ]

  constructor() { }

  ngOnInit() { }

  playOrPause(id: number) {
    if (id !== this.playedMusicId) {
      this.isPause = false;
      this.secondOfAudio = 0;
      this.playedMusicId = id;
      setInterval(() => {
        this.secondOfAudio += 1;
      }, 1000)
    } else {
      const audio = document.getElementById(`audio_${id}`)! as HTMLMediaElement;
      if (this.isPause) {
        this.isPause = false;
        audio.play()
      } else {
        this.isPause = true;
        audio.pause()
      }
    }
  }
  audioTimeChanged(event: any, id: number) {
    const audio = document.getElementById(`audio_${id}`)! as HTMLMediaElement;
    audio.currentTime = event.target.value;
    this.secondOfAudio = event.target.value;
  }
}
