import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    scrolling: boolean = false;

    constructor( @Inject(DOCUMENT) private document: Document ) { }

    ngOnInit() {
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        this.scrolling = this.document.body.scrollTop ? true : false; 
    }    
}
