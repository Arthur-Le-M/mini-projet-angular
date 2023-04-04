import { Adresse } from "./adresse";
import { Chaudiere } from "./chaudiere";

export class Rapport {
  id!: number;
  nomTechnicien!: string;
  nomClient!: string;
  adresseClient!: Adresse;
  chaudiere!: Chaudiere;
  dateIntervention!: Date;
  dateMiseEnService!: Date;
  numeroSerie!: string;
  descriptionIntervention !: string;
  tempsPasse !: number;

  constructor(id: number, nomTechnicien: string, nomClient: string, adresseClient: Adresse, chaudiere: Chaudiere, dateIntervention: Date, dateMiseEnService: Date, numeroSerie: string, descriptionIntervention: string, tempsPasse: number) {
    this.id = id;
    this.nomTechnicien = nomTechnicien;
    this.nomClient = nomClient;
    this.adresseClient = adresseClient;
    this.chaudiere = chaudiere;
    this.dateIntervention = dateIntervention;
    this.dateMiseEnService = dateMiseEnService;
    this.numeroSerie = numeroSerie;
    this.descriptionIntervention = descriptionIntervention;
    this.tempsPasse = tempsPasse;
  }
}
