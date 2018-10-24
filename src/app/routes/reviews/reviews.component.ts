import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import {review} from '../../models/review';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
rlist:review[];
  constructor(private rs:ReviewService) { 
     rs.getReviews().subscribe(
        (x:review[])=>{this.rlist=x},
        (y)=>{alert("Error in fetching review")}
     )

    
  }

  ngOnInit() {
  }

}
