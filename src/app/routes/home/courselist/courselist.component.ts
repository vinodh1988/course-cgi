import { Component, OnInit } from '@angular/core';
import {course} from '../../../models/course';
import { CourseService } from '../../../services/course.service';
@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css'],
})
export class CourselistComponent implements OnInit {
  clist:course[];

  constructor(private cs:CourseService) {
       this.clist=cs.getCourses();
   }

  ngOnInit() {
     
  }

}
