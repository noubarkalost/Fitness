import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAboutComponent } from './shared-about/shared-about.component';
import { SharedBannerComponent } from './shared-banner/shared-banner.component';
import { SharedServicesComponent } from './shared-services/shared-services.component';



@NgModule({
  declarations: [
    SharedAboutComponent,
    SharedBannerComponent,
    SharedServicesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedAboutComponent,
    SharedBannerComponent,
    SharedServicesComponent
  ]
})
export class SharedModule { }
