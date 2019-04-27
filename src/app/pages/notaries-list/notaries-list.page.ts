/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-notaries-list',
  templateUrl: './notaries-list.page.html',
  styleUrls: ['./notaries-list.page.scss'],


})

export class NotariesListPage implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  private selectedItem: any;

  public items: Array<{ title: string; metro: string; address: string; phone: string }> = [
    {
      title: 'Абдулина Назия Абдульхаковна',
      metro: 'Сухаревская',
      address: 'г. Москва, Грохольский пер., д.30, стр.1',
      phone: '+7 (495) 933-31-24'
    },
    {
      title: 'Авдеева Ирина Владимировна',
      metro: 'Кузьминки',
      address: 'г. Москва, Волгоградский просп., д.70',
      phone: '+7 (495) 172-17-29'
    },
    {
      title: 'Аверина Елена Леонтьевна',
      metro: 'Бауманская',
      address: 'г. Москва, Новорязанская ул., д.31/7, кв.18',
      phone: '+7 (495) 267-51-18'
    },
    {
      title: 'Агаева Аида Балаевна',
      metro: 'Савеловская',
      address: 'г. Москва, Башиловская ул., д.1, стр.2',
      phone: '+7 (495) 213-14-55'
    },
    {
      title: 'Агамиров Натиг Исмаилович',
      metro: 'Арбатская',
      address: 'г. Москва, Знаменка ул., д.9/12, оф.8',
      phone: '+7 (495) 291-44-70'
    }
  ];

  constructor() {
  }

  ngOnInit() {
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