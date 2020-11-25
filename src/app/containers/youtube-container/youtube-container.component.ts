import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-youtube-container',
  templateUrl: './youtube-container.component.html'
})
export class YoutubeContainerComponent implements OnInit {
  channels: Observable<any>;
  constructor(private youtube: YoutubeService) { }

  ngOnInit() {
    this.getChannels();
  }

  searchData(payload: { channelName: string, batchSize: number }) {
    this.getChannels(payload.channelName, payload.batchSize);
  }

  getChannels(channelName?: string, batchSize?) {
    this.channels = this.youtube.getChannels(channelName, batchSize).pipe(map(x => { return x.items }));
  }
}
