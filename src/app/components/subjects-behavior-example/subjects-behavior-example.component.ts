import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-subjects-behavior-example',
  templateUrl: './subjects-behavior-example.component.html',
  styleUrls: ['./subjects-behavior-example.component.css']
})
export class SubjectsBehaviorExampleComponent implements OnInit {

  behavior_subject$ = new BehaviorSubject(null);
  recentValue:any = '';
  constructor() { }

  ngOnInit(): void {
    this.behavior_subject$.subscribe((res)=>{
      this.recentValue = res;
    })
  }

  changeValue(value:any){
    this.behavior_subject$.next(value)
    console.log('value', value);
  }

}
