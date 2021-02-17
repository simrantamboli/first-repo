import { TransactionreportsComponent } from './../../transactionreports/transactionreports.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-Reports',
  templateUrl: './Reports.component.html',
  styleUrls: ['./Reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(TransactionreportsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
   
}

}
