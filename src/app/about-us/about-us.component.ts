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
      name: "Alicia M.",
      profilePic: "assets/aliciapic.jpg",
      linkedIn: "https://www.linkedin.com/in/alicia--martin/",
      about:
        "Alicia is a front-end developer with a background in biomedical science."
    },
    {
      name: "Christian C.",
      profilePic: "/assets/chrispic.jpg",
      linkedIn: "https://www.linkedin.com/in/christianchristian/",
      about:
        "Christian, a recent highschool grad with a love for technology and creativity."
    },
    {
      name: "Liam D.",
      profilePic: "/assets/liampic.jpg",
      linkedIn: "https://www.linkedin.com/in/liamdeppong",
      about: "Liam is a former Movie theater manager turned front-end developer. Focused "
    },
    {
      name: "Rion N.",
      profilePic: "/assets/rionpic.jpg",
      linkedIn: "https://www.linkedin.com/in/rionnunez",
      about:
        "Rion is a Front-End Developer and designer with a background in the outdoor industry."
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}
}
