import { Component, OnInit } from '@angular/core';
import * as fashionproducts from '../data/fashion.json';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products:any=(fashionproducts as any).default;



}
