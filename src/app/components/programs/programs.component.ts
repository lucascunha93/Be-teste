import { Component } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
})
export class ProgramsComponent {

  programs = [
    {
      "titulo": "LEVANTAMENTO DE PESO",
      "started": true
    },
    {
      "titulo": "YOGA",
      "started": false
    },
    {
      "titulo": "MUSCULACÃO",
      "started": true
    },
  ]

  constructor() { }
}
