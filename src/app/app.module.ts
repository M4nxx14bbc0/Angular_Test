import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import {NavComponent} from "./components/nav/nav.component";
import { FooterComponent } from './components/footer/footer.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ImageCategoryComponent } from "./components/image-category/image-category.component";
import { HomeComponent } from './components/home/home.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { AddressInfoComponent } from './components/users/user-details/address-info/address-info.component';
import { GeneralInfoComponent } from './components/users/user-details/general-info/general-info.component';
import { ProfileInfoComponent } from './components/users/user-details/profile-info/profile-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ShoppingListComponent,
    ImageCategoryComponent,
    HomeComponent,
    WeatherComponent,
    ListUsersComponent,
    UserDetailsComponent,
    AddressInfoComponent,
    GeneralInfoComponent,
    ProfileInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
