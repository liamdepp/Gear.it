import { Injectable } from '@angular/core';
import { PackingList } from "../interfaces/packing-list";

@Injectable({
  providedIn: 'root'
})
export class PackingListService {
  listItems: PackingList[] = [
    { item: "Toiletries", complete: false },
    { item: "Wallet/ID", complete: false },
    { item: "Phone Charger", complete: false }
  ];

  newItem: PackingList = { item: "", complete: false };
  newItemText: string = "";

  addItem() {
    this.listItems = [
      ...this.listItems,
      { item: this.newItemText, complete: false }
    ];
    console.log(this.listItems);
  }

  completeItem(item: PackingList): void {
    item.complete = !item.complete;
  }

  delete(item: PackingList): void {
    this.listItems = this.listItems.filter(x => x !== item);
    console.log(this.listItems);
  }

  // addItemFromGear(item){
  //   this.listItems = [
  //     ...this.listItems,
  //     { item:  }
  //   ]
  // }
setCustomWords(item){
  this.newItemText = item;
}

  getList(){
    console.log(this.listItems);
    return this.listItems
    
  }

  constructor() { }
}
