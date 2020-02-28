import { Component, OnInit } from "@angular/core";
import { PhoneBookService, PhoneBookItemModel } from "../phone-book.service";

@Component({
  selector: "app-phone-book-item",
  templateUrl: "./phone-book-item.component.html",
  styleUrls: ["./phone-book-item.component.css"]
})
export class PhoneBookItemComponent implements OnInit {
  items: PhoneBookItemModel[] = [];
  constructor(private PhoneBookService: PhoneBookService) {}

  ngOnInit() {
    this.items = this.PhoneBookService.getContacts();
  }
}
