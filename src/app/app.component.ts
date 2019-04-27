import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Главная',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Balance',
      url: '/balance',
      icon: 'logo-bitcoin'
    },
    {
      title: 'Список нотариусов',
      url: '/notaries-list',
      icon: 'list'
    },
    {
      title: 'Добавить нотариуса',
      url: '/add-notary',
      icon: 'add'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
