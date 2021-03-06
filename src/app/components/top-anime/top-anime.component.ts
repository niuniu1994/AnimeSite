import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AnimeService} from '../../services/anime.service';
import {Subscription} from 'rxjs';
import {IAnime} from '../../entity/IAnime';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-top-anime',
  templateUrl: './top-anime.component.html',
  styleUrls: ['./top-anime.component.css']
})
export class TopAnimeComponent implements OnInit, OnDestroy{
  public malId: string;
  public topAnime: IAnime[] = [];
  public params: string;
  private subActivetedRoute: Subscription;
  public subAiring: Subscription;
  p: string | number;
  displayedColumns: string[] = [ 'rank', 'imageUrl' , 'date' , 'title', 'score'];
  constructor(private activatedRoute: ActivatedRoute, private animeService: AnimeService) { }

  ngOnInit(): void {
    this.subActivetedRoute = this.activatedRoute.paramMap.subscribe(x => {
        this.params = x.get('params');
      }
    );
    this.subAiring = this.animeService.getAnimeRanksperPage(this.params).subscribe(x => {
      this.topAnime  = x.top;
      console.log(this.topAnime);
    });
  }

  pageChanged(evt: number): void {
    this.params = `${evt}`;
    this.animeService.getAnimeRanksperPage(this.params).subscribe(z => {
      this.topAnime = z.top;
    });
    this.p = evt;
  }

  ngOnDestroy(): void {
    this.subActivetedRoute.unsubscribe();
    this.subAiring.unsubscribe();
  }
}
