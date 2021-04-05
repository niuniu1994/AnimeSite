import { Component, OnInit } from '@angular/core';
import {AnimeService} from '../../services/anime.service';
import {Subscription} from 'rxjs';
import {IAnime} from '../../entity/IAnime';
import {IResponse2} from '../../entity/iresponse2';


import {DecimalPipe} from '@angular/common';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  imageUrl: string;
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

interface IImage {
  thumbImage: string;
  title: string;
  mal_id: string;
}

// interface for anime ranks

export interface IRank {
  image_url: string;
  title: string;
  mal_id: string;
  rank: number;
  score: number;
}

@Component({
  selector: 'app-top-anime',
  templateUrl: './top-anime.component.html',
  styleUrls: ['./top-anime.component.css']
})
export class TopAnimeComponent implements OnInit {
  public malId: string;
  //
  public airing: IImage[] = [];
  public upcoming: IImage[] = [];
  public top: IAnime[] = [];
  //
  public ranks: IRank[] = [];
  private subAiring: Subscription;
  private subUpComping: Subscription;
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'imageUrl'];
  displayedColumns: string[] = ['rank', 'title', 'image_url'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  // dataSource = new MatTableDataSource(this.ranks);
  dataSource;

  headerText: string;

  decimalPipe = new DecimalPipe('en-US');

  /** Data accessor function that transforms the weight value to have at most 2 decimal digits. */
  getWeight = (data: PeriodicElement): string => {
    const result = this.decimalPipe.transform(data.weight, '1.0-2');
    return result === null ? '' : result;
  }


  constructor(private animeService: AnimeService) {
  }

  ngOnInit(): void {
    // this.subAiring = this.animeService.getAnimeAiring().subscribe(x => this.airing = this.convert(x.top));
    // this.subUpComping = this.animeService.getAnimeUpcoming().subscribe(x => this.upcoming = this.convert(x.top));
    // this.ranks = this.animeService.getAnimeRanks2(10, this.ranks);
    this.subUpComping = this.animeService.getAnimeRanks().subscribe(x => {
      this.upcoming = this.convert(x.top);
      this.dataSource = new MatTableDataSource(this.upcoming);
    });
  }

  private convert(animes: IAnime[]): IImage[] {

    let arr: IImage[] = [];
    for (const {mal_id, image_url, title} of animes) {
      arr = [...arr, {thumbImage: image_url, title, mal_id}];
    }
    console.log(arr);
    return arr;
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.subUpComping.unsubscribe();
  }
}
