import { Component, OnInit } from '@angular/core';
import * as LaptopDetails from "../../data/laptop.json";

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Laptops:any=(LaptopDetails as any).default;

}
