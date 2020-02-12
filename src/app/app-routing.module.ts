import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent} from './accueil/accueil.component';
import { CreditsComponent} from './credits/credits.component';


 
const routes: Routes = [
  { path: 'accueil', component: AccueilComponent } ,
  { path:'',  redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'credits', component: CreditsComponent },
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
