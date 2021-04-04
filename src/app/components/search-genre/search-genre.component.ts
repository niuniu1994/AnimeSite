import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AnimeService} from '../../services/anime.service';

@Component({
  selector: 'app-search-genre',
  templateUrl: './search-genre.component.html',
  styleUrls: ['./search-genre.component.css'],
})
export class SearchGenreComponent implements OnInit {

  public searchAnimeByGenre = '&genre%3D';

  public genres2: Map<string, number> = new Map([
    ['action', 1],
    ['adventure', 2],
    ['Cars', 3],
    ['comedy', 4],
    ['Dementia', 5],
    ['Demons', 6],
    ['Mystery', 7],
    ['Drama', 8],
    ['Ecchi', 9],
    ['Fantasy', 10],
    ['Game', 11],
    ['Hentai', 12],
    ['Historical', 13],
    ['Horror', 14],
    ['kids', 15],
    ['magic', 16],
    ['martial arts', 17],
    ['Mecha', 18],
    ['Music', 19],
    ['Parody', 20],
    ['Samurai', 21],
    ['Romance', 22],
    ['School', 23]
  ]); // anime genres
  public featuresMap: Map<string, string> = new Map<string, string>(); // features added from filter

  constructor() { }

  public ParamsBuilder(): string {
    let urlParams = '';
    for (const [key, val] of this.featuresMap) {
      urlParams += `&${key}=${val}`;
    }
    return urlParams;
  }

  getGenreByValue(value: string): string {
    for (const [key, val] of this.genres2) {
      if (val.toString() === value) {
        return key;
      }
    }
  }

  ngOnInit(): void {
  }

}
