import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {AuthGuardService} from './services/auth-guard.service';
import {LoginPage} from './login/login.page';
import {ListPage} from './list/list.page';
import {BalancePage} from './balance/balance.page';
import {RecoveryPage} from './recovery/recovery.page';
import {TransferPage} from './transfer/transfer.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'about', component: AboutComponent },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'list', component: ListPage },
  {
    path: 'notaries-list',
    loadChildren: './notaries-list/notaries-list.module#NotariesListPageModule',
    canActivate: [AuthGuardService]
  },
  { path: 'add-notary', loadChildren: './add-notary/add-notary.module#AddNotaryPageModule' },
  { path: 'setup-wallet', loadChildren: './setup-wallet/setup-wallet.module#SetupWalletPageModule' },
  { path: 'notary-sign', loadChildren: './notary-sign/notary-sign.module#NotarySignPageModule' },
  { path: 'recovery', component: RecoveryPage },
  { path: 'login', component: LoginPage },
  { path: 'balance', component: BalancePage },
  { path: 'transfer-history', loadChildren: './transfer-history/transfer-history.module#TransferHistoryPageModule' },
  { path: 'transfer', component: TransferPage },
  { path: 'setup-result', loadChildren: './setup-result/setup-result.module#SetupResultPageModule' },
  { path: 'create-account', loadChildren: './create-account/create-account.module#CreateAccountPageModule' },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true})
],
  exports: [RouterModule]
})
export class AppRoutingModule {}
