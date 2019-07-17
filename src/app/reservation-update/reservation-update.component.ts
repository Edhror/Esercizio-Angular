import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../reservation-list/reservation-service';
import { Reservation } from '../reservation-list/reservation';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reservation-update',
  templateUrl: './reservation-update.component.html',
  styleUrls: ['./reservation-update.component.css']
})
export class ReservationUpdateComponent implements OnInit {

  reservation : Reservation;
  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private reservationService : ReservationService) { }

  ngOnInit() {
    let id:number = +this.route.snapshot.paramMap.get('id');
    this.reservation = this.reservationService.byId(id);
  }


  onBack(): void {
    this.router.navigate(['/reservations']);
  }

  update(updateForm: NgForm): void{
    console.log(updateForm.value);
  }

}
