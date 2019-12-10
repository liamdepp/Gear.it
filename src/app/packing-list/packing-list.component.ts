import { Component, OnInit } from "@angular/core";
import { PackingList } from "../interfaces/packing-list";
import { isNgTemplate } from "@angular/compiler";

import { Router } from "@angular/router";

@Component({
  selector: "app-packing-list",
  templateUrl: "./packing-list.component.html",
  styleUrls: ["./packing-list.component.css"]
})
export class PackingListComponent implements OnInit {
  listItems: PackingList[] = [
    { item: "bagel", complete: false },
    { item: "pancake", complete: false },
    { item: "toast", complete: false }
  ];

  newItem: PackingList = { item: "", complete: false };
  newItemText: string = "";
  constructor(private router: Router) {}

  addItem() {
    this.listItems = [
      ...this.listItems,
      { item: this.newItemText, complete: false }
    ];
  }

  completeItem(item: PackingList): void {
    item.complete = !item.complete;
  }

  delete(item: PackingList): void {
    this.listItems = this.listItems.filter(x => x !== item);
  }

  ngOnInit() {}
}
