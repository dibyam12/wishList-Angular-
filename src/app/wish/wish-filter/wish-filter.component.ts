import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css'],
})
export class WishFilterComponent implements OnInit {
  constructor() {}
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  listFilter: any = '0';
  ngOnInit(): void {
    //initialization for the particular component

    this.updateFilter('0'); //or this.filterChange.emit(filters[0]);
  }

  updateFilter(value: any) {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}

// to set up  a two way binding we need both input and output decorators in the components
