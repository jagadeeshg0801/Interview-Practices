import { Directive, ElementRef, HostBinding, HostListener, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHighlightDirect]'
})
export class HighlightDirectDirective {
  @Input('color') color:string;
  @HostBinding('style.border') border: string;
  constructor(private elementRef: ElementRef, private containerRef: ViewContainerRef) { 


  }


  @HostListener('mouseover')
  setRedColor(){
    this.border = "2px solid red";
    this.elementRef.nativeElement.style.color = this.color;
  }

  @HostListener('mouseout')
  setBlueColor(){
    
    this.border = "2px solid blue";
    this.elementRef.nativeElement.style.color = 'inherit';
  }
}
