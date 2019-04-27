import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotariesListPage } from './notaries-list.page';

describe('NotariesListPage', () => {
  let component: NotariesListPage;
  let fixture: ComponentFixture<NotariesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotariesListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotariesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
