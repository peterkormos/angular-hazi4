import { Component } from '@angular/core';
import { ressults } from './results';
import { SharedData, SharedData_InvalidIndex } from './sharedData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hazi4';
  sharedData = new SharedData();
  podium: string[] | undefined;

  results = ressults;

  indexChanged(index : number) {
    this.sharedData.index = index;
    this.podium = ressults[index].podium;
  }

  hidePodium() {
    this.sharedData.index = SharedData_InvalidIndex;
    this.podium = undefined;
  }

  invalidIndex() {
    return SharedData_InvalidIndex;
  }
}
