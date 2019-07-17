import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { CourtListComponent } from './courts/court-list/court-list.component';
import { ReservationUpdateComponent } from './reservation-update/reservation-update.component';
import { ReservationService } from './reservation-list/reservation-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationUpdateReactiveComponent } from './reservation-update-reactive/reservation-update-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservationListComponent,
    ClientListComponent,
    CourtListComponent,
    ReservationUpdateReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'reservations', component: ReservationListComponent},
      { path: 'courts', component: CourtListComponent},
      { path: 'clients', component: ClientListComponent},
      { path: 'reservations/:id', component: ReservationUpdateReactiveComponent},
      { path: '', redirectTo: 'reservations', pathMatch: 'full'},
      { path: '**', redirectTo: 'reservations', pathMatch: 'full'},
    ] /* {useHash: true} */), 
  ],
  providers: [ ReservationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
