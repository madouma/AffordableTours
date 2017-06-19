import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { ICruise } from '../../cruises';
import { DataService } from '../../shared';

@Component({
	selector: 'atours-top-navigation',
	templateUrl: './top-navigation.component.html',
	styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
    private scrolling: boolean = false;
    cruise: ICruise;
    showDialog = false;

	constructor( 
        @Inject(DOCUMENT) private document: Document,
        private _dataService: DataService
    ) { }

	ngOnInit() {
        this._dataService.cruise.subscribe( data => this.cruise = data );
	}

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        this.scrolling = this.document.body.scrollTop ? true : false; 
    }

}
