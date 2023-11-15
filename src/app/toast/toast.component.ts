import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ToastService } from '../services/toast.service';
import { Observer, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnDestroy {
  displayMessage: string = '';
  private subscription: Subscription;

  constructor(private toastService: ToastService) {
    this.subscription = this.toastService.message$.subscribe((message) => {
      this.displayMessage = message;
    });
  }

  clearMessage() {
    this.toastService.resetMessage();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
