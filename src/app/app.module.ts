import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';
import {MatCardModule} from '@angular/material/card';
import {NgxPaginationModule} from 'ngx-pagination';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';
import { VideoIdPipe } from './util/video-id.pipe';
import { SearchImageComponent } from './components/search-image/search-image.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HomeComponent } from './components/home/home.component';
import {NgImageSliderModule} from 'ng-image-slider';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    DetailComponent,
    ListComponent,
    YoutubePlayerComponent,
    VideoIdPipe,
    SearchImageComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    MatDialogModule,
    AutocompleteLibModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatChipsModule,
    MatCardModule,
    NgxPaginationModule,
    YouTubePlayerModule,
    MatProgressSpinnerModule,
    NgImageSliderModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {
  }
