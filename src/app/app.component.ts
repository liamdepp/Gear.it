import { Component, OnInit } from "@angular/core";
import { PackingListService } from "./services/packing-list.service";
import { FormsModule } from "@angular/forms";
import { slideInAnimation } from "./animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  title = "gearIt";
  constructor(private packingListService: PackingListService) {}
  counter: number;
  subscription = this.packingListService.getMessage().subscribe(counter => {
    this.counter = counter;
  });
  NgOnChanges() {}
  ngOnInit(): void {
    this.packingListService.sendMessageAdd().subscribe(counter => {
      this.counter = counter;
    });
  }

}
// This.subject.next
