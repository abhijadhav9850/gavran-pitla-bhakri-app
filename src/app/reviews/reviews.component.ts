import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviewData: { overallRating: number } = { overallRating: 1 };

  stars = Array(5).fill(0);

  setRating(rating: number) {
    this.reviewData.overallRating = rating;
  }
}
