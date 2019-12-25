import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { filter, debounceTime, take } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ROUTE_ANIMATIONS_ELEMENTS, NotificationService } from '../../../core/core.module';

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
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.formValueChanges$ = this.form.valueChanges.pipe(
      debounceTime(500),
      filter((form: any) => form.autosave)
    );
  }

  update(form: any) {
    
  }

  save() {
    
  }

  submit() {
    if (this.form.valid) {
      this.save();
      this.notificationService.info(
        (this.form.value.requestGift
          ? this.translate.instant('anms.examples.form.text4')
          : this.translate.instant('anms.examples.form.text5')) +
          ' : ' +
          this.translate.instant('anms.examples.form.text6')
      );
    }
  }

  reset() {
    this.form.reset();
    this.form.clearValidators();
    this.form.clearAsyncValidators();
  }
}
