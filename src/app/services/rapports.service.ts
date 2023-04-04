import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { Rapport } from '../models/rapport';

@Injectable({
  providedIn: 'root'
})
export class RapportsService {

  constructor(private http : HttpClient ) { }

  getAllRapports(): Observable<Rapport[]>{
    return this.http.get<Rapport[]>('http://localhost:3000/Rapports')
  }

  getRapportById(id: number): Observable<Rapport>{
    const rapport = this.http.get<Rapport>('http://localhost:3000/Rapports/' + id)
    if(rapport == undefined){
      throw new Error("Rapport inexistant");
    }
    return rapport;
  }

  addRapport(rapport: Rapport): Observable<Rapport>{
    return this.getAllRapports().pipe(
      map(rapports => [...rapports].sort((a,b) => a.id - b.id)),
      map(rapports_tries => rapports_tries[rapports_tries.length - 1]),
      map(rapport_max => rapport.id = rapport_max.id + 1),
      switchMap(() => this.http.post<Rapport>('http://localhost:3000/Rapports', rapport)));
  }
}
