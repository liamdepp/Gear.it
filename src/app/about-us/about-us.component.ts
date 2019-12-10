import { Component, OnInit } from "@angular/core";
import { AboutUs } from "../interfaces/about-us";
import { Router } from "@angular/router";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.css"]
})
export class AboutUsComponent implements OnInit {
  profiles: AboutUs[] = [
    {
      name: "Alicia",
      linkedIn: "linkedin.com/in/alicia--martin/",
      about:
        "Alicia is a front-end developer with a background in biomedical science."
    },
    {
      name: "Christian",
      linkedIn: "qqqqqqqq",
      about: "wwwwwwwwwww"
    },
    {
      name: "Liam",
      linkedIn: "aaaaaaaaaaaaa",
      about: "zzzzzzzzzzzzz"
    },
    {
      name: "Rion",
      linkedIn: "rrrrrrrrrrrrrr",
      about: "ooooooooooooo"
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}
}
