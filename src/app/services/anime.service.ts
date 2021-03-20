import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IResponse} from '../components/entity/IResponse';
import {IAnimeDetailResponse} from '../components/entity/ianime-detail-response';


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
    if (name === ''){
      name = '&order_by=members&sort=desc';
    }
    this.url = `https://api.jikan.moe/v3/search/anime?q=${name}${params}`;
    return this.httpClient.get<IResponse>(this.url);
  }

  public getAnimeDetail(id: string): Observable<IAnimeDetailResponse>{
    if (id !== '') {
      this.url = `https://api.jikan.moe/v3/anime/${id}`;
      return this.httpClient.get<IAnimeDetailResponse>(this.url);
    }
  }

}
