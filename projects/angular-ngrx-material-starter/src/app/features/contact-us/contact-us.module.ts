import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModule } from '../../shared/shared.module';
import { ContactUsService } from './contact-us.service';


@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    SharedModule
  ],
  providers: [ContactUsService]
})
export class ContactUsModule { }
