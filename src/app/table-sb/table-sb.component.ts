import { SuperBowlChampions } from './../SuperBowlChampions';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-sb',
  templateUrl: './table-sb.component.html',
  styleUrl: './table-sb.component.css'
})
export class TableSBComponent {
  superBowlChampions: SuperBowlChampions[] = [
    {
      id: 1 ,
      champions: "Green Bay Packers",
      score: "35 x 10",
      opponent: "Kansas City Chiefs",
      mvp: "Bart Starr",
      year: 1967,
      local: "Los Angeles Memorial Coliseum, Los Angeles, California"
    }
  ]
}
