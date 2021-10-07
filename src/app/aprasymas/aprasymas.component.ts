import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-aprasymas',
  templateUrl: './aprasymas.component.html',
  styleUrls: ['./aprasymas.component.css'],
})
export class AprasymasComponent implements OnInit {

  receptas;
  receptai;
  id;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
   this.receptai = this.dataService.receptai;

   this.id = this.route.snapshot.params['id'];
   this.receptas = this.receptai[this.id];
  }
}
