import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-ingredientai-edit',
  templateUrl: './ingredientai-edit.component.html',
  styleUrls: ['./ingredientai-edit.component.css'],
})
export class IngredientaiEditComponent implements OnInit {

  receptas;
  receptai;
  id;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.receptai = this.dataService.receptai;

    this.id = this.route.snapshot.params['id'];
    this.receptas = this.receptai[this.id];
  }
  
  assign(id, name, amount, units) {
     if(name.value != '' && amount.value != '' && units.value != '') {
        this.dataService.assign(id, name.value, amount.value, units.value)
        this.router.navigate(['/aprasymas', this.id]);
     }
   }

}
