import { Reservation } from './reservation';
import { Injectable } from '@angular/core';
import { Utilities } from './utilities';


export class ReservationService {
private reservations : Reservation [] = [];

constructor() {
    let d = Utilities.formatDate(new Date());
    let res1= new Reservation(1, d, d, 10, 2, 5, false);
    let res2= new Reservation(2, d, d, 15, 3, 3, true);
    let res3= new Reservation(3, d, d, 20, 4, 4, false);
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
