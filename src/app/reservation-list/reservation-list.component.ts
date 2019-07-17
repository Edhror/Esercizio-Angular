import { Component, OnInit } from '@angular/core';
import { Reservation } from './reservation';
import { ReservationService } from './reservation-service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations : Reservation [];
  
  constructor(private reservationService : ReservationService) {

   }

  ngOnInit() {
    this.reservations=this.reservationService.getAll(); 
  }

  // togglePayment(r:Reservation) : void {
  //   r.paid = !r.paid;    
  // }

}
