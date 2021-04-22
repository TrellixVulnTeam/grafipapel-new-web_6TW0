import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@components/home/home.component';
import { AboutComponent } from '@components/about/about.component';
import { ContactComponent } from '@components/contact/contact.component';
import { ServicesFlexoComponent } from '@components/services-flexo/services-flexo.component';
import { ServicesOffsetComponent } from '@components/services-offset/services-offset.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'flexo', component: ServicesFlexoComponent },
  { path: 'offset', component: ServicesOffsetComponent },
  {
    path: 'products',
    loadChildren: () => import('@modules/products.module').then(module => module.ProductsModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('@modules/jobs.module').then(module => module.JobsModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
