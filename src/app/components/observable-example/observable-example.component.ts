import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.css']
})
export class ObservableExampleComponent implements OnInit {

  observable_$ = new Observable((observer)=>{
    try {
      observer.next(1);
      observer.next(2);
      observer.next(new Error('test'));
      observer.complete();
    } catch (error) {
      observer.error(error);
    }

  });
  constructor() { }

  ngOnInit(): void {
    this.observable_$.subscribe({
      next(val){
        console.log('Observer value', val)
      },
      complete(){
        console.log('Observable Completed')
      },
      error(err){
        console.log("error", err);
      }

    })

  }

}
