import { Component, Input } from '@angular/core';
import { Training } from './../../../models/training';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent {

  //@Input()
  traine: Training;

  constructor() { }

}
