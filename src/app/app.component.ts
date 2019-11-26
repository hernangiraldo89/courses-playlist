import { Component, OnInit } from '@angular/core';
import { VideosService } from './services/videos.service';
import { Video } from './interfaces/Video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public videos: Video[];
  public currentVideo: Video;
  public currentVideoIndex: number;

  constructor(
    private videosService: VideosService
  ) {
    this.videos = [];
  }

  ngOnInit(): void {
    this.videosService.getVideos().subscribe(videos => {
      this.videos = videos;
      setTimeout(() => {
        this.currentVideo = videos[0];
        this.currentVideoIndex = 0;
      }, 1000);
    });
  }

  public changeVideo({ video, i }) {
    if (video.id !== this.currentVideo.id) {
      this.currentVideo = null;
      this.currentVideoIndex = i;

      setTimeout(() => {
        this.currentVideo = video;
      }, 1000);
    }
  }

  public nextVideo() {
    this.currentVideo = null;
    this.videos[this.currentVideoIndex].watched = true;

    if (this.currentVideoIndex !== this.videos.length) {
      setTimeout(() => {
        this.currentVideoIndex += 1;
        this.currentVideo = this.videos[this.currentVideoIndex];
        return;
      }, 1000);
    } else {
      this.currentVideo = null;
    }
  }
}
