import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import {NavComponent} from "./components/nav/nav.component";
import { FooterComponent } from './components/footer/footer.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ImageCategoryComponent } from "./components/image-category/image-category.component";
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ShoppingListComponent,
    ImageCategoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
