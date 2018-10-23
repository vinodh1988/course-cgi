import { Injectable } from '@angular/core';
import {course} from '../models/course'
@Injectable()
export class CourseService {
private courselist:course[];
  constructor() {
       this.courselist=[
         {
           name: "Angular",
           description: "Google's component based framework",
           price: 20000,
           image: "angular.png"
         } ,
         {
          name: "AWS",
          description: "Cloud platform by Amazon",
          price: 22000,
          image: "aws.png"
          } ,
          {
            name: "CSS3",
            description: "New Specification of CSS",
            price: 11000,
            image: "CSS3.png"
          } ,
          {
            name: "Hadoop",
            description: "Apache platform , an ecosystem for bigdata",
            price: 16000,
            image: "hadoop.png"
          },
          {
            name:"HTML5",
            description:"New specification for html",
            price: 11000,
            image: "html5.png"
          },
          {
            name:"Java",
            description:"Robust multipurpose language",
            price: 10000,
            image: "java.png"
          },
          {
            name:"React",
            description:"Popular framework by Facebook",
            price: 21000,
            image: "react.jpg"
          },
          {
            name:"Red hat Linux",
            description:"Enterprise linux server",
            price: 14000,
            image: "redhat.jpg"
          },
          {
            name:"SQL",
            description:"Language to talk with RDBMS",
            price: 9000,
            image: "sql.png"
          },
          {
            name:"Typescript",
            description:"Language for UI Scripting",
            price: 14000,
            image: "ts.png"
          }


       ]
   }

   getCourses():course[]{
     return this.courselist;
   }

}
