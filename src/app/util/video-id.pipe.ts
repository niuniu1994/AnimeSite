import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'videoId'
})
export class VideoIdPipe implements PipeTransform {

  transform(value: string): string {
    const els = value.split('/');
    console.log(els);
    return els[4];
  }

}

