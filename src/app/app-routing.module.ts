import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { PackingListComponent } from "./packing-list/packing-list.component";
import { DisplayWeatherComponent } from "./display-weather/display-weather.component";
import { GearFormComponent } from "./gear-form/gear-form.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    component: HomepageComponent,
    data: { animation: "Home" }
  },
  {
    path: "gear-form",
    component: GearFormComponent,
    data: { animation: "GearForm" }
  },
  {
    path: "packing-list",
    component: PackingListComponent,
    data: { animation: "PackingList" }
  },
  {
    path: "about-us",
    component: AboutUsComponent,
    data: { animation: "AboutUs" }
  },
  {
    path: "display-weather",
    component: DisplayWeatherComponent,
    data: { animation: "DisplayWeather" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
