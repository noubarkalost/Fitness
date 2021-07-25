import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerRoutingModule } from './trainer-routing.module';
import { TrainerComponent } from './trainer.component';
import {SharedModule} from "../shared/shared.module";
import { TrainerHeadComponent } from './trainer-head/trainer-head.component';


@NgModule({
  declarations: [
    TrainerComponent,
    TrainerHeadComponent
  ],
    imports: [
        CommonModule,
        TrainerRoutingModule,
        SharedModule
    ]
})
export class TrainerModule { }
