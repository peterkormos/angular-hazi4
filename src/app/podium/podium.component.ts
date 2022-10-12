import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css']
})
export class PodiumComponent implements OnInit {
  @Input() podium: string[] | undefined;
  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  hidePodium() {
    this.click.emit();
  }
}
