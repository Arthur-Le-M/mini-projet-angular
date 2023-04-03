import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ConsulterRapportComponent } from './components/consulter-rapport/consulter-rapport.component';
import { SaisirRapportComponent } from './components/saisir-rapport/saisir-rapport.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'consulter', component: ConsulterRapportComponent},
  { path: 'saisir', component: SaisirRapportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
