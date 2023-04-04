import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { Rapport } from 'src/app/models/rapport';
import { RapportsService } from 'src/app/services/rapports.service';

@Component({
  selector: 'app-saisir-rapport',
  templateUrl: './saisir-rapport.component.html',
  styleUrls: ['./saisir-rapport.component.scss']
})
export class SaisirRapportComponent {
  formulaire !: FormGroup;
  currentRapport$ !: Observable<Rapport>;
  service!: RapportsService;
  router !: Router;

  constructor(private formBuilder: FormBuilder, private monService: RapportsService, private monRouter: Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.formulaire = this.formBuilder.group({
      nomClient : ['', Validators.required],
      nomTechnicien : ['', Validators.required],
      dateIntervention : ['', Validators.required],
      dateMiseEnService : ['', Validators.required],
      rue : ['', Validators.required],
      codePostal : ['', Validators.required],
      ville : ['', Validators.required],
      marque : ['', Validators.required],
      modele : ['', Validators.required],
      numeroSerie : ['', Validators.required],
      descriptionIntervention : ['', Validators.required],
      tempsPasse : ['', Validators.required]
    });

    this.currentRapport$ = this.formulaire.valueChanges.pipe(map(formValue => (
      {
        id:0,
        nomClient: formValue.nomClient,
        nomTechnicien: formValue.nomTechnicien,
        dateIntervention: formValue.dateIntervention,
        dateMiseEnService: formValue.dateMiseEnService,
        adresseClient: {
          rue: formValue.rue,
          codePostal: formValue.codePostal,
          ville: formValue.ville
        },
        chaudiere: {
          marque: formValue.marque,
          modele: formValue.modele,
        },
        numeroSerie: formValue.numeroSerie,
        descriptionIntervention: formValue.descriptionIntervention,
        tempsPasse: formValue.tempsPasse
      }
    )));
  }

  saveRapport(){
    let newRapport: Rapport ={
      id:0,
      nomClient: this.formulaire.get('nomClient')?.value,
      nomTechnicien: this.formulaire.get('nomTechnicien')?.value,
      dateIntervention: this.formulaire.get('dateIntervention')?.value,
      dateMiseEnService: this.formulaire.get('dateMiseEnService')?.value,
      adresseClient: {
        rue: this.formulaire.get('rue')?.value,
        codePostal: this.formulaire.get('codePostal')?.value,
        ville: this.formulaire.get('ville')?.value
      },
      chaudiere: {
        marque: this.formulaire.get('marque')?.value,
        modele: this.formulaire.get('modele')?.value,
      },
      numeroSerie: this.formulaire.get('numeroSerie')?.value,
      descriptionIntervention: this.formulaire.get('descriptionIntervention')?.value,
      tempsPasse: this.formulaire.get('tempsPasse')?.value
    }
    console.log(this.monService)

    this.monService.addRapport(newRapport).pipe(
      tap(()=> this.monRouter.navigate(['/consulter']))).subscribe();
  }
}
