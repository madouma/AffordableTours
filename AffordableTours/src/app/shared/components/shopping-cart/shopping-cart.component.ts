import { Component, OnInit, Input, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { ICruise } from '../../../cruises';
import { DataService } from '../../index';

@Component({
    selector: 'atours-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
    scrolling: boolean = false;
    cruise: ICruise;
    showDialog = false;
    @Input() section: string = 'abc';

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