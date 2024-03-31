import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from 'src/shared/services/EventService';
import { WishService } from './wish.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css'],
})
export class WishComponent {
  items!: WishItem[];

  // if ng model used // visibleItems: WishItem[] = this.items;

  //----to display the list----
  // get visibleItems(): WishItem[] {
  //   return this.items.filter(this.filter);
  // } -------

  filter: any;

  // filterChanged(value: any) {
  //   if (value === '0') {
  //     this.visibleItems = this.items;   //IF ngModelChange is  used
  //   } else if (value === '1') {
  //     this.visibleItems = this.items.filter((item) => !item.isComplete);
  //   } else {
  //     this.visibleItems = this.items.filter((item) => item.isComplete);
  //   }
  // } OR, use getter function  in line 19

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      // todo remove wish from the items
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data: any) => {
      this.items = data;
    });
  }
}
