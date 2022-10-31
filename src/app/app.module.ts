import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RootCardComponent } from './ModelsCards/RootCard.component';
import { CommonModule } from '@angular/common';
import { ChildCardComponent } from './ModelsCards/ChildCard.component';
import { PetCardComponent } from './ModelsCards/pet.component';
import { CatCardComponent } from './ModelsCards/Cat.component';
import { DogCardComponent } from './ModelsCards/Dog.component';
import { TreatementCardComponent } from './ModelsCards/Treatement.component';
import { VaccineCardComponent } from './ModelsCards/Vaccine.component';
import { UserCardComponent } from './ModelsCards/User.component';
@NgModule({
  declarations: [
    AppComponent,
    RootCardComponent,
    ChildCardComponent,
    PetCardComponent,
    CatCardComponent,
    DogCardComponent,
    TreatementCardComponent,
    VaccineCardComponent,
    UserCardComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule,
    RouterModule,
    NgbModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
