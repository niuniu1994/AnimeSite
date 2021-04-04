import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IAnime} from '../../entity/IAnime';
import {AnimeService} from '../../services/anime.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  public searchText: string;
  public params: string;

  public genre: string;
  public page = '1';

  public animes: IAnime[] = [];
  private subActivetedRoute: Subscription;
  private subAnimes: Subscription;
  p: string | number;

  constructor(private activatedRoute: ActivatedRoute, private animeService: AnimeService) {
  }

  ngOnInit(): void {
    // get params from route
    this.subActivetedRoute = this.activatedRoute.paramMap.subscribe(x => {
        this.searchText = x.get('searchText');
        this.params = x.get('params');
        this.genre = x.get('genre');
      }
    );

    if (this.genre != null) {
      this.subAnimes = this.animeService.searchAnimeByGenre(this.genre, this.page).subscribe(z => {
        this.animes = z.anime;
      });
    } else {
      this.subAnimes = this.animeService.searchAnimeByText(this.params, this.searchText).subscribe(z => {
        this.animes = z.results;
      });
    }

  }

  pageChanged(evt: number): void {
    if (this.genre != null) {
      this.page = `${evt}`;
      this.animeService.searchAnimeByGenre(this.params, this.page).subscribe(z => {
        this.animes = z.anime;
      });
    } else {
      this.params += `&page=${evt}`;
      this.animeService.searchAnimeByText(this.params, this.searchText).subscribe(z => {
        this.animes = z.results;
      });
    }
    this.p = evt;
  }

  ngOnDestroy(): void {
    this.subActivetedRoute.unsubscribe();
    this.subAnimes.unsubscribe();
  }
}
