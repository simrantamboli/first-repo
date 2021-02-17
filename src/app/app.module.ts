import { ReportsComponent } from './others/Reports/Reports.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CatlogComponentComponent } from './catlog-component/catlog-component.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SearchComponent } from './search/search.component';
import {MatSelectModule} from '@angular/material/select';
import { DealDialogComponent } from './deal-dialog/deal-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {TransactionreportsComponent} from './transactionreports/transactionreports.component';
import {MatSortModule} from '@angular/material/sort';
import { TransferpageComponent } from './transferpage/transferpage.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import { SmartremComponent } from './smartrem/smartrem.component';



@NgModule({
  declarations: [	
    AppComponent,
    LoginComponent,
    HomeComponent,
    CatlogComponentComponent,
    SearchComponent,
    DealDialogComponent,
    ReportsComponent,
    TransactionreportsComponent,
    TransferpageComponent,
    SmartremComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AppRoutingModule, 
    MatSliderModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatTabsModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatSidenavModule,
    MatStepperModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
