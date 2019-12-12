import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DisplayWeatherComponent } from "./display-weather/display-weather.component";
import { HttpClientModule } from "@angular/common/http";
import { PackingListComponent } from "./packing-list/packing-list.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { GearFormComponent } from "./gear-form/gear-form.component";

@NgModule({
  declarations: [
    AppComponent,
    DisplayWeatherComponent,
    PackingListComponent,
    HomepageComponent,
    AboutUsComponent,
    GearFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
