import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { YoutubeContainerComponent } from './containers/youtube-container/youtube-container.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeContainerComponent,
    SearchComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
