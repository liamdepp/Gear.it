import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GearPost } from "../interfaces/gear-post";
import { NgForm } from "@angular/forms";
import { WeatherService } from "../services/weather.service";

@Component({
  selector: "app-gear-form",
  templateUrl: "./gear-form.component.html",
  styleUrls: ["./gear-form.component.css"]
})
export class GearFormComponent implements OnInit {
  gearMens: GearPost[] = [
    {
      activity: "Camp-Hike",
      tempRange: [1],
      image: "heavy-insulated-jacket-his.jpg",
      title: "Heavy Insulated Jacket",
      description:
        "Proper insulation is critical in colder climates. The more loft a jacket has, the more trapped air it can hold retaining the heat your body generates. Most down and synthetic options will feature a water-resistant exterior.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRange: [1, 2],
      image: "midlayer-his.jpg",
      title: "Midlayer",
      description:
        "A midlayer provides extra insulation that can be easily layered for added warmth. Look for ones with a deep zipper to allow venting for added breathability. Fleece or Merino Wool make excellent choices.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRange: [1, 2],
      image: "baselayer-his.jpg",
      title: "Baselayer",
      description:
        "Keeping your core warm while moving moisture away from your skin. Baselayers are your essential next-to-skin layer that keep you comfortable and dry.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRange: [1, 2, 3, 4],
      image: "hiking-socks-his.jpg",
      title: "Hiking Socks",
      description:
        "Keep your feet comfortable and dry while on the move. The heavier the cushion of the sock, the more moisture it can absorb. Merino wool is naturally antimicrobial allowing you to wear them multiple times without having to wash. Just make sure to rotate the pair that you wear each day.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRange: [1, 2, 3, 4],
      image: "underwear-his.jpg",
      title: "Fast Drying Underwear",
      description:
        "Don't leave home with out it. Synthetic or Merino Wool underwear are not only easy to wash by hand, but also take up much less space than traditional cotton underwear when traveling.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRange: [1, 2, 3, 4],
      image: "hiking-boots-his.jpg",
      title: "Hiking Boots",
      description:
        "Properly sized boots will give you the support and traction you need while out on the trail. Start to wear them a few weeks before your trip to make sure your feet are used to wearing them.",
      display: true
    },

    {
      activity: "Camp-Hike",
      tempRange: [2, 3, 4],
      image: "hardshell-his.jpg",
      title: "Waterproof Shell",
      description:
        "Worn as your outermost layer, a waterproof - windproof shell helps keep the elements out while keeping you dry.",
      display: true
    },
    {
      activity: "Urban Travel",
      tempRange: [1, 2, 3],
      image: "lightweight-shirt-his.jpg",
      title: "Lightweight Travel Shirt",
      description:
        "Made of synthetic or merino wool, these shirts can replace the traditional button down shirt working for both formal and casual events when out.",
      display: true
    },
    {
      activity: "Urban Travel",
      tempRange: [1, 2, 3],
      image: "sofshell-pants-his.jpg",
      title: "Sofshell Pants",
      description:
        "The look and cut of your favorite jeans without the weight. The added comfort and versatility of stretch and water-repellency make these a perfect choice for exploring the city.",
      display: true
    },
    {
      activity: "Urban Travel",
      tempRange: [1, 2, 3, 4],
      image: "med-cushion-socks-his.jpg",
      title: "Medium Cushion Socks",
      description:
        "Medium cushion socks provide an added layer of cushion especially for walking around city streets. Merino wool is naturally antimicrobial allowing you to wear them multiple times without having to wash. Just make sure to rotate the pair that you wear each day.",
      display: true
    },
    {
      activity: "Urban Travel",
      tempRange: [1, 2, 3, 4],
      image: "underwear-his.jpg",
      title: "Fast Drying Underwear",
      description:
        "Don't leave home with out it. Synthetic or Merino Wool underwear are not only easy to wash by hand, but also take up much less space than traditional cotton underwear when traveling.",
      display: true
    }
  ];

  gearWomens: GearPost[] = [
    {
      activity: "Camp-Hike",
      tempRange: [1],
      image: "heavy-insulated-jacket-hers.jpg",
      title: "Heavy Insulated Jacket",
      description:
        "Proper insulation is critical in colder climates. The more loft a jacket has, the more trapped air it can hold retaining your body heat. Most down and synthetic options will feature a water-resistant exterior.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRange: [1, 2, 3],
      image: "midlayer-hers.jpg",
      title: "Midlayer",
      description:
        "A midlayer provides extra insulation that can be easily layered for added warmth. Look for ones with a deep zipper to allow venting for added breathability. Fleece or Merino Wool make excellent choices.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRange: [1, 2],
      image: "baselayer-hers.jpg",
      title: "Baselayer",
      description:
        "Keeping your core warm while moving moisture away from your skin. Baselayers are your essential next-to-skin layer that keep you comfortable and dry.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRange: [1, 2, 3],
      image: "hiking-socks-hers.jpg",
      title: "Hiking Socks",
      description:
        "Keep your feet comfortable and dry while on the move. The heavier the cushion of the sock, the more moisture it can absorb. Merino wool is naturally antimicrobial allowing you to wear them multiple times without having to wash. Just make sure to rotate the pair that you wear each day.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRange: [1, 2, 3, 4],
      image: "underwear-hers.jpg",
      title: "Fast Drying Underwear",
      description:
        "Don't leave home with out it. Synthetic or Merino Wool underwear are not only easy to wash by hand, but also take up much less space than traditional cotton underwear when traveling.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRange: [1, 2, 3, 4],
      image: "hiking-boots-hers.jpg",
      title: "Hiking Boots",
      description:
        "Properly sized boots will give you the support and traction you need while out on the trail. Start to wear them a few weeks before your trip to make sure your feet are used to wearing them.",
      display: true
    },

    {
      activity: "Camp-Hike",
      tempRange: [2, 3, 4],
      image: "hardshell-hers.jpg",
      title: "Waterproof Shell",
      description:
        "Worn as your outermost layer, a waterproof - windproof shell helps keep the elements out while keeping you dry.",
      display: true
    },
    {
      activity: "Urban Travel",
      tempRange: [1, 2, 3],
      image: "sofshell-pants-hers.jpg",
      title: "Sofshell Pants",
      description:
        "The look and cut of your favorite jeans without the weight. The added comfort and versatility of stretch and water-repellency make these a perfect choice for exploring the city.",
      display: true
    },
    {
      activity: "Urban Travel",
      tempRange: [1, 2, 3, 4],
      image: "med-cushion-socks-hers.jpg",
      title: "Medium Cushion Socks",
      description:
        "Medium cushion socks provide an added layer of cushion especially for walking around city streets. Merino wool is naturally antimicrobial allowing you to wear them multiple times without having to wash. Just make sure to rotate the pair that you wear each day.",
      display: true
    }
  ];

  constructor(private router: Router, private weatherService: WeatherService) {}

  submitGearForm(form: NgForm) {
    let activity = form.value.activity;
    let location = form.value.location;
    this.weatherService.getLocalWeather(location);
    console.log(location);
  }

  ngOnInit() {}
}
