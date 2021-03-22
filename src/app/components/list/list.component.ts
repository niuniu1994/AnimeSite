import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IAnime} from '../../entity/IAnime';
import {AnimeService} from '../../services/anime.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public searchText: string;
  public params: string;
  public animes: IAnime[] = [];
  p: string | number;

  constructor(private activatedRoute: ActivatedRoute, private animeService: AnimeService) {}

  ngOnInit(): void {
    // get params from route
    this.activatedRoute.paramMap.subscribe(x => {
        this.searchText = x.get('searchText');
        this.params = x.get('params');
      }
    );
    console.log(this.searchText + ' ' + this.params);
    this.animeService.searchAnimeByText(this.params, this.searchText).subscribe(z => {
      this.animes = z.results;
      console.log(this.animes);
    });
  }

  pageChanged(evt: number): void {
    this.params = `&page=${evt}`;
    this.animeService.searchAnimeByText(this.params, this.searchText).subscribe(z => {
      this.animes = z.results;
    });
    this.p = evt;
  }
}
