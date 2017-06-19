import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ICruise } from '../../cruises';

@Injectable()
export class DataService {
    private _cruise: BehaviorSubject<ICruise>;
    private dataStore: {
        cruise: ICruise
    }

    constructor() {
        this.dataStore = { cruise: <ICruise>{} };
        this._cruise = <BehaviorSubject<ICruise>>new BehaviorSubject(null);
    }

    get cruise() {
        return this._cruise.asObservable();
    }

    update(cruise) {
        this.dataStore.cruise = cruise;
        this._cruise.next(Object.assign({}, this.dataStore).cruise);
    }
}
