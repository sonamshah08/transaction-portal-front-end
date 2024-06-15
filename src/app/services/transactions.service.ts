import { Injectable } from '@angular/core';
import { Observable, of, throwError  } from 'rxjs';
import { TRANSACTIONS_DATA } from '../mock-data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

  getTransactions(): Observable<any[]> {
   return of(TRANSACTIONS_DATA);
  }

  getTransactionById(id: number): Observable<any> {
    const transaction = TRANSACTIONS_DATA.find(t => t.id == id);
    if (transaction) {
      return of(transaction);
    } else {
      return of(null);
    }
  }

  updateTransaction(id: number, newComment: string): Observable<any> {
    const transaction = TRANSACTIONS_DATA.find(t => t.id === id);
    if (transaction) {
      transaction.comment = newComment;
      return of(transaction);
    } else {
      return throwError(() => new Error('Transaction not found'));
    }
  }
}
