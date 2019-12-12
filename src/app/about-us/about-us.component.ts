import { Component, OnInit } from "@angular/core";
import { AboutUs } from "../interfaces/about-us";
import { Router } from "@angular/router";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.css"]
})
export class AboutUsComponent implements OnInit {
  index: number;
  profiles: AboutUs[] = [
    {
      name: "Alicia",
      profilePic: "assets/aliciapic.jpg",
      linkedIn: "linkedin.com/in/alicia--martin/",
      about:
        "Alicia is a front-end developer with a background in biomedical science."
    },
    {
      name: "Christian",
      profilePic: "/assets/chrispic.jpg",
      linkedIn: "qqqqqqqq",
      about: "wwwwwwwwwww"
    },
    {
      name: "Liam",
      profilePic: "/assets/liampic.jpg",
      linkedIn: "aaaaaaaaaaaaa",
      about: "zzzzzzzzzzzzz"
    },
    {
      name: "Rion",
      profilePic: "/assets/rionpic.jpg",
      linkedIn: "linkedin.com/in/rionnunez",
      about: "ooooooooooooo"
    }
  ];

  displayInfo(index: number): void {
    if (this.index === null) {
      this.index = index;
    } else {
      this.index = null;
    }
  }

  constructor(private router: Router) {}

  ngOnInit() {}
}
