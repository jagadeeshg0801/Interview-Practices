import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-api-interaction',
  templateUrl: './api-interaction.component.html',
  styleUrls: ['./api-interaction.component.css']
})
export class ApiInteractionComponent implements OnInit {
  userData: any;
  userNamesList: any;

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.common.getUserData().subscribe((res)=>{
      this.userData = res;
    })

    this.common.getUserNamesOnly().subscribe((userNames: any)=>{
      console.log('names', userNames);
      
      this.userNamesList = userNames;
    })
  }

}
