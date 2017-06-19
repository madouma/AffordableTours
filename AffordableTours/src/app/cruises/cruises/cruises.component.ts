import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { ICruise } from "./cruise";
import { DataService } from "../../shared";

const searchCruiseItineraries = gql`
    query { 
        searchCruiseItineraries (destinations: [2] page: 1 sorter: 0 maxallowed: 60) { 
            Itinerary { 
                ID 
                Num_Nights 
                Brochure_Price 
                Destination { 
                    ID Name 
                } 
                Departure_Port { 
                    ID Name 
                } 
                Arrival_Port { 
                    ID Name 
                } 
                Cruise_Line { 
                    ID Name 
                } 
                Ship { 
                    ID 
                    Name 
                } 
            } 
            minprice 
            Departure_Date 
        } 
    }
`;

@Component({
    selector: 'atours-cruises',
    templateUrl: './cruises.component.html',
    styleUrls: ['./cruises.component.scss']
})

export class CruisesComponent implements OnInit {
    results: any[] = [];
    cruises: ICruise[] = [];
    selectedPackage: any;

    sortVal:number = 0;
    sortOptions:Array<Object> = [
        { val: 1, name: 'Cruise Line' },
        { val: 3, name: 'Departure Port' },
        { val: 7, name: 'Destination' },
        { val: 4, name: 'Length (Short to Long)' },
        { val: 6, name: 'Price (Low to High)' },
        { val: 0, name: 'Sail Date' },
        { val: 2, name: 'Ship' },
    ];    

    constructor(
        private apollo: Apollo,
        private _dataStore: DataService
    ) { }

    ngOnInit() {
        this.apollo.watchQuery<any>({
            query: searchCruiseItineraries
        }).subscribe(({ data }) => {
            this.results = data.searchCruiseItineraries;
            this.modelData(data.searchCruiseItineraries)
        });
    }

    modelData(data: any[]) {
        this.cruises = [];
        data.map(itenary => {
            let Itinerary = itenary.Itinerary;
            this.cruises.push({
                sailDate: itenary.Departure_Date,
                cruiseLine: Itinerary.Cruise_Line.Name,
                ship: Itinerary.Ship.Name,
                destination: Itinerary.Destination.Name.slice(0, Itinerary.Destination.Name.indexOf('-')).trim(),
                portName: Itinerary.Departure_Port.Name.slice(0, Itinerary.Departure_Port.Name.indexOf(',')).trim(),
                nights: Itinerary.Num_Nights,
                cost: itenary.minprice,
                discount: Math.round(( Itinerary.Brochure_Price ? ( Itinerary.Brochure_Price - itenary.minprice ) / Itinerary.Brochure_Price : 0 ) * 100)
            })
        });
    }

    onPackageSelection(cruise: any) {
        this.selectedPackage = cruise;

        this._dataStore.update(cruise);
    }

    sort() {
        this.sortVal = +this.sortVal;

        const fiterQuery = gql`
            query { 
                searchCruiseItineraries (destinations: [2] page: 1 sorter: ${+this.sortVal} maxallowed: 60) { 
                    Itinerary { 
                        ID 
                        Num_Nights 
                        Brochure_Price 
                        Destination { 
                            ID Name 
                        } 
                        Departure_Port { 
                            ID Name 
                        } 
                        Arrival_Port { 
                            ID Name 
                        } 
                        Cruise_Line { 
                            ID Name 
                        } 
                        Ship { 
                            ID 
                            Name 
                        } 
                    } 
                    minprice 
                    Departure_Date 
                } 
            }
        `;

        this.apollo.watchQuery<any>({
            query: fiterQuery
        }).subscribe(({ data }) => {
            this.results = data.searchCruiseItineraries;
            this.modelData(data.searchCruiseItineraries)
        });        
    }    

}
