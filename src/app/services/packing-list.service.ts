import { Injectable } from '@angular/core';
import { PackingList } from "../interfaces/packing-list";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackingListService {
  private subject = new Subject<any>();
  listItems: PackingList[] = [
    { item: "Toiletries", complete: false },
    { item: "Wallet/ID", complete: false },
    { item: "Phone Charger", complete: false }
  ];
  added: boolean = false;

  newItem: PackingList = { item: "", complete: false };
  newItemText: string = "";

  addItem() {
    this.listItems = [
      ...this.listItems,
      { item: this.newItemText, complete: false }
    ];
    this.sendMessageAdd();
  }

  completeItem(item: PackingList): void {
    item.complete = !item.complete;
  }

  delete(item: PackingList): void {
    this.listItems = this.listItems.filter(x => x !== item);
    console.log(this.listItems);
    this.sendMessageAdd();
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

  sendMessageAdd(){
    this.subject.next(this.listItems.length)
  }

  sendMessageDelete(){
    this.subject.next("subtract counter")
  }

  getMessage(){
    return this.subject.asObservable();
  }

  constructor() { }
}
