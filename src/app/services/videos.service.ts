import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../interfaces/Video';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(
    private http: HttpClient
  ) { }

  public getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>('./../assets/mock.json');
  }
}
