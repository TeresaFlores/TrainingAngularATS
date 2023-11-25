import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnDestroy {
  open: boolean = false;
  mensaje = '';
  private subscriptionMensaje: Subscription;

  constructor(private toastService: ToastService) {
    this.subscriptionMensaje = this.toastService.mensaje$.subscribe((contenido) => {
      this.mensaje = contenido;
    })
    console.log('test toast component')

     this.subscriptionMensaje = this.toastService.open$.subscribe((open) => {
      this.open = open;
      console.log('test toast component')
    });
  }

  clearMensaje() {
    this.toastService.clearMensaje();
  }

  ngOnDestroy() {
    this.subscriptionMensaje.unsubscribe();
  }
}
