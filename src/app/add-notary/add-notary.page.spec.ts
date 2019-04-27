import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotaryPage } from './add-notary.page';

describe('AddNotaryPage', () => {
  let component: AddNotaryPage;
  let fixture: ComponentFixture<AddNotaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNotaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNotaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
