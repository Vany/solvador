import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupResultPage } from './setup-result.page';

describe('SetupResultPage', () => {
  let component: SetupResultPage;
  let fixture: ComponentFixture<SetupResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupResultPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
