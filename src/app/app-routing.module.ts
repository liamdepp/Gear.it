import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { PackingListComponent } from "./packing-list/packing-list.component";
import { DisplayWeatherComponent } from "./display-weather/display-weather.component";
import { GearFormComponent } from "./gear-form/gear-form.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "about-us",
    component: AboutUsComponent,
    data: { animation: "isRight" }
  },
  {
    path: "home",
    component: HomepageComponent,
    data: { animation: "isRight" }
  },
  {
    path: "packing-list",
    component: PackingListComponent,
    data: { animation: "isRight" }
  },
  {
    path: "display-weather",
    component: DisplayWeatherComponent,
    data: { animation: "isRight" }
  },
  {
    path: "gear-form",
    component: GearFormComponent,
    data: { animation: "isRight" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
