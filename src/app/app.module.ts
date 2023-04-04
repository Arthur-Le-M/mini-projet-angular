import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SaisirRapportComponent } from './components/saisir-rapport/saisir-rapport.component';
import { ConsulterRapportComponent } from './components/consulter-rapport/consulter-rapport.component';
import { HttpClientModule } from '@angular/common/http';
import { RapportComponent } from './components/rapport/rapport.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    SaisirRapportComponent,
    ConsulterRapportComponent,
    RapportComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
