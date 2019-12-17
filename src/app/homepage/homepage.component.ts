import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent implements OnInit {
  imageUrls: string = [
    { "/src/assets/back01.jpg" },
    { "/src/assets/back02.jpg" }
  ];
  height: string = "400px";
  minHeight: string;
  arrowSize: string = "30px";
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = "cover";
  backgroundPosition: string = "center center";
  backgroundRepeat: string = "no-repeat";
  showDots: boolean = true;
  dotColor: string = "#FFF";
  showCaptions: boolean = true;
  captionColor: string = "#FFF";
  captionBackground: string = "rgba(0, 0, 0, .35)";
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = "100%";
  fullscreen: boolean = false;
  enableZoom: boolean = false;
  enablePan: boolean = false;
  noLoop: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}
}
