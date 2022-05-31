import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor( private http: HttpClient )
  {

  }

  getOrder(orderId :number) {
    return this.http.get('http://dashfleet.test/api/orders/1');
  }
}
