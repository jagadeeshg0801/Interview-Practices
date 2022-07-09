import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe-example',
  templateUrl: './custom-pipe-example.component.html',
  styleUrls: ['./custom-pipe-example.component.css']
})
export class CustomPipeExampleComponent implements OnInit {

  num : number =0;
  tablesLimit: any = [1,2,3,4,5,6,7,8,9,10]
  constructor() { }

  ngOnInit(): void {
  }

}
