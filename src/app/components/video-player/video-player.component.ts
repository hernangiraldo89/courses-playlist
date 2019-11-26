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


  constructor() {}

  ngOnInit() {}

  public savePlayer(player) {
    this.player = player;
    this.player.playVideo();
  }

  public onStateChange(event) {
    if (event.data === 0) {
      console.log(event.data)
      this.endVideoEmitter.emit();
    }
  }
}
