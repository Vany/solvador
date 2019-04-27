import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {AuthGuardService} from './services/auth-guard.service';
import {LoginPage} from './login/login.page';
import {ListPage} from './list/list.page';
import {BalancePage} from './balance/balance.page';
import {RecoveryPage} from './recovery/recovery.page';
import {TransferPage} from './transfer/transfer.page';
import {AddNotaryPage} from './add-notary/add-notary.page';
import {CreateAccountPage} from './create-account/create-account.page';
import {SetupWalletPage} from './setup-wallet/setup-wallet.page';
import {NotarySignPage} from './notary-sign/notary-sign.page';
import {TransferHistoryPage} from './transfer-history/transfer-history.page';
import {SetupResultPage} from './setup-result/setup-result.page';
import {NotariesListPage} from './notaries-list/notaries-list.page';
import {HomePage} from './home/home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomePage,
  },
  { path: 'list', component: ListPage },
  { path: 'notaries-list', component: NotariesListPage, canActivate: [AuthGuardService] },
  { path: 'add-notary', component: AddNotaryPage },
  { path: 'setup-wallet', component: SetupWalletPage },
  { path: 'notary-sign', component: NotarySignPage },
  { path: 'recovery', component: RecoveryPage },
  { path: 'login', component: LoginPage },
  { path: 'balance', component: BalancePage },
  { path: 'transfer-history', component: TransferHistoryPage },
  { path: 'transfer', component: TransferPage },
  { path: 'setup-result', component: SetupResultPage },
  { path: 'create-account', component: CreateAccountPage },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true})
],
  exports: [RouterModule]
})
export class AppRoutingModule {}
