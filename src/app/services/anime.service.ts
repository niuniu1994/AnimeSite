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

  private readonly baseUrl = 'https://api.jikan.moe/v3';

  constructor(private httpClient: HttpClient) {
  }

  // autocomplete search bar according to the input text
  public autoCompleteByText(name: string): Observable<IResponse> {
    const url = `${this.baseUrl}/search/anime?q=${name}&page=1`;
    return this.httpClient.get<IResponse>(url);
  }

  // submit search data and get response
  public searchAnimeByText(params: string, name: string): Observable<IResponse> {
    if (name === '') {
      name = '&order_by=members&sort=desc';
    }
    const url = `${this.baseUrl}/search/anime?q=${name}${params}`;
    return this.httpClient.get<IResponse>(url);
  }

  // resposne anime detail
  public getAnimeDetail(id: string): Observable<IAnimeDetailResponse> {
    if (id !== '') {
      const url = `${this.baseUrl}/anime/${id}`;
      return this.httpClient.get<IAnimeDetailResponse>(url);
    }
  }

  public searchAnimeImage(data: string): Observable<IAnimeImageResponse> {
    const url = 'https://trace.moe/api/search';
    return this.httpClient.post<IAnimeImageResponse>(url, JSON.stringify({image: data}));
  }

  // service for main page image slider
  public getAnimeAiring(): Observable<IResponse2> {
    const url = `${this.baseUrl}/top/anime/1/airing`;
    return this.httpClient.get<IResponse2>(url);
  }

  // service for main page image slider
  public getAnimeUpcoming(): Observable<IResponse2> {
    const url = `${this.baseUrl}/top/anime/1/upcoming`;
    return this.httpClient.get<IResponse2>(url);
  }

  // service for main page image slider
  public getAnimeToday(): Observable<any> {
    const day = new Date();
    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const url = `${this.baseUrl}/schedule/${weekDay[day.getDay()]}`;
    return this.httpClient.get<any>(url);
  }

  // service for top anime
  public getAnimeRanksperPage(params: string): Observable<IResponse2> {
    if (params === '' || params === null) {
      params = '1';
    }
    const url = `${this.baseUrl}/top/anime/${params}/tv`;
    return this.httpClient.get<IResponse2>(url);
  }

  public getMovieRanksperPage(params: string): Observable<IResponse2> {
    if (params === '' || params === null) {
      params = '1';
    }
    const url = `${this.baseUrl}/top/anime/${params}/movie`;
    return this.httpClient.get<IResponse2>(url);
  }
}
