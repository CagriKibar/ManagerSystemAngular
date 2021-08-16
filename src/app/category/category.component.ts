import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  Title="Kategori Listesi"
  categories:Category[]=[
  {id:1, name:"Teknoloji"},
  {id:2, name:"Hırdavat"},
  {id:3, name:"Ev Eşyası"},

]

  

  ngOnInit(): void {
  }

}
