import { Input, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class PhoneBookService {
  private items: PhoneBookItemModel[] = [
    { index: 1, name: "Саша", phone: "79999999999" },
    { index: 2, name: "Петя", phone: "79998888888" }
  ];

  getContacts(): PhoneBookItemModel[] {
    return this.items;
  }
  addContact(item: PhoneBookItemModel) {
    this.items.push(item);

    console.log(this.items);
  }
}

export class PhoneBookItemModel {
  index: number;
  name: string;
  phone: string;
}
