import { Component } from '@angular/core';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.css']
})
export class WriteReviewComponent {
  reviewData:any;
  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.reviewData.file = file;
    }
  }
}
