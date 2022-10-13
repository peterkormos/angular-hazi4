import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Result } from '../results';
import { SharedData } from '../sharedData';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {
  @Input() results : Result[] | undefined;
  @Input() sharedData : SharedData | undefined;
  @Output() indexChange = new EventEmitter<number>();
  @Output() sharedDataChange = new EventEmitter<SharedData>();

  constructor() { }

  ngOnInit(): void {
  }

  rowSelected(index: number) 
  {
    this.sharedData!.index = index;
    this.indexChange.emit(index);

    this.sharedDataChange.emit(this.sharedData);
  }
}
