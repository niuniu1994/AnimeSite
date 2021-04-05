import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AnimeService} from '../../services/anime.service';

@Component({
  selector: 'app-search-genre',
  templateUrl: './search-genre.component.html',
  styleUrls: ['./search-genre.component.css'],
})
export class SearchGenreComponent implements OnInit {

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


  constructor() { }


  ngOnInit(): void {
  }

}
