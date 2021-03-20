import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() private deviceXs: boolean;
  @ViewChild('searchbar') searchbar: ElementRef;


  constructor() {
  }

  ngOnInit(): void {}
}
