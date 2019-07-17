import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation-list/reservation';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ReservationService } from '../reservation-list/reservation-service';
import { ActivatedRoute, Router } from '@angular/router';

function timeMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  let startControl = c.get('start');
  let endControl = c.get('end');

  if (startControl.pristine || endControl.pristine) {
    return null;
  }

  let startMillis = Date.parse(startControl.value);
  let endtMillis = Date.parse(endControl.value);

  if (startMillis <= endtMillis) {
    return null;
  }
  return { 'match': true };
}


@Component({
  selector: 'app-reservation-update-reactive',
  templateUrl: './reservation-update-reactive.component.html',
  styleUrls: ['./reservation-update-reactive.component.css']
})

export class ReservationUpdateReactiveComponent implements OnInit {

  reservation: Reservation;
  reservationForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationService, private fb: FormBuilder) { }

  ngOnInit() {
    let id: number = +this.route.snapshot.paramMap.get('id');
    this.reservation = this.reservationService.byId(id);
    this.reservationForm = this.fb.group({
      timeGroup: this.fb.group({
        start: ['', [Validators.required]],
        end: ['', [Validators.required]]
      },
        { validator: timeMatcher }
      ),

      clientId: ['', [Validators.required]],
      courtId: ['', [Validators.required]],
      cost: ['', [Validators.required]],

    });
  }
public update() : void {
  console.log(this.reservationForm.value);
}

}
