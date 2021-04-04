import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IResponse} from '../entity/IResponse';
import {IAnimeDetailResponse} from '../entity/ianime-detail-response';
import {IAnimeImageResponse} from '../entity/ianime-image-response';
import {IResponse2} from '../entity/iresponse2';


@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private url: string;

  constructor(private httpClient: HttpClient) {
  }

  // autocomplete search bar according to the input text
  public autoCompleteByText(name: string): Observable<IResponse> {
    this.url = `https://api.jikan.moe/v3/search/anime?q=${name}&page=1`;
    return this.httpClient.get<IResponse>(this.url);
  }

  // submit search data and get response
  public searchAnimeByText(params: string, name: string): Observable<IResponse> {
    if (name === '') {
      name = '&order_by=members&sort=desc';
    }
    this.url = `https://api.jikan.moe/v3/search/anime?q=${name}${params}`;
    return this.httpClient.get<IResponse>(this.url);
  }

  public getAnimeDetail(id: string): Observable<IAnimeDetailResponse> {
    if (id !== '') {
      this.url = `https://api.jikan.moe/v3/anime/${id}`;
      return this.httpClient.get<IAnimeDetailResponse>(this.url);
    }
  }

  public searchAnimeImage(data: string): Observable<IAnimeImageResponse> {
    this.url = 'https://trace.moe/api/search';
    return this.httpClient.post<IAnimeImageResponse>(this.url, JSON.stringify({image: data}));
  }

  public getAnimeAiring(): Observable<IResponse2> {
    this.url = 'https://api.jikan.moe/v3/top/anime/1/airing';
    return this.httpClient.get<IResponse2>(this.url);
  }

  public getAnimeUpcoming(): Observable<IResponse2> {
    this.url = 'https://api.jikan.moe/v3/top/anime/1/upcoming';
    return this.httpClient.get<IResponse2>(this.url);
  }

  public getAnimeToday(): Observable<any> {
    const day = new Date();
    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.url = `https://api.jikan.moe/v3/schedule/${weekDay[day.getDay()]}`;
    return this.httpClient.get<any>(this.url);
  }

  public searchAnimeByGenre(genre: string, id: number): Observable<IResponse> {
    if (genre === '') {
      genre = '&order_by=members&sort=desc';
    }
    this.url = `https://api.jikan.moe/v3/genre/anime?q=${genre}${id}`;
    return this.httpClient.get<IResponse>(this.url);
  }

}
