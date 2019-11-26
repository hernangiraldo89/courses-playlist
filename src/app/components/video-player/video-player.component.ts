import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Video } from '../../interfaces/Video';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  @Input()
  video: Video;

  @Output()
  endVideoEmitter: EventEmitter<any> = new EventEmitter<any>();

  public player: YT.Player;
  public showQuestion: boolean;
  private intervalQuestion: any;

  constructor() {}

  ngOnInit() {}

  public savePlayer(player) {
    this.player = player;
    this.player.playVideo();
    this.startObserver();
  }

  private startObserver() {
    if (this.video.hasQuestion) {
      this.intervalQuestion = setInterval(() => {
        if (this.player.getCurrentTime() > this.video.question.second) {
          clearInterval(this.intervalQuestion);
          this.showQuestion = true;
          this.player.pauseVideo();
        }
      }, 1000);
    }
  }

  public continueVideo() {
    this.showQuestion = false;
    this.player.playVideo();
  }

  public onStateChange(event) {
    if (event.data === 0) {
      console.log(event.data)
      this.endVideoEmitter.emit();
    }
  }
}
