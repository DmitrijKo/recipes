import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ingridientai',
  templateUrl: './ingridientai.component.html',
  styleUrls: ['./ingridientai.component.css'],
})
export class IngridientaiComponent implements OnInit {

  @Input() ingredientai;

  receptas;
  receptai;
  id;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.receptai = this.dataService.receptai;

    this.id = this.route.snapshot.params['id'];
    this.receptas = this.receptai[this.id];
  }
}
