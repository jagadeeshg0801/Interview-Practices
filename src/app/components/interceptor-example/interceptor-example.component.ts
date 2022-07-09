import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-interceptor-example',
  templateUrl: './interceptor-example.component.html',
  styleUrls: ['./interceptor-example.component.css']
})
export class InterceptorExampleComponent implements OnInit {
  userData: any;

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.common.getUserData().subscribe((res)=>{
      this.userData = res;
    })
  }

}
