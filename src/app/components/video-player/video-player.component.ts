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

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.endVideoEmitter.emit();
    }, 20000);
  }

  public test() {
    console.log('test')
  }
}
