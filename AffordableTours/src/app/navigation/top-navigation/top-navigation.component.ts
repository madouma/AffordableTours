import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
	selector: 'atours-top-navigation',
	templateUrl: './top-navigation.component.html',
	styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
    private scrolling: boolean = false;

	constructor( @Inject(DOCUMENT) private document: Document ) { }

	ngOnInit() {
	}

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        this.scrolling = this.document.body.scrollTop ? true : false; 
    }

}
