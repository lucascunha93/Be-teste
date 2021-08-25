import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NewsComponent } from './news/news.component';
import { ProgramsComponent } from './programs/programs.component';
import { TrainingComponent } from './training/training.component';

@NgModule({
    declarations: [
        TrainingComponent,
        ProgramsComponent,
        NewsComponent
    ],
    imports: [
        CommonModule,
        IonicModule],
    exports: [
        TrainingComponent,
        ProgramsComponent,
        NewsComponent
    ]
})
export class ComponentModule { }