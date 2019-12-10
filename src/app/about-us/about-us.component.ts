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
      linkedIn: "",
      about: ""
    },
    {
      name: "Christian",
      linkedIn: "",
      about: ""
    },
    {
      name: "Liam",
      linkedIn: "",
      about: ""
    },
    {
      name: "Rion",
      linkedIn: "https://linkedin.com/in/rionnunez",
      about: "Rion is a front-end developer and designer "
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}
}
