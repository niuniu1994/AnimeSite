// search request response data structure
import {IAnime} from './IAnime';

// response of search api
export interface IResponse {
  request_hash: string;
  request_cached: string;
  request_cache_expiry: string;
  results: IAnime[];
  last_page: string;
}

