import { Component } from '@angular/core';
import { ressults } from './results';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hazi4';
  index : number | undefined;
  podium: string[] | undefined;

  results = ressults;

  indexChanged(index : number) {
    this.index = index;
    this.podium = ressults[index].podium;
  }

  hidePodium() {
    this.index = undefined;
    this.podium = undefined;
  }
}
