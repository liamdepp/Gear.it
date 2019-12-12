import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GearPost } from "../interfaces/gear-post";
import { NgForm } from "@angular/forms";
import { WeatherService } from "../services/weather.service";
import { PackingListService } from '../services/packing-list.service';

@Component({
  selector: "app-gear-form",
  templateUrl: "./gear-form.component.html",
  styleUrls: ["./gear-form.component.css"]
})
export class GearFormComponent implements OnInit {
  localWeather: number; 
  localActivity: string;
  localLocation: string;
  localCountry: string;
  shownGearMens: GearPost[] = [];
  shownGearWomens: GearPost[] = [];
  mensDisplay: boolean = true;
  gearMens: GearPost[] = [
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh:32,
      image: "heavy-insulated-jacket-his.jpg",
      title: "Heavy Insulated Jacket",
      description:
        "Proper insulation is critical in colder climates. The more loft a jacket has, the more trapped air it can hold retaining the heat your body generates. Most down and synthetic options will feature a water-resistant exterior.",
      display: true,
      packingName: {
        item: "Heavy Insulated Jacket",
        complete: false
      }
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 55,
      image: "midlayer-his.jpg",
      title: "Midlayer",
      description:
        "A midlayer provides extra insulation that can be easily layered for added warmth. Look for ones with a deep zipper to allow venting for added breathability. Fleece or Merino Wool make excellent choices.",
      display: true,
      packingName: {
        item: "Midlayer Sweater",
        complete: false
      }
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 55,
      image: "baselayer-his.jpg",
      title: "Baselayer",
      description:
        "Keeping your core warm while moving moisture away from your skin. Baselayers are your essential next-to-skin layer that keep you comfortable and dry.",
      display: true,
      packingName: {
        item: "Baselayer Shirt",
        complete: false
      }
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "hiking-socks-his.jpg",
      title: "Hiking Socks",
      description:
        "Keep your feet comfortable and dry while on the move. The heavier the cushion of the sock, the more moisture it can absorb. Merino wool is naturally antimicrobial allowing you to wear them multiple times without having to wash. Just make sure to rotate the pair that you wear each day.",
      display: true,
      packingName: {
        item: "Hiking Socks",
        complete: false
      }
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "underwear-his.jpg",
      title: "Fast Drying Underwear",
      description:
        "Don't leave home with out it. Synthetic or Merino Wool underwear are not only easy to wash by hand, but also take up much less space than traditional cotton underwear when traveling.",
      display: true,
      packingName: {
        item: "Fast Drying Underwear",
        complete: false
      }
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "hiking-boots-his.jpg",
      title: "Hiking Boots",
      description:
        "Properly sized boots will give you the support and traction you need while out on the trail. Start to wear them a few weeks before your trip to make sure your feet are used to wearing them.",
      display: true,
      packingName: {
        item: "Hiking Boots",
        complete: false
      }
    },

