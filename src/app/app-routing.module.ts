import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLocationComponent } from './add-location/add-location.component';
import { LocationComponent } from './location/location.component';


const routes: Routes = [
  { path:'', component : AddLocationComponent},
  { path:'addlocation', component : AddLocationComponent},
  { path:'location', component : LocationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
