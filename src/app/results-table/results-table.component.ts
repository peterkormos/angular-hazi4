import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Result } from '../results';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {
  @Input() results : Result[] | undefined;
  @Input() index : number | undefined;
  @Output() indexChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  rowSelected(index: number) 
  {
    this.index = index;
    this.indexChange.emit(index);
  }
}
