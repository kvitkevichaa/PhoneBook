import { Component, OnInit } from "@angular/core";
import { PhoneBookService, PhoneBookItemModel } from "../phone-book.service";

@Component({
  selector: "app-phone-book-form",
  templateUrl: "./phone-book-form.component.html",
  styleUrls: ["./phone-book-form.component.css"]
})
export class PhoneBookFormComponent implements OnInit {
  name: string;
  phone: string;
  public items: PhoneBookItemModel[];
  constructor(private phoneBookService: PhoneBookService) {}
  ngOnInit() {
    this.items = this.phoneBookService.getContacts();
  }
  addItem(): void {
    const newContact = {
      index: this.items.length + 1,
      name: this.name,
      phone: this.phone
    };
    this.name = "";
    this.phone = "";
    this.phoneBookService.addContact(newContact);
  }
}
