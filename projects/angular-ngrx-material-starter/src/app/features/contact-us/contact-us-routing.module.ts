import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: ContactUsComponent,
    data: { title: 'Contact' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
