import { Component, OnInit } from '@angular/core';

import { IStatement } from './index';

@Component({
    selector: 'atours-mission-statements',
    templateUrl: './mission-statements.component.html',
    styleUrls: ['./mission-statements.component.scss']
})
export class MissionStatementsComponent implements OnInit {
    // statements: IStatement[] = [
    //     { iconClass: 'fi-shopping-bag', title: '', description: 'egweghwg', hasInput: false },
    //     { iconClass: '', title: '', description: 'egweghwg', hasInput: false },
    //     { iconClass: '', title: '', description: 'egweghwg', hasInput: false },
    //     { iconClass: '', title: '', description: 'egweghwg', hasInput: false }
    // ];

    constructor() { }

    ngOnInit() {
    }

}
