import {Component, OnInit} from '@angular/core';
import {IAnime} from '../entity/IAnime';
import {Subject} from 'rxjs';
import {debounceTime, filter} from 'rxjs/operators';
import {AnimeService} from '../../services/anime.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public options: IAnime[] = [];
  private subject$ = new Subject();
  public keyword = 'title'; // autocomplete search key word
  public searchText = ''; // value of search text
  public types: string[] = ['tv', 'ova', 'movie', 'special', 'ona', 'music']; // anime types
  public status: string[] = ['airing', 'completed', 'upcoming']; // anime status
  public ratings: string[] = ['g', 'pg', 'pg13', 'r17', 'r', 'rx']; // anime ratings
  public genres: Map<string, number> = new Map([
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
  public removable = true;

  constructor(private fb: FormBuilder, private animeService: AnimeService) {
    // download data and assign it to autocomplete options
    this.subject$.pipe(
      filter(x => x.toString().length >= 3),
      debounceTime(400)
    ).subscribe(x => this.animeService.autoCompleteByText(x.toString()).subscribe(z => {
      this.options = z.results;
      // console.log(this.options);
    }));
  }

  // transform features to url params that we pass to list component
  public ParamsBuilder(): string {
    let urlParams = '';
    for (const [key, val] of this.featuresMap) {
      urlParams += `&${key}=${val}`;
    }
    return urlParams;
  }

  ngOnInit(): void {
  }

  selectEvent(item): void {
    // do something with selected item
  }

  onChangeSearch(search: string): void {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
    this.searchText = search;
    console.log(this.searchText);
    this.subject$.next(this.searchText);
  }

  onFocused(e): void {
    // do something
  }


  addFeature(evt): void {
    const key = evt.target.name;
    const value = evt.target.value;
    this.featuresMap.set(key, value);
    console.log(this.featuresMap.keys());
  }

  remove(key: string): void {
    this.featuresMap.delete(key);
  }

  getGenreByValue(value: string): string {
    for (const [key, val] of this.genres) {
      if (val.toString() === value) {
        return key;
      }
    }
  }

  // util
  changeSearchText(evt): void {
    this.searchText = evt.target.innerHTML.replace('<b>', '').replace('</b>', '');
    console.log(this.searchText);
  }
}
