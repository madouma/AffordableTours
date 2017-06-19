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
