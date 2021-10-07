import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-receptai',
  templateUrl: './receptai.component.html',
  styleUrls: ['./receptai.component.css'],
})
export class ReceptaiComponent implements OnInit {
   
  receptai;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.receptai = this.dataService.receptai;
  }
}
