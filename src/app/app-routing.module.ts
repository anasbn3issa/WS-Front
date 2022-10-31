import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootCardComponent } from './ModelsCards/RootCard.component';
import { ChildCardComponent } from './ModelsCards/ChildCard.component';
import { PetCardComponent } from './ModelsCards/pet.component';
import { DogCardComponent } from './ModelsCards/Dog.component';
import { CatCardComponent } from './ModelsCards/Cat.component';
import { TreatementCardComponent } from './ModelsCards/Treatement.component';
import { VaccineCardComponent } from './ModelsCards/Vaccine.component';
import { UserCardComponent } from './ModelsCards/User.component';


const routes: Routes =[
  { path: 'root', component: RootCardComponent },
  { path: 'children/:title', component: ChildCardComponent },
  { path: 'pets', component: PetCardComponent },
  { path: 'pets/dogs', component: DogCardComponent },
  { path: 'pets/cats', component: CatCardComponent},
  { path: 'treatement', component: TreatementCardComponent},
  { path: 'vaccine', component: VaccineCardComponent},
  { path: 'users', component: UserCardComponent},
  {path: '', redirectTo: 'root', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
