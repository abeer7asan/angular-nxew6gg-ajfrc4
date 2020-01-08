import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import {CartService} from '../cart.service';

import{FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(private route:ActivatedRoute, private cartService:CartService, private formBuilder:FormBuilder ) { 

    this.checkoutForm = this.formBuilder.group({
name:'',
address:''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  getPrices(){
    return this.cartService.getShippingPrices();
  }

  onSubmit(customerData){
    console.warn('Your order has been submitted', customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

  }

}