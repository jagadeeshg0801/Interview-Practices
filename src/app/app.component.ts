import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interview-Practices';
  isLoggedIn: boolean;

  constructor(private common: CommonService){

  }

  setLogin(status:boolean){
    this.common.setLoginStatus(status);
    this.isLoggedIn = status;
    
  }
}
