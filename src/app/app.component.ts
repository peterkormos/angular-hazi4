import { Component } from '@angular/core';
import { ressults } from './results';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hazi4';
  _index : number | undefined;
  podium: string[] | undefined;

  results = ressults;

  get index() {
    return this._index!;
  }

  set index(index : number) {
    this._index = index;
    this.podium = ressults[index].podium;
  }

  hidePodium() {
    this._index = undefined;
    this.podium = undefined;
  }
}
