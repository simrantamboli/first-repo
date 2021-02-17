import { TransferpageComponent } from './transferpage/transferpage.component';
import { ReportsComponent } from './others/Reports/Reports.component';
import { SearchComponent } from './search/search.component';
import { CatlogComponentComponent } from './catlog-component/catlog-component.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helper/auth.guard';
import { SmartremComponent } from './smartrem/smartrem.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'catlog', pathMatch: 'full' },
      { path: 'catlog', component: CatlogComponentComponent },
      { path: 'search', component: SearchComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'transfer', component: TransferpageComponent },
      { path:'smart',component: SmartremComponent}
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }