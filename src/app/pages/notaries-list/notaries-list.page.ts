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

      // tslint:disable-next-line:prefer-const
      let mapProp = {
        center: new google.maps.LatLng(55.7596136, 37.6472348),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        markers: [

        ]
      };
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    console.log("notaries list init");
  }

}
