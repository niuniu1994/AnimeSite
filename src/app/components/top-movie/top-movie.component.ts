import {Component, OnDestroy, OnInit} from '@angular/core';
import {IAnime} from '../../entity/IAnime';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {AnimeService} from '../../services/anime.service';

@Component({
  selector: 'app-top-movie',
  templateUrl: './top-movie.component.html',
  styleUrls: ['./top-movie.component.css']
})
export class TopMovieComponent implements OnInit, OnDestroy{
  public malId: string;
  public topMovie: IAnime[] = [];
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
    this.subAiring = this.animeService.getMovieRanksperPage(this.params).subscribe(x => {
      this.topMovie  = x.top;
      console.log(this.topMovie);
    });
  }

  pageChanged(evt: number): void {
    this.params = `${evt}`;
    this.animeService.getMovieRanksperPage(this.params).subscribe(z => {
      this.topMovie = z.top;
    });
    this.p = evt;
  }

  ngOnDestroy(): void {
    this.subActivetedRoute.unsubscribe();
    this.subAiring.unsubscribe();
  }
}
