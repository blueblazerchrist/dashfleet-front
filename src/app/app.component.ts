import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from './order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dashfleet';

  public form!: FormGroup;
  constructor ( private formBuilder: FormBuilder, private orderService: OrderService, private route:Router) {
  }

  ngOnInit(): void {
    this.forms();
  }

  forms() {
    this.form = this.formBuilder.group({
      order_code: [null, [Validators.required]],
      document_type: [null, [Validators.required]],
      document: [null, [Validators.required]],
    })
  }

  getOrder() {
    this.orderService.getOrder(this.form.value.order_code).subscribe({
      next:(value:any) => {
        this.route.navigateByUrl(`/order/${value.id}`)
      }
    })
  }
}
