import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  getChannels(channelName: string = "Programming", batchSize: number = 50): Observable<any> {

    const API_KEY = "AIzaSyAUTq6y-zXH52a-n5mq7QFJGcGZloNxGtA";
    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + channelName + "&type=channel&key=" + API_KEY + "&maxResults=" + batchSize;
    // const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=Programming&type=channel&key=AIzaSyAUTq6y-zXH52a-n5mq7QFJGcGZloNxGtA&maxResults50";
    return this.http.get<any>(url);
  }
}
