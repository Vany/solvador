import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotarySignPage } from './notary-sign.page';

describe('NotarySignPage', () => {
  let component: NotarySignPage;
  let fixture: ComponentFixture<NotarySignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotarySignPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotarySignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
