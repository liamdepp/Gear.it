import { Component, OnInit } from "@angular/core";
import { PackingList } from "../interfaces/packing-list";
import { isNgTemplate } from "@angular/compiler";
import { Router } from "@angular/router";
import { PackingListService } from '../services/packing-list.service';

@Component({
  selector: "app-packing-list",
  templateUrl: "./packing-list.component.html",
  styleUrls: ["./packing-list.component.css"]
})
export class PackingListComponent implements OnInit {
  // listItems: PackingList[] = [
  //   { item: "bagel", complete: false },
  //   { item: "pancake", complete: false },
  //   { item: "toast", complete: false }
  // ];
  packingList: PackingList[] = [];

  newObject: PackingList = { item: "", complete: false };
  newItemString: string = "";

  // newItem: PackingList = { item: "", complete: false };
  // newItemText: string = "";
  constructor(private router: Router, private packingListService: PackingListService) {}

    displayList(){
      this.packingList = this.packingListService.getList();
      console.log(this.packingList);
    }

    checkItem(item){
      this.packingListService.completeItem(item);
    }

    removeItem(item){
      this.packingList = this.packingList.filter(x => x !== item);
      this.packingListService.delete(item);
      console.log(item);
      
    }

    addToList(){
      this.packingListService.setCustomWords(this.newItemString)
      this.packingListService.addItem();
      this.packingList = [
        ...this.packingList,
        { item: this.newItemString, complete: false }
      ];
    }
  // addItem() {
  //   this.listItems = [
  //     ...this.listItems,
  //     { item: this.newItemText, complete: false }
  //   ];
  // }

  // completeItem(item: PackingList): void {
  //   item.complete = !item.complete;
  // }

  // delete(item: PackingList): void {
  //   this.listItems = this.listItems.filter(x => x !== item);
  // }

  ngOnInit() {
    this.displayList();
  }
}
