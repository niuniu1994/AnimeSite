import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AnimeService} from '../../services/anime.service';
import {IAnimeDetailResponse} from '../../entity/ianime-detail-response';
import {tryCatch} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public id: string;
  public videoId: string;
  public anime: IAnimeDetailResponse;
  dataEmpty = 'N/A';
  constructor(private activatedRoute: ActivatedRoute, private animeService: AnimeService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(x => this.id = x.get('id'));
    console.log(this.id);
    this.animeService.getAnimeDetail(this.id).subscribe(x => this.anime = x);
  }

  // tslint:disable-next-line:typedef
  getScore() {
    const min = 'a';
    try{
      if (!(min.length > this.anime.score.length)){
        return this.anime.score + ' / 10';
      }
    }
    catch (e) {
      return this.dataEmpty;
    }
  }

  // tslint:disable-next-line:typedef
  getPremiered() {
    try{
      if (this.anime.premiered.length > 1){
        return this.anime.premiered;
      }
    }
    catch (e){
      return this.dataEmpty;
    }
  }
  // tslint:disable-next-line:typedef
  getBroadcast() {
    try{
      if (this.anime.broadcast.length > 1){
        return this.anime.broadcast;
      }
    }
    catch (e){
      return this.dataEmpty;
    }
  }
}
