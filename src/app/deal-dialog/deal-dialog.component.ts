import { Deal } from './../models/deal';
import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA: Deal[] = [
  {transactionId: 100091,
    bank: "Kotak Mahindra",
    amount: 10000,
    bankDealref: 12345,
    maturityDate:new Date()},
  ];

@Component({
  selector: 'app-deal-dialog',
  templateUrl: './deal-dialog.component.html',
  styleUrls: ['./deal-dialog.component.css']
})
export class DealDialogComponent implements OnInit {

  title: string = 'Your Deal Number is';
  deal: Deal = null;
  displayedColumns: string[];
  datasource: Deal[];

  constructor() { }

  ngOnInit(): void {
    this.deal={
      transactionId: 100091,
      bank: "Kotak Mahindra",
      amount: 10000,
      bankDealref: 12345,
      maturityDate:new Date()
    };
    this.datasource = ELEMENT_DATA;
    //this.datasource.push(this.deal);
    this.displayedColumns = ['transactionId', 
      'bank',
      'amount',
      'amount',
      'bankDealref', 
      'maturityDate'];

      this.displayedColumns.sort;
  }

}
