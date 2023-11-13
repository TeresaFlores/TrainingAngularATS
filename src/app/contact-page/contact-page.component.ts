import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent {
  formData = {
    name: '',
    emailAddress: '',
    messageTitle: '',
    messageBody: '',
  };

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    console.log(this.formData);
  }
}
