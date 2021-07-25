import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { GalleryHeaderComponent } from './gallery-header/gallery-header.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    GalleryComponent,
    GalleryHeaderComponent
  ],
    imports: [
        CommonModule,
        GalleryRoutingModule,
        SharedModule
    ]
})
export class GalleryModule { }
