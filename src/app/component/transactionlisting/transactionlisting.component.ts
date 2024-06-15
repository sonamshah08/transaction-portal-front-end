import { Component, inject  } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transactionlisting',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './transactionlisting.component.html',
  styleUrl: './transactionlisting.component.scss'
})
export class TransactionlistingComponent {

  transactions: any[] | undefined;
  httpClient = inject(HttpClient);

  http = inject(HttpClient);

  statusArray = [
    { name: 'COMPLETED', value: 1 },
    { name: 'IN PROGRESS', value: 2 },
    { name: 'REJECTED', value: 3 }
  ];
  selectedStatus: number | null = null;

  ngOnInit(): void {
    this.getTransactionsByDateRange('2021-12-07', '2021-12-14');
   }



  getTransactionsByDateRange(startDate: string, endDate: string): void {
    this.http.get(`http://localhost:3000/api/transactions/date?startDate=${startDate}&endDate=${endDate}`)
      .subscribe({
        next: (data: any) => {
          console.log(data.data);
          this.transactions = data.data;
        }, error: (err) => console.log(err)
      });

  }

  getTransactionsByByStatus(): void {
    if (this.selectedStatus !== null) {
      this.http.get(`http://localhost:3000/api/transactions/status?status=${this.selectedStatus}`)
      .subscribe({
        next: (data: any) => {
          console.log(data.data);
          this.transactions = data.data;
        }, error: (err) => console.log(err)
      });
    }
  }


}
