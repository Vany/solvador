import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AboutComponent} from './pages/about/about.component';
import {AuthGuardService} from './services/auth-guard.service';
import {LoginPage} from './pages/login/login.page';
import {BalancePage} from './pages/balance/balance.page';
import {RecoveryPage} from './pages/recovery/recovery.page';
import {TransferPage} from './pages/transfer/transfer.page';
import {CreateAccountPage} from './pages/create-account/create-account.page';
import {SetupWalletPage} from './pages/setup-wallet/setup-wallet.page';
import {NotarySignPage} from './pages/notary-sign/notary-sign.page';
import {FormsModule} from '@angular/forms';
import {TransferHistoryPage} from './pages/transfer-history/transfer-history.page';
import {SetupResultPage} from './pages/setup-result/setup-result.page';
import {NotariesListPage} from './pages/notaries-list/notaries-list.page';
import {HomePage} from './pages/home/home.page';
import {NavigationService} from './services/navigation.service';
import {NotaryService} from './services/notary.service';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomePage,
    LoginPage,
    BalancePage,
    RecoveryPage,
    TransferPage,
    CreateAccountPage,
    SetupWalletPage,
    NotarySignPage,
    TransferHistoryPage,
    SetupResultPage,
    NotariesListPage,
    HeaderComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthGuardService,
    NavigationService,
    NotaryService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
