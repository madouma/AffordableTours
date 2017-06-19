import { Component, OnInit, Input } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { ICruise } from '../../cruises';
import { DataService } from '../../shared';

@Component({
	selector: 'atours-top-navigation',
	templateUrl: './top-navigation.component.html',
	styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
    @Input() scrolling: boolean = false;

	constructor() { }

	ngOnInit() {
	}
}
