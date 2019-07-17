import { Reservation } from './reservation';
import { Injectable } from '@angular/core';


export class ReservationService {
private reservations : Reservation [] = [];

constructor() {
    let res1= new Reservation(1, new Date(), new Date(), 10, 2, 5, false);
    let res2= new Reservation(2, new Date(), new Date(), 15, 3, 3, true);
    let res3= new Reservation(3, new Date(), new Date(), 20, 4, 4, false);
    this.reservations.push(res1);
    this.reservations.push(res2);
    this.reservations.push(res3);
}

byId(id: number) : Reservation {
    return this.reservations.find( r => r.id == id);
}


getAll() : Reservation[] {
    return this.reservations;
}

}
