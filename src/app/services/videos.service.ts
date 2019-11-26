import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../interfaces/Video';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(
    private http: HttpClient,
    private domSanitizer: DomSanitizer
  ) { }

  public getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>('./../assets/mock.json').pipe(
      map(vids => {
        return vids.map(v => {
          v.url = this.domSanitizer.bypassSecurityTrustResourceUrl(v.url);
          return v;
        });
      })
    );
  }
}
