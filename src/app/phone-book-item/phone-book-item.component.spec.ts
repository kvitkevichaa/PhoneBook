import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBookItemComponent } from './phone-book-item.component';

describe('PhoneBookItemComponent', () => {
  let component: PhoneBookItemComponent;
  let fixture: ComponentFixture<PhoneBookItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneBookItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
