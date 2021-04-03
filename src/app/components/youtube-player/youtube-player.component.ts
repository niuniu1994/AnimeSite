import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  template: '<youtube-player videoId="{{videoId}}" ></youtube-player>',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {
  @Input() public videoId: string;

  ngOnInit(): void {
    // This code loads the IFrame Player API code asynchronously, according to the instructions at
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
