import {Component, OnInit, ViewChild} from '@angular/core';
import {AnimeService} from '../../services/anime.service';
import {IAnime} from '../../entity/IAnime';
import {NgImageSliderComponent} from 'ng-image-slider';

interface IImage {
  thumbImage: string;
  title: string;
  mal_id: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public malId: string;
  public airing: IImage[] = [];
  public upcoming: IImage[] = [];
  public today: IImage[] = [];
  private date = new Date();
  @ViewChild('sliderAiring') sliderAiring: NgImageSliderComponent;
  @ViewChild('sliderToday') sliderToday: NgImageSliderComponent;
  @ViewChild('slideRelease') slideRelease: NgImageSliderComponent;
  private weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor(private animeService: AnimeService) {

  }

  ngOnInit(): void {
    this.animeService.getAnimeAiring().subscribe(x => this.airing = this.convert(x.top));
    this.animeService.getAnimeUpcoming().subscribe(x => this.upcoming = this.convert(x.top));
    console.log(this.weekDay[this.date.getDay()].toLowerCase());
    this.animeService.getAnimeToday().subscribe(x => this.today = this.convert(x[this.weekDay[this.date.getDay()].toLowerCase()]));
  }

  private convert(animes: IAnime[]): IImage[] {

    let arr: IImage[] = [];
    for (const {mal_id, image_url, title} of animes) {
      arr = [...arr, {thumbImage: image_url, title, mal_id}];
    }
    console.log(arr);
    return arr;
  }

  public clickAiring(evt: number): void {
    this.malId = this.airing[evt].mal_id;
  }

  clickToday(evt: number): void {
    this.malId = this.today[evt].mal_id;
  }

  clickUpcoming(evt: number): void {
    this.malId = this.upcoming[evt].mal_id;
  }

  prevImageClickAiring(): void {
    this.sliderAiring.prev();
  }

  nextImageClickAiring(): void {
    this.sliderAiring.next();
  }

  prevImageClickToday(): void {
    this.sliderToday.prev();
  }

  nextImageClickToday(): void {
    this.sliderToday.next();
  }

  nextImageClickRelease(): void {
    this.slideRelease.next();
  }

  prevImageClickRelease(): void {
    this.slideRelease.prev();
  }
}
