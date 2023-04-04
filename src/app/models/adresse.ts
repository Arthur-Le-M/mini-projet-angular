export class Adresse{
  rue!: string;
  codePostal!: string;
  ville!: string;

  constructor(rue: string, codePostal: string, ville: string) {
    this.rue = rue;
    this.codePostal = codePostal;
    this.ville = ville;
  }
}
