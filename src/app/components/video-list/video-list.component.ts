import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Video } from '../../interfaces/Video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  @Input()
  videos: Video[];

  @Input()
  currentIndex: number;

  @Output()
  changeVideoEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public changeVideo(video: Video, i: number) {
    this.changeVideoEmitter.emit({ video, i });
  }

}
