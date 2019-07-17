import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../reservation-list/reservation';
import { NgForm } from '@angular/forms';
import { HttpReservationService } from '../reservation-list/http-reservation-service';

@Component({
  selector: 'app-reservation-update',
  templateUrl: './reservation-update.component.html',
  styleUrls: ['./reservation-update.component.css']
})
export class ReservationUpdateComponent implements OnInit {

  reservation : Reservation;
  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private reservationService : HttpReservationService) { }

  ngOnInit() {
    let id:number = +this.route.snapshot.paramMap.get('id');
    this.reservationService.byId(id).subscribe(
        r => this.reservation = r
    );
  }


  onBack(): void {
    this.router.navigate(['/reservations']);
  }

  update(updateForm: NgForm): void{
    console.log(updateForm.value);
  }

}
