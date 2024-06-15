import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../services/transactions.service';
import { RouterModule  } from '@angular/router';

@Component({
  selector: 'app-transactionview',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './transactionview.component.html',
  styleUrl: './transactionview.component.scss'
})
export class TransactionviewComponent {
  transactions: any[] | undefined;

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionsList();

  }

  transactionsList(): void {
    this.transactionService.getTransactions()
      .subscribe(transactions => this.transactions = transactions);
      console.log('trans:', this.transactions)
  }

}
