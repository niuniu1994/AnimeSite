import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Subscription} from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(public mediaObserver: MediaObserver) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }


}
