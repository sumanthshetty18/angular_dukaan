import { Component, OnInit } from '@angular/core';
import * as AudioItemsDetails from "../../data/audio.json";
 

@Component({
  selector: 'app-audio-items',
  templateUrl: './audio-items.component.html',
  styleUrls: ['./audio-items.component.css']
})
export class AudioItemsComponent implements OnInit {


  constructor() { }
    

  ngOnInit(): void {
  }
  audioItem:any=(AudioItemsDetails as any).default;

  

}