    {
      activity: "Camp-Hike",
      tempRangeLow: 33,
      tempRangeHigh: 120,
      image: "hardshell-his.jpg",
      title: "Waterproof Shell",
      description:
        "Worn as your outermost layer, a waterproof - windproof shell helps keep the elements out while keeping you dry.",
      display: true,
      packingName: {
        item: "Waterproof Jacket",
        complete: false
      }
    },
    {
      activity: "Urban Travel",
      tempRangeLow: -20,
      tempRangeHigh: 70,
      image: "lightweight-shirt-his.jpg",
      title: "Lightweight Travel Shirt",
      description:
        "Made of synthetic or merino wool, these shirts can replace the traditional button down shirt working for both formal and casual events when out.",
      display: true,
      packingName: {
        item: "Travel Shirt",
        complete: false
      }
    },
    {
      activity: "Urban Travel",
      tempRangeLow: -20,
      tempRangeHigh: 70,
      image: "sofshell-pants-his.jpg",
      title: "Sofshell Pants",
      description:
        "The look and cut of your favorite jeans without the weight. The added comfort and versatility of stretch and water-repellency make these a perfect choice for exploring the city.",
      display: true,
      packingName: {
        item: "Softshell Pants",
        complete: false
      }
    },
    {
      activity: "Urban Travel",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "med-cushion-socks-his.jpg",
      title: "Medium Cushion Socks",
      description:
        "Medium cushion socks provide an added layer of cushion especially for walking around city streets. Merino wool is naturally antimicrobial allowing you to wear them multiple times without having to wash. Just make sure to rotate the pair that you wear each day.",
      display: true,
      packingName: {
        item: "Cushioned Socks",
        complete: false
      }
    },
    {
      activity: "Urban Travel",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "underwear-his.jpg",
      title: "Fast Drying Underwear",
      description:
        "Don't leave home with out it. Synthetic or Merino Wool underwear are not only easy to wash by hand, but also take up much less space than traditional cotton underwear when traveling.",
      display: true,
      packingName: {
        item: "Fast Drying Underwear",
        complete: false
      }
    }
  ];

  gearWomens: GearPost[] = [
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 32,
      image: "heavy-insulated-jacket-hers.jpg",
      title: "Heavy Insulated Jacket",
      description:
        "Proper insulation is critical in colder climates. The more loft a jacket has, the more trapped air it can hold retaining your body heat. Most down and synthetic options will feature a water-resistant exterior.",
      display: true,
      packingName: {
        item: "Heavy Insulated Jacket",
        complete: false
      }
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 70,
      image: "midlayer-hers.jpg",
      title: "Midlayer",
      description:
        "A midlayer provides extra insulation that can be easily layered for added warmth. Look for ones with a deep zipper to allow venting for added breathability. Fleece or Merino Wool make excellent choices.",
      display: true,
      packingName: {
        item: "Midlayer Sweater",
        complete: false
      }
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 70,
      image: "baselayer-hers.jpg",
      title: "Baselayer",
      description:
        "Keeping your core warm while moving moisture away from your skin. Baselayers are your essential next-to-skin layer that keep you comfortable and dry.",
      display: true,
      packingName: {
        item: "Baselayer Shirt",
        complete: false
      }
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 70,
      image: "hiking-socks-hers.jpg",
      title: "Hiking Socks",
      description:
        "Keep your feet comfortable and dry while on the move. The heavier the cushion of the sock, the more moisture it can absorb. Merino wool is naturally antimicrobial allowing you to wear them multiple times without having to wash. Just make sure to rotate the pair that you wear each day.",
      display: true,
      packingName: {
        item: "Hiking Socks",
        complete: false
      }
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "underwear-hers.jpg",
      title: "Fast Drying Underwear",
      description:
        "Don't leave home with out it. Synthetic or Merino Wool underwear are not only easy to wash by hand, but also take up much less space than traditional cotton underwear when traveling.",
      display: true,
      packingName: {
        item: "Fast Drying Underwear",
        complete: false
      }
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "hiking-boots-hers.jpg",
      title: "Hiking Boots",
      description:
        "Properly sized boots will give you the support and traction you need while out on the trail. Start to wear them a few weeks before your trip to make sure your feet are used to wearing them.",
      display: true,
      packingName: {
        item: "Hiking Boots",
        complete: false
      }
    },

    {
      activity: "Camp-Hike",
      tempRangeLow: 33,
      tempRangeHigh: 70,
      image: "hardshell-hers.jpg",
      title: "Waterproof Shell",
      description:
        "Worn as your outermost layer, a waterproof - windproof shell helps keep the elements out while keeping you dry.",
      display: true,
      packingName: {
        item: "Waterproof Shell",
        complete: false
      }
    },
    {
      activity: "Urban Travel",
      tempRangeLow: -20,
      tempRangeHigh: 70,
      image: "sofshell-pants-hers.jpg",
      title: "Sofshell Pants",
      description:
        "The look and cut of your favorite jeans without the weight. The added comfort and versatility of stretch and water-repellency make these a perfect choice for exploring the city.",
      display: true,
      packingName: {
        item: "Softshell Pants",
        complete: false
      }
    },
    {
      activity: "Urban Travel",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "med-cushion-socks-hers.jpg",
      title: "Medium Cushion Socks",
      description:
        "Medium cushion socks provide an added layer of cushion especially for walking around city streets. Merino wool is naturally antimicrobial allowing you to wear them multiple times without having to wash. Just make sure to rotate the pair that you wear each day.",
      display: true,
      packingName: {
        item: "Cushioned Socks",
        complete: false
      }
    }
  ];

  constructor(private router: Router, private weatherService: WeatherService, private packingListService: PackingListService) {}

  submitGearFormWeather(form: NgForm) {
    let activity = form.value.activity;
    let location = form.value.location;
    this.weatherService.getLocalWeather(location).subscribe(data => {
      this.localWeather = data.main.temp;
      this.localLocation = data.name;
      this.localCountry = data.sys.country;
      console.log(this.localWeather);
      this.pushDesiredGearMen();
      this.pushDesiredGearWomen();
    });
    this.localActivity = activity;
    console.log(this.localActivity); 
  }

  pushDesiredGearMen(): void {
    for(let gear of this.gearMens){
      if(gear.tempRangeLow <=this.localWeather && gear.tempRangeHigh >= this.localWeather && gear.activity === this.localActivity) {
        this.shownGearMens.push(gear);
      }
    }
    console.log(this.shownGearMens);
  }

  pushDesiredGearWomen(): void {
    for(let gear of this.gearWomens){
      if(gear.tempRangeLow <=this.localWeather && gear.tempRangeHigh >= this.localWeather && gear.activity === this.localActivity) {
        this.shownGearWomens.push(gear);
      }
    }
    console.log(this.shownGearWomens);
  }

  setWomens(){
    this.mensDisplay = false;
  }

  setMens(){
    this.mensDisplay = true;
  }

  addToPackingList(item) {
    for(let gear of this.gearMens){
      if(gear === item){
        this.packingListService.setCustomWords(gear.title);
        this.packingListService.addItem();
      }
    }
  }

  ngOnInit() {}
}
