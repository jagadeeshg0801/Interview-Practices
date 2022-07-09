import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive-example',
  templateUrl: './custom-directive-example.component.html',
  styleUrls: ['./custom-directive-example.component.css']
})
export class CustomDirectiveExampleComponent implements OnInit {
  selectedColor = 'black';
  selectedOption: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
