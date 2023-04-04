import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rapport } from 'src/app/models/rapport';
import { RapportsService } from 'src/app/services/rapports.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss']
})
export class RapportComponent implements OnInit {
  @Input() leRapport!: Rapport;
  unRapport!: Rapport;
  obsRapport$!: Observable<Rapport>;
  constructor(private myRapportService: RapportsService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const idRapport = this.myRapportService.getRapportById(this.router.snapshot.params['id']);
    if(idRapport !== undefined){
      this.myRapportService.getRapportById(this.router.snapshot.params['id']).subscribe(Rapport => this.unRapport = Rapport)
    }

  }
}
