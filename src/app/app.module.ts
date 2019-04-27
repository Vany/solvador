import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AboutComponent} from './about/about.component';
import {AuthGuardService} from './services/auth-guard.service';
import {LoginPage} from './login/login.page';
import {ListPage} from './list/list.page';
import {BalancePage} from './balance/balance.page';
import {RecoveryPage} from './recovery/recovery.page';
import {TransferPage} from './transfer/transfer.page';
import {CreateAccountPage} from './create-account/create-account.page';
import {AddNotaryPage} from './add-notary/add-notary.page';
import {SetupWalletPage} from './setup-wallet/setup-wallet.page';
import {NotarySignPage} from './notary-sign/notary-sign.page';
import {FormsModule} from '@angular/forms';
import {TransferHistoryPage} from './transfer-history/transfer-history.page';
import {SetupResultPage} from './setup-result/setup-result.page';
import {NotariesListPage} from './notaries-list/notaries-list.page';
import {HomePage} from './home/home.page';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomePage,
    LoginPage,
    ListPage,
    BalancePage,
    RecoveryPage,
    TransferPage,
    CreateAccountPage,
    AddNotaryPage,
    SetupWalletPage,
    NotarySignPage,
    TransferHistoryPage,
    SetupResultPage,
    NotariesListPage,
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
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
