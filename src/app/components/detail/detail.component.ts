import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AnimeService} from '../../services/anime.service';
import {IAnimeDetailResponse} from '../entity/ianime-detail-response';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public id: string;
  public videoId: string;
  public anime: IAnimeDetailResponse;

  constructor(private activatedRoute: ActivatedRoute, private animeService: AnimeService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(x => this.id = x.get('id'));
    console.log(this.id);
    this.animeService.getAnimeDetail(this.id).subscribe(x => this.anime = x);
  }

}
