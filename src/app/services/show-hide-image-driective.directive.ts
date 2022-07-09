import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[jshIf]'
})
export class ShowHideImageDriectiveDirective {

  constructor(private elementRef: ElementRef, private templateRef: TemplateRef<any>, private containerRef: ViewContainerRef) { }

  @Input()
  set jshIf(val:any){    
    if(val == "true"){
      this.containerRef.createEmbeddedView(this.templateRef);
    }else{
      this.containerRef.clear();
    }
  }

}
