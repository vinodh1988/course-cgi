import { Component, OnInit,Input } from '@angular/core';
import {course} from '../../../models/course'
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
 @Input('course')  current:course;
  constructor() { }

  ngOnInit() {
  }

}
