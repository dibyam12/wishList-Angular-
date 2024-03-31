import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css'],
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();

  newWishText = ''; // input value ts ma rakhna ko lagi banayeko

  addNewWish() {
    //add the items in the array
    //clear the textbox
    //{ this.items.push(new WishItem(this.newWishText)); }// input liyeko data chai array ma push gareko
    //OR use event emitter to add a new wish when the submit button is clicked as an event occours
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = ''; //input garney thau khali gareko
    alert(`New wish have been added successfully`);
  }
}
