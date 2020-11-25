import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  @Output('search') searchChannel: EventEmitter<{ channelName: string, batchSize: number }> = new EventEmitter<{ channelName: string, batchSize: number }>();
  @ViewChild('channelName') channelName: ElementRef;
  @ViewChild('batchSize') batchSize: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  getData() {
    const channelName = this.channelName.nativeElement.value != "" ? this.channelName.nativeElement.value : "Programming";
    const batchSize = this.batchSize.nativeElement.value != "" ? this.batchSize.nativeElement.value : '50';
    this.searchChannel.emit({ channelName, batchSize });
  }
}
