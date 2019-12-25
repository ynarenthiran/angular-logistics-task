import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { filter, debounceTime, take } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ROUTE_ANIMATIONS_ELEMENTS, NotificationService } from '../../../core/core.module';
import { ContactUsService } from '../contact-us.service';

@Component({
  selector: 'anms-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ContactUsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  form = this.fb.group({
    name: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]]
  });

  formValueChanges$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private notificationService: NotificationService,
    private service: ContactUsService
  ) { }

  ngOnInit() {
    this.formValueChanges$ = this.form.valueChanges.pipe(
      debounceTime(500),
      filter((form: any) => form.autosave)
    );
  }

  send(data) {
    const d = {
      phone: data.mobile,
      body: data.message
    };
    this.service.sendMessage(d).subscribe((res) => {
      this.notificationService.info('Message Sent Successfully');
      this.form.reset();
    }, (err) => {
      console.error(err);
      this.notificationService.error('Server Error');
      this.form.reset();
    })
  }
}
