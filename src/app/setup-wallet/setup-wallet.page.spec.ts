import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupWalletPage } from './setup-wallet.page';

describe('SetupWalletPage', () => {
  let component: SetupWalletPage;
  let fixture: ComponentFixture<SetupWalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupWalletPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupWalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
