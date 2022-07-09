import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-reactive-form-array-example',
  templateUrl: './reactive-form-array-example.component.html',
  styleUrls: ['./reactive-form-array-example.component.css']
})
export class ReactiveFormArrayExampleComponent implements OnInit {
  adminForm: FormGroup;

  uNames: any = [
    { name: 'JSH', id: 1 },
    { name: 'NJS', id: 2 },
    { name: 'VSH', id: 3 },
  ];
  constructor(private fb: FormBuilder) { 
    const ids = this.uNames.map((ele: any) => ele.id);
    console.log('ids', ids);
  }
  userForm : FormGroup;
  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      address: new FormArray([
        new FormControl('address1'),
        new FormControl('address2')
      ]),
      city: new FormControl('', Validators.required)
    });


    this.adminForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      rolesList: new FormArray([
        new FormGroup({ role1 : new FormControl('ADMIN')}),
        new FormGroup({role2: new FormControl('USER')})
      ])
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }
  getUserControls() {
    return (this.userForm.get('address') as FormArray).controls;
  }



  get adminFormControls(){
   return  (this.adminForm.get('rolesList') as FormArray).controls;
  }
 

  getIndex(index:number){
    return index+1;
  }
}
