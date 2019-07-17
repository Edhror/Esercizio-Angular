import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from './reservation';
import { Injectable } from '@angular/core';

export class HttpReservationService {

    url = "http://localhost:8080/api/reservations";
    constructor(private http: HttpClient) {
    }

    byId(id: number) : Observable<Reservation>{
        console.log("chiamato byid");
       return this.http.get<Reservation>(this.url + "/" + id);
    }

    getAll(): Observable<Reservation[]> {
        return this.http.get<Reservation[]>(this.url);
    }
}