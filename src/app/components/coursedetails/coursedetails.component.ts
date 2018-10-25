import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  current:string;
  constructor(private ar:ActivatedRoute) { 
    this.ar.params.subscribe((params)=>
    this.current=params['ccode']);
  }

  ngOnInit() {
  }

}
