import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'atours-ratings-and-reviews',
    templateUrl: './ratings-and-reviews.component.html',
    styleUrls: ['./ratings-and-reviews.component.scss']
})
export class RatingsAndReviewsComponent implements OnInit {

    constructor(private _http: Http) { }

    ngOnInit() {
        // this._http.get('//widget.trustpilot.com/base-data?businessUnitId=557fe8670000ff0005803d05&locale=en-US&includeReviews=true&reviewsPerPage=15&reviewStars=4%2C5')
        //     .subscribe(data => console.log(data));
    }

}
