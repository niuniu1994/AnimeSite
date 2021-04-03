import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AnimeService} from '../../services/anime.service';
import {IAnimeDetailResponse} from '../../entity/ianime-detail-response';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  public id: string;
  public anime: IAnimeDetailResponse;
  private subActiveRoute: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private animeService: AnimeService) {
  }

  ngOnInit(): void {
    this.subActiveRoute = this.activatedRoute.paramMap.subscribe(x => this.id = x.get('id'));
    console.log(this.id);
    this.animeService.getAnimeDetail(this.id).subscribe(x => this.anime = x);
  }

  ngOnDestroy(): void {
    this.subActiveRoute.unsubscribe();
  }


}
