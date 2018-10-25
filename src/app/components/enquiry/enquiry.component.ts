import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../services/enquiry.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
active:boolean=true;
errors:string[]=[];
name:string;
message:string;
email:string;
image:string="Sending.gif";
  constructor(private es:EnquiryService) { }

  ngOnInit() {
  }

  handleClick(){
     this.errors=[];
     let pattern=/^[a-zA-Z][A-Za-z0-9_\.]+@[a-z]{2,}\.[a-z]{2,5}$/;
  
    if(this.name==undefined || this.name.length==0){
       this.errors.push("Name should be entered");
      
    }
    if(this.email==undefined || this.email.length==0){
       this.errors.push("email should be entered");
    }
   else if(!pattern.test(this.email)){
       this.errors.push("Not in email format");
    }
    if(this.message==undefined || this.message.length<10){
      this.errors.push("Message should be atleast 10 char long");
    }
   
    if(this.errors.length==0)
     {
       this.active=false;
       this.image="Sending.gif";
       let obj={
         name: this.name,
         message:this.message,
         email: this.email
       }

       this.es.postEnquiry(obj).subscribe(
         ()=>{
             this.image="sent.gif";
            setTimeout(()=>{
              this.active=true;
              this.name="";
              this.message="";
              this.email="";
            },2000);
         },
         ()=>{
           this.name="";
           this.message="";
           this.email="";
           alert("Not able to post your enquiry");
           this.active=true;
         }
       )
     }
  }

}
