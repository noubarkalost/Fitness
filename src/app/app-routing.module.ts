import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomPreloadingStrategy} from './preloading-strategy'
const routes: Routes = [
  {
    path:"home", loadChildren: ()=>import('./home/home.module').then(mod=>mod.HomeModule),
    data: { applyPreload : true}
  },
  {
    path:"services", loadChildren: ()=>import('./services/services.module').then(mod=>mod.ServicesModule),
    data: { applyPreload : true}
  },
  {
    path:"about", loadChildren: ()=>import('./about/about.module').then(mod=>mod.AboutModule),
    data: { applyPreload : true}
  },
  {
    path:"news", loadChildren: ()=>import('./news/news.module').then(mod=>mod.NewsModule),
    data: { applyPreload : true}
  },
  {
    path:"trainer", loadChildren: ()=>import('./trainer/trainer.module').then(mod=>mod.TrainerModule),
    data: { applyPreload : true}
  },
  {
    path:"gallery", loadChildren: ()=>import('./gallery/gallery.module').then(mod=>mod.GalleryModule),
    data: { applyPreload : true}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
