import { Component } from '@angular/core';
import { ToastService } from '../services/toast.service';

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

  constructor(private toastService: ToastService) {}

  onSubmit(formElement: HTMLFormElement, event: SubmitEvent) {
    event.preventDefault();
    //only did it this way because i wanted to use pipes
    const formData = new FormData(formElement);
    let data: Record<string, string> = {};
    formData.forEach((val, key) => (data[key] = val as string));
    this.toastService.setMessage('toast works!');
    console.log(data);

    // console.log(this.formData); //doing this bugs out with pipes because pipes only go 1 way
  }
}
