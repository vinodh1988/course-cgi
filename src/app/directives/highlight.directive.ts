import { Directive,Input,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

@Input('highlight') price:number;


  constructor(private el:ElementRef) { }

  @HostListener('mouseover')
  changeBorder(){
      if(this.price>20000)
         this.el.nativeElement.style.border="2px solid red";
      else if(this.price>16000)
      this.el.nativeElement.style.border="2px solid darkblue";
      else if(this.price>12000)
      this.el.nativeElement.style.border="2px solid green";
      else
      this.el.nativeElement.style.border="2px solid darkred";
   }

   @HostListener('mouseleave')
      retainBorder(){
          this.el.nativeElement.style.border="none";
      }
   }

}
