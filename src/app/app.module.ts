import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PhoneBookComponent } from "./phone-book/phone-book.component";
import { PhoneBookItemComponent } from "./phone-book-item/phone-book-item.component";
import { PhoneBookFormComponent } from "./phone-book-form/phone-book-form.component";

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
    PhoneBookItemComponent,
    PhoneBookFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
