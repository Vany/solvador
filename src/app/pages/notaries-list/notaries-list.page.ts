/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {INotary, NotaryService} from '../../services/notary.service';

@Component({
  selector: 'app-notaries-list',
  templateUrl: './notaries-list.page.html',
  styleUrls: ['./notaries-list.page.scss'],


})

export class NotariesListPage implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  private selectedItem: any;

  public items: INotary[];

  constructor(private notaryService: NotaryService) {
  }

  ngOnInit() {
    this.items = this.notaryService.getNotayList();
  }

}
