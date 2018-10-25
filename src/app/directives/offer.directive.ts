import { Directive,ViewContainerRef,TemplateRef,Input } from '@angular/core';
import {EnquiryService} from '../services/enquiry.service';
@Directive({
  selector: '[offer]'
})
export class OfferDirective {

  constructor(private es:EnquiryService,private vc:ViewContainerRef,
  private tref:TemplateRef<any>) {

   }

   
  @Input() set offer(data){
    if(this.es.isOffer)
    {
        this.vc.createEmbeddedView(this.tref)
        setTimeout(()=>this.vc.clear(),data*1000);
    }

    else{
            this.vc.clear();
    }
   
}

}
