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
      about: "wwwww ww www wwwwww wwww ww wwww wwwwwww wwwwww wwww www ww www wwwwww"
    },
    {
      name: "Liam",
      profilePic: "/assets/liampic.jpg",
      linkedIn: "aaaaaaaaaaaaa",
      about: "zzzzzzz zzzzzzz zzzzzzz zzzzz zz zz zz zzzzzzzzzz zzzzzz zz zz zzzzz zz zzzz zz"
    },
    {
      name: "Rion",
      profilePic: "/assets/rionpic.jpg",
      linkedIn: "linkedin.com/in/rionnunez",
      about: "ooo oooo oooo o ooo oooo oooooo ooooooooo ooo oooo ooo ooooo oo"
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}
}
