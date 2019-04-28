import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './pages/about/about.component';
import {AuthGuardService} from './services/auth-guard.service';
import {LoginPage} from './pages/login/login.page';
import {BalancePage} from './pages/balance/balance.page';
import {RecoveryPage} from './pages/recovery/recovery.page';
import {TransferPage} from './pages/transfer/transfer.page';
import {CreateAccountPage} from './pages/create-account/create-account.page';
import {SetupWalletPage} from './pages/setup-wallet/setup-wallet.page';
import {NotarySignPage} from './pages/notary-sign/notary-sign.page';
import {TransferHistoryPage} from './pages/transfer-history/transfer-history.page';
import {SetupResultPage} from './pages/setup-result/setup-result.page';
import {NotariesListPage} from './pages/notaries-list/notaries-list.page';
import {HomePage} from './pages/home/home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'home', component: HomePage },
  { path: 'notaries-list', component: NotariesListPage, canActivate: [AuthGuardService] },
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
