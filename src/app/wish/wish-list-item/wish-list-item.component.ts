import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

import { EventService } from '../../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css'],
})
export class WishListItemComponent implements OnInit {
  @Input() wish!: WishItem;

  //@Input() fullfilled!: boolean;                      two way binding for the fulfilled
  // @Output() fullfilledChange = new EventEmitter<boolean>();
  constructor(private events: EventService) {}

  get cssClasses() {
    return this.wish.isComplete ? 'strikeout text-muted' : '';
  }

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  ngOnInit(): void {}

  toggleFullfilled() {
    // this.fullfilled = !this.fullfilled;
    // this.fullfilledChange.emit(this.fullfilled);

    this.wish.isComplete = !this.wish.isComplete;
  }
}
