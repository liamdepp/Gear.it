import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GearPost } from "../interfaces/gear-post";
import { NgForm } from "@angular/forms";
import { WeatherService } from "../services/weather.service";
import { PackingListService } from "../services/packing-list.service";

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
  localForcast: string;
  shownGearMens: GearPost[] = [];
  shownGearWomens: GearPost[] = [];
  mensDisplay: boolean = true;
  gearMens: GearPost[] = [
    // Men's Camp-Hike
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 32,
      image: "heavy-insulated-parka-his.jpg",
      title: "Heavy Insulated Parka",
      description:
        "Proper insulation is critical in colder climates. The more loft (puffiness) a jacket has, the more trapped air it can hold retaining the heat your body generates. Most down and synthetic options will feature a water-resistant exterior.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 55,
      image: "thermal-midlayer-his.jpg",
      title: "Thermal Midlayer",
      description:
        "A thermal midlayer provides extra insulation that can be easily layered for added warmth. Look for ones with a deep front zipper to allow venting for added breathability. Fleece or Merino Wool make excellent choices.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: 55,
      tempRangeHigh: 120,
      image: "lightweight-ls-shirt-his.jpg",
      title: "Lightweight Long Sleeve Shirt",
      description:
        "A lightweight and breathable long sleeve shirt can help you stay out in the elements longer by keeping your skin protected from the sun. Seek out ones with a high UPF factor that allows less UV rays through the fabric. These shirts feature back vents to keep you cool in hotter temps.",
      display: true
    },

    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 32,
      image: "insulated-sofshell-pants-his.jpg",
      title: "Insulated Sofshell Pants",
      description:
        "Stay warm while keeping out the elements with a pair of insulated softshell pants. The stretch of the fabric allows for greater freedom of movement for more active pursuits finished with a water-repellent coating.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: 55,
      tempRangeHigh: 120,
      image: "lightweight-convertible-pants-his.jpg",
      title: "Lightweight Convertible Pants",
      description:
        "These multi-use pants can easily zip off the lower section of each leg converting them into shorts when the temperature starts to rise. Also look for options that are treated with InsectShield or other bug repellency to further protect you from insects that can carry diseases.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 55,
      image: "baselayer-his.jpg",
      title: "Baselayer",
      description:
        "Keeping your core warm while moving moisture away from your skin. Baselayers are your essential next-to-skin layer that keep you comfortable and dry.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "hiking-socks-his.jpg",
      title: "Hiking Socks",
      description:
        "Keep your feet comfortable and dry while on the move. The heavier the cushion of the sock, the more moisture it can absorb. Merino wool is naturally antimicrobial allowing you to wear them multiple times without having to wash. Just make sure to rotate the pair that you wear each day.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "underwear-his.jpg",
      title: "Fast Drying Underwear",
      description:
        "Don't leave home with out it. Synthetic or Merino Wool underwear are not only easy to wash by hand, but also take up much less space than traditional cotton underwear when traveling.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "hiking-boots-his.jpg",
      title: "Hiking Boots",
      description:
        "Properly sized boots will give you the support and traction you need while out on the trail. Start to wear them a few weeks before your trip to make sure your feet are used to wearing them.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: 55,
      tempRangeHigh: 120,
      image: "hiking-shoe-his.jpg",
      title: "Hiking Shoes",
      description:
        "Lighter weight and more flexible than a traditional hiking boot, hiking shoes have the out-of-the-box comfort of a casual shoe, with increased lugs for better traction on mixed terrain. Opt for a pair that feature a GoreTex laminate for waterproof coverage in more inclement weather",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: 71,
      tempRangeHigh: 120,
      image: "hiking-sandals-his.jpg",
      title: "Hiking Sandals",
      description:
        "Sandals with proper traction and front toe protection will keep your feet comfortable whether it's trekking city streets or the trail.",
      display: true
    },

    {
      activity: "Camp-Hike",
      tempRangeLow: 33,
      tempRangeHigh: 120,
      image: "hardshell-his.jpg",
      title: "Waterproof Shell",
      description:
        "Worn as your outermost layer, a waterproof - windproof shell helps keep the elements out while keeping you dry.",
      display: true
    },
    // Men's Urban Travel
    {
      activity: "Urban Travel",
      tempRangeLow: -20,
      tempRangeHigh: 32,
      image: "casual-heavy-insulated-parka-his.jpg",
      title: "Heavy Insulated Parka",
      description:
        "Proper insulation is critical in colder climates. The more loft (puffiness) a jacket has, the more trapped air it can hold retaining the heat your body generates. Most down and synthetic options will feature a water-resistant exterior.",
      display: true
    },
    {
      activity: "Urban Travel",
      tempRangeLow: -20,
      tempRangeHigh: 70,
      image: "lightweight-shirt-his.jpg",
      title: "Lightweight Travel Shirt",
      description:
        "Made of synthetic or merino wool, these shirts can replace the traditional button down shirt working for both formal and casual events when out.",
      display: true
    },
    {
      activity: "Urban Travel",
      tempRangeLow: -20,
      tempRangeHigh: 70,
      image: "sofshell-pants-his.jpg",
      title: "Sofshell Pants",
      description:
        "The look and cut of your favorite jeans without the weight. The added comfort and versatility of stretch and water-repellency make these a perfect choice for exploring the city.",
      display: true
    },
    {
      activity: "Urban Travel",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "med-cushion-socks-his.jpg",
      title: "Medium Cushion Socks",
      description:
        "Medium cushion socks provide an added layer of cushion especially for walking around city streets. Merino wool is naturally antimicrobial allowing you to wear them multiple times without having to wash. Just make sure to rotate the pair that you wear each day.",
      display: true
    },
    {
      activity: "Urban Travel",
      tempRangeLow: 55,
      tempRangeHigh: 120,
      image: "hiking-shoe-his.jpg",
      title: "Hiking Shoes",
      description:
        "Lighter weight and more flexible than a traditional hiking boot, hiking shoes have the out-of-the-box comfort of a casual shoe, with increased lugs for better traction on mixed terrain. Opt for a pair that feature a GoreTex laminate for waterproof coverage in more inclement weather",
      display: true
    },
    {
      activity: "Urban Travel",
      tempRangeLow: -20,
      tempRangeHigh: 55,
      image: "casual-waterproof-boot-his.jpg",
      title: "Waterproof Boots",
      description:
        "Great for everyday with waterproof construction to keep your feet dry with enough tread and traction for walking city streets.",
      display: true
    },
    {
      activity: "Urban Travel",
      tempRangeLow: 71,
      tempRangeHigh: 120,
      image: "hiking-sandals-his.jpg",
      title: "Hiking Sandals",
      description:
        "Sandals with proper traction and front toe protection will keep your feet comfortable whether it's trekking city streets or the trail.",
      display: true
    },
    {
      activity: "Urban Travel",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "underwear-his.jpg",
      title: "Fast Drying Underwear",
      description:
        "Don't leave home with out it. Synthetic or Merino Wool underwear are not only easy to wash by hand, but also take up much less space than traditional cotton underwear when traveling.",
      display: true
    },

    // Men's Summer
    {
      activity: "Summer",
      tempRangeLow: 55,
      tempRangeHigh: 120,
      image: "lightweight-hoody-his.jpg",
      title: "Lightweight Hoody",
      description:
        "A lightweight synthetic hoody will give you added coverage and protection from the suns UV rays while still being breathable and moisture wicking.",
      display: true
    },
    {
      activity: "Summer",
      tempRangeLow: 55,
      tempRangeHigh: 120,
      image: "lightweight-ss-tee-his.jpg",
      title: "Lightweight Short Sleeve Tee",
      description:
        "A lightweight synthetic tee works well in hot climates moving moisture away from your skin and keeping you dry. It can be worn on its own or underneath a lighweight hoody.",
      display: true
    },
    {
      activity: "Summer",
      tempRangeLow: 55,
      tempRangeHigh: 120,
      image: "boardshorts-his.jpg",
      title: "Boardshorts",
      description:
        "Lightweight and fast drying, a pair of boardshorts work great for stand up paddleboarding or kayaking. You can pair them with a pair of fast drying underwear so there's no need to change for dinner after a day on the water.",
      display: true
    },
    {
      activity: "Summer",
      tempRangeLow: 55,
      tempRangeHigh: 120,
      image: "hiking-shoe-his.jpg",
      title: "Hiking Shoes",
      description:
        "Lighter weight and more flexible than a traditional hiking boot, hiking shoes have the out-of-the-box comfort of a casual shoe, with increased lugs for better traction on mixed terrain. Opt for a pair that feature a GoreTex laminate for waterproof coverage in more inclement weather",
      display: true
    },
    {
      activity: "Summer",
      tempRangeLow: 71,
      tempRangeHigh: 120,
      image: "hiking-sandals-his.jpg",
      title: "Hiking Sandals",
      description:
        "Sandals with proper traction and front toe protection will keep your feet comfortable whether it's trekking city streets or the trail.",
      display: true
    },
    {
      activity: "Summer",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "underwear-his.jpg",
      title: "Fast Drying Underwear",
      description:
        "Don't leave home with out it. Synthetic or Merino Wool underwear are not only easy to wash by hand, but also take up much less space than traditional cotton underwear when traveling.",
      display: true
    },
    // Men's Winter
    {
      activity: "Winter",
      tempRangeLow: -20,
      tempRangeHigh: 55,
      image: "thermal-midlayer-his.jpg",
      title: "Thermal Midlayer",
      description:
        "A thermal midlayer provides extra insulation that can be easily layered for added warmth. Look for ones with a deep front zipper to allow venting for added breathability. Fleece or Merino Wool make excellent choices.",
      display: true
    },
    {
      activity: "Winter",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "underwear-his.jpg",
      title: "Fast Drying Underwear",
      description:
        "Don't leave home with out it. Synthetic or Merino Wool underwear are not only easy to wash by hand, but also take up much less space than traditional cotton underwear when traveling.",
      display: true
    }
  ];

  gearWomens: GearPost[] = [
    // Women's Camp-Hike
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 32,
      image: "heavy-insulated-parka-hers.jpg",
      title: "Heavy Insulated Parka",
      description:
        "Proper insulation is critical in colder climates. The more loft (puffiness) a jacket has, the more trapped air it can hold retaining your body heat. Most down and synthetic options will feature a water-resistant exterior.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 70,
      image: "thermal-midlayer-hers.jpg",
      title: "Thermal Midlayer",
      description:
        "A thermal midlayer provides extra insulation that can be easily layered for added warmth. Look for ones with a deep front zipper to allow venting for added breathability. Fleece or Merino Wool make excellent choices.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: 55,
      tempRangeHigh: 120,
      image: "lightweight-ls-shirt-hers.jpg",
      title: "Lightweight Long Sleeve Shirt",
      description:
        "A lightweight and breathable long sleeve shirt can help you stay out in the elements longer by keeping your skin protected from the sun. Seek out ones with a high UPF factor that allows less UV rays through the fabric. These shirts feature back vents to keep you cool in hotter temps.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 32,
      image: "insulated-sofshell-pants-hers.jpg",
      title: "Insulated Sofshell Pants",
      description:
        "Stay warm while keeping out the elements with a pair of insulated softshell pants. The stretch of the fabric allows for greater freedom of movement for more active pursuits finished with a water-repellent coating.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: 55,
      tempRangeHigh: 120,
      image: "lightweight-convertible-pants-hers.jpg",
      title: "Lightweight Convertible Pants",
      description:
        "These multiuse pants can easily zip off the lower section of each leg converting them into shorts when the temperature starts to rise. Also look for options that are treated with InsectShield or other bug repellency to further protect you from insects that can carry diseases.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 70,
      image: "baselayer-hers.jpg",
      title: "Baselayer",
      description:
        "Keeping your core warm while moving moisture away from your skin. Baselayers are your essential next-to-skin layer that keep you comfortable and dry.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "hiking-socks-hers.jpg",
      title: "Hiking Socks",
      description:
        "Keep your feet comfortable and dry while on the move. The heavier the cushion of the sock, the more moisture it can absorb. Merino wool is naturally antimicrobial allowing you to wear them multiple times without having to wash. Just make sure to rotate the pair that you wear each day.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "underwear-hers.jpg",
      title: "Fast Drying Underwear",
      description:
        "Don't leave home with out it. Synthetic or Merino Wool underwear are not only easy to wash by hand, but also take up much less space than traditional cotton underwear when traveling.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "hiking-boots-hers.jpg",
      title: "Hiking Boots",
      description:
        "Properly sized boots will give you the support and traction you need while out on the trail. Start to wear them a few weeks before your trip to make sure your feet are used to wearing them.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: 55,
      tempRangeHigh: 120,
      image: "hiking-shoe-hers.jpg",
      title: "Hiking Shoes",
      description:
        "Lighter weight and more flexible than a traditional hiking boot, hiking shoes have the out-of-the-box comfort of a casual shoe, with increased lugs for better traction on mixed terrain. Opt for a pair that feature a GoreTex laminate for waterproof coverage in more inclement weather",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: 71,
      tempRangeHigh: 120,
      image: "hiking-sandals-hers.jpg",
      title: "Hiking Sandals",
      description:
        "Sandals with proper traction and front toe protection will keep your feet comfortable whether it's trekking city streets or the trail.",
      display: true
    },
    {
      activity: "Camp-Hike",
      tempRangeLow: 33,
      tempRangeHigh: 70,
      image: "hardshell-hers.jpg",
      title: "Waterproof Shell",
      description:
        "Worn as your outermost layer, a waterproof - windproof shell helps keep the elements out while keeping you dry.",
      display: true
    },
    // Women's Urban Travel
    {
      activity: "Urban Travel",
      tempRangeLow: -20,
      tempRangeHigh: 32,
      image: "casual-heavy-insulated-parka-hers.jpg",
      title: "Heavy Insulated Parka",
      description:
        "Proper insulation is critical in colder climates. The more loft (puffiness) a jacket has, the more trapped air it can hold retaining the heat your body generates. Most down and synthetic options will feature a water-resistant exterior.",
      display: true
    },
    {
      activity: "Urban Travel",
      tempRangeLow: -20,
      tempRangeHigh: 70,
      image: "lightweight-shirt-hers.jpg",
      title: "Lightweight Travel Shirt",
      description:
        "Made of synthetic or merino wool, these shirts can replace the traditional button down shirt working for both formal and casual events when out.",
      display: true
    },
    {
      activity: "Urban Travel",
      tempRangeLow: -20,
      tempRangeHigh: 70,
      image: "sofshell-pants-hers.jpg",
      title: "Sofshell Pants",
      description:
        "The look and cut of your favorite jeans without the weight. The added comfort and versatility of stretch and water-repellency make these a perfect choice for exploring the city.",
      display: true
    },
    {
      activity: "Urban Travel",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "med-cushion-socks-hers.jpg",
      title: "Medium Cushion Socks",
      description:
        "Medium cushion socks provide an added layer of cushion especially for walking around city streets. Merino wool is naturally antimicrobial allowing you to wear them multiple times without having to wash. Just make sure to rotate the pair that you wear each day.",
      display: true
    },
    {
      activity: "Urban Travel",
      tempRangeLow: 55,
      tempRangeHigh: 120,
      image: "hiking-shoe-hers.jpg",
      title: "Hiking Shoes",
      description:
        "Lighter weight and more flexible than a traditional hiking boot, hiking shoes have the out-of-the-box comfort of a casual shoe, with increased lugs for better traction on mixed terrain. Opt for a pair that feature a GoreTex laminate for waterproof coverage in more inclement weather",
      display: true
    },
    {
      activity: "Urban Travel",
      tempRangeLow: -20,
      tempRangeHigh: 55,
      image: "casual-waterproof-boot-hers.jpg",
      title: "Waterproof Boots",
      description:
        "Great for everyday with waterproof construction to keep your feet dry with enough tread and traction for walking city streets.",
      display: true
    },
    {
      activity: "Urban Travel",
      tempRangeLow: 71,
      tempRangeHigh: 120,
      image: "hiking-sandals-hers.jpg",
      title: "Hiking Sandals",
      description:
        "Sandals with proper traction and front toe protection will keep your feet comfortable whether it's trekking city streets or the trail.",
      display: true
    },
    {
      activity: "Urban Travel",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "underwear-hers.jpg",
      title: "Fast Drying Underwear",
      description:
        "Don't leave home with out it. Synthetic or Merino Wool underwear are not only easy to wash by hand, but also take up much less space than traditional cotton underwear when traveling.",
      display: true
    },
    // Women's Summer
    {
      activity: "Summer",
      tempRangeLow: 55,
      tempRangeHigh: 120,
      image: "lightweight-hoody-hers.jpg",
      title: "Lightweight Hoody",
      description:
        "A lightweight synthetic hoody will give you added coverage and protection from the suns UV rays while still being breathable and moisture wicking.",
      display: true
    },
    {
      activity: "Summer",
      tempRangeLow: 55,
      tempRangeHigh: 120,
      image: "lightweight-ss-tee-hers.jpg",
      title: "Lightweight Short Sleeve Tee",
      description:
        "A lightweight synthetic tee works well in hot climates moving moisture away from your skin and keeping you dry. It can be worn on its own or underneath a lighweight hoody.",
      display: true
    },
    {
      activity: "Summer",
      tempRangeLow: 55,
      tempRangeHigh: 120,
      image: "boardshorts-hers.jpg",
      title: "Boardshorts",
      description:
        "Lightweight and fast drying, a pair of boardshorts work great for stand up paddleboarding or kayaking. You can pair them with a pair of fast drying underwear so there's no need to change for dinner after a day on the water.",
      display: true
    },
    {
      activity: "Summer",
      tempRangeLow: 55,
      tempRangeHigh: 120,
      image: "hiking-shoe-hers.jpg",
      title: "Hiking Shoes",
      description:
        "Lighter weight and more flexible than a traditional hiking boot, hiking shoes have the out-of-the-box comfort of a casual shoe, with increased lugs for better traction on mixed terrain. Opt for a pair that feature a GoreTex laminate for waterproof coverage in more inclement weather",
      display: true
    },
    {
      activity: "Summer",
      tempRangeLow: 71,
      tempRangeHigh: 120,
      image: "hiking-sandals-hers.jpg",
      title: "Hiking Sandals",
      description:
        "Sandals with proper traction and front toe protection will keep your feet comfortable whether it's trekking city streets or the trail.",
      display: true
    },
    {
      activity: "Summer",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "underwear-hers.jpg",
      title: "Fast Drying Underwear",
      description:
        "Don't leave home with out it. Synthetic or Merino Wool underwear are not only easy to wash by hand, but also take up much less space than traditional cotton underwear when traveling.",
      display: true
    },
    // Women's Winter
    {
      activity: "Winter",
      tempRangeLow: -20,
      tempRangeHigh: 70,
      image: "thermal-midlayer-hers.jpg",
      title: "Thermal Midlayer",
      description:
        "A thermal midlayer provides extra insulation that can be easily layered for added warmth. Look for ones with a deep front zipper to allow venting for added breathability. Fleece or Merino Wool make excellent choices.",
      display: true
    },
    {
      activity: "Winter",
      tempRangeLow: -20,
      tempRangeHigh: 120,
      image: "underwear-hers.jpg",
      title: "Fast Drying Underwear",
      description:
        "Don't leave home with out it. Synthetic or Merino Wool underwear are not only easy to wash by hand, but also take up much less space than traditional cotton underwear when traveling.",
      display: true
    }
  ];

  constructor(
    private router: Router,
    private weatherService: WeatherService,
    private packingListService: PackingListService
  ) {}

  submitGearFormWeather(form: NgForm) {
    let activity = form.value.activity;
    let location = form.value.location;
    this.weatherService.getLocalWeather(location).subscribe(data => {
      this.localWeather = data.main.temp;
      this.localLocation = data.name;
      this.localCountry = data.sys.country;
      this.localForcast = data.weather.main;
      console.log(this.localWeather);
      this.shownGearMens = [];
      this.shownGearWomens = [];
      this.pushDesiredGearMen();
      this.pushDesiredGearWomen();
    });
    this.localActivity = activity;
    console.log(this.localActivity);
  }

  pushDesiredGearMen(): void {
    for (let gear of this.gearMens) {
      if (
        gear.tempRangeLow <= this.localWeather &&
        gear.tempRangeHigh >= this.localWeather &&
        gear.activity === this.localActivity
      ) {
        this.shownGearMens.push(gear);
      }
    }
    console.log(this.shownGearMens);
  }

  pushDesiredGearWomen(): void {
    for (let gear of this.gearWomens) {
      if (
        gear.tempRangeLow <= this.localWeather &&
        gear.tempRangeHigh >= this.localWeather &&
        gear.activity === this.localActivity
      ) {
        this.shownGearWomens.push(gear);
      }
    }
    console.log(this.shownGearWomens);
  }

  setWomens() {
    this.mensDisplay = false;
  }

  setMens() {
    this.mensDisplay = true;
  }

  addToPackingList(item) {
    for (let gear of this.gearMens) {
      if (gear === item) {
        this.packingListService.setCustomWords(gear.title);
        this.packingListService.addItem();
        gear.display === false;
      }
    }
  }

  index: number;
  toggleDescription(index: number): void {
    if (this.index === null) {
      this.index = index;
    } else {
      this.index = null;
    }
  }
  ngOnInit() {}
}
