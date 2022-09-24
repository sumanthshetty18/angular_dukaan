import { Component, OnInit } from '@angular/core';
import * as WearablesDetails from "../../data/smartWearables.json";

@Component({
  selector: 'app-smart-wearables',
  templateUrl: './smart-wearables.component.html',
  styleUrls: ['./smart-wearables.component.css']
})
export class SmartWearablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Wearables:any=(WearablesDetails as any).default;

}
