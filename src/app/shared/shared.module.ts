import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAboutComponent } from './shared-about/shared-about.component';
import { SharedBannerComponent } from './shared-banner/shared-banner.component';
import { SharedServicesComponent } from './shared-services/shared-services.component';
import { SharedNewsComponent } from './shared-news/shared-news.component';
import { SharedTrainerComponent } from './shared-trainer/shared-trainer.component';
import { SharedGalleryComponent } from './shared-gallery/shared-gallery.component';
import { SharedContactComponent } from './shared-contact/shared-contact.component';



@NgModule({
  declarations: [
    SharedAboutComponent,
    SharedBannerComponent,
    SharedServicesComponent,
    SharedNewsComponent,
    SharedTrainerComponent,
    SharedGalleryComponent,
    SharedContactComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        SharedAboutComponent,
        SharedBannerComponent,
        SharedServicesComponent,
        SharedNewsComponent,
        SharedTrainerComponent,
        SharedGalleryComponent,
        SharedContactComponent
    ]
})
export class SharedModule { }
