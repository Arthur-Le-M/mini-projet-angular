import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rapport } from 'src/app/models/rapport';
import { RapportsService } from 'src/app/services/rapports.service';


@Component({
  selector: 'app-consulter-rapport',
  templateUrl: './consulter-rapport.component.html',
  styleUrls: ['./consulter-rapport.component.scss']
})
export class ConsulterRapportComponent implements OnInit{
  listRapports$!: Observable<Rapport[]>;
  constructor(private myRapportService: RapportsService) { }

  ngOnInit(): void {
    this.listRapports$ = this.myRapportService.getAllRapports();
  }
}


