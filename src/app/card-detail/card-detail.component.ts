import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  @Input() left: any[] = [];
  @Input() legend: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}


