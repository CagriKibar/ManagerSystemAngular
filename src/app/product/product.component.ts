import { Component, OnInit } from '@angular/core';
import { Product } from './product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title="Ürün Listesi"

  products:Product[]= [
    {id:1, name:"Asus Zenbook",price:11000,  description:"Asus Zenbook for high experience",imageUrl:"https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"},
    {id:2, name:"Apple",price:11000, description:"Apple Macbook",imageUrl:"https://images.unsplash.com/photo-1517663404855-6f96c7aa20e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
    {id:3, name:"Huawei MateBook",price:8500,description:"Huawei Fast Laptop",imageUrl:"https://images.unsplash.com/photo-1592434134753-a70baf7979d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}
  ]

  ngOnInit(): void {
    
  }

}
