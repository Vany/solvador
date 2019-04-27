import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notaries-list',
  templateUrl: './notaries-list.page.html',
  styleUrls: ['./notaries-list.page.scss'],
})
export class NotariesListPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("notaries list init");
  }

}
