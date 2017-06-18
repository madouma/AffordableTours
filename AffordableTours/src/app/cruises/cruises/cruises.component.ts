import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

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
export interface ICruise {
    sailDate: Date;
    cruiseLine: string;
    ship: string;
    destination: string;
    portName: string;
    nights: string;
    cost:number;
    discount?: number;
}

@Component({
    selector: 'atours-cruises',
    templateUrl: './cruises.component.html',
    styleUrls: ['./cruises.component.scss']
})
export class CruisesComponent implements OnInit {

    results: any[] = [];
    cruises: ICruise[] = [];
    selectedPackage: any;

    constructor(private apollo: Apollo) { }

    ngOnInit() {
        this.apollo.watchQuery<any>({
            query: searchCruiseItineraries
        }).subscribe(({ data }) => {
            this.results = data.searchCruiseItineraries;
            this.modelData(data.searchCruiseItineraries)
        });
    }

// Brochure_Price - minprice / Brochure_Price (if Brochure_Price is not null and greater than 0)

    modelData(data: any[]) {
        data.map(itenary => {
            let Itinerary = itenary.Itinerary;
            this.cruises.push({
                sailDate: itenary.Departure_Date,
                cruiseLine: Itinerary.Cruise_Line.Name,
                ship: Itinerary.Ship.Name,
                destination: Itinerary.Destination.Name.slice(0, Itinerary.Destination.Name.indexOf('-')).trim(),
                portName: Itinerary.Departure_Port.Name,
                nights: Itinerary.Num_Nights,
                cost: itenary.minprice,
                discount: Math.round(( Itinerary.Brochure_Price ? ( Itinerary.Brochure_Price - itenary.minprice ) / Itinerary.Brochure_Price : 0 ) * 100)
            })
        });

        console.log('modeled: ', this.cruises);
        
    }

    onPackageSelection(cruise: any) {
        this.selectedPackage = cruise;

        console.log('selected: ', this.selectedPackage);
    }

}
