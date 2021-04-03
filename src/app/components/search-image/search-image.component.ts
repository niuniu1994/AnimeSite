import {Component, OnInit} from '@angular/core';
import {Idoc} from '../../entity/ianime-image-response';
import {AnimeService} from '../../services/anime.service';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent implements OnInit {
  public imageUrl: any;
  public alert: string;
  public animeName: string;
  public animes: Idoc[];
  public loading = false;

  constructor(private animeService: AnimeService) {
  }

  ngOnInit(): void {
  }

  private include(allowedTypes: string[], type: string): boolean {
    return allowedTypes.includes(type);
  }

  uploadFile(event): void {
    const reader = new FileReader(); // HTML5 FileReader API
    if (event.target.files?.length && event.target.files[0]) {
      const allowedTypes = ['image/png', 'image/jpeg'];
      const maxSize = 1_048_576 * 10;
      const file = event.target.files[0];
      if (event.target.files[0].size > maxSize) {
        this.alert = 'Maximum size allowed is 10 Mb';
        return;
      }
      if (!this.include(allowedTypes, event.target.files[0].type)) {
        this.alert = 'Only Images are allowed ( JPEG | PNG )';
        return;
      }
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result);
        this.imageUrl = reader.result;
      };
    }
  }

  search(): void {
    this.loading = true;
    this.animeService.searchAnimeImage(this.imageUrl).subscribe(
      x => {
        this.animes = x.docs;
        this.loading = false;
      }
    )
    ;
  }


}
