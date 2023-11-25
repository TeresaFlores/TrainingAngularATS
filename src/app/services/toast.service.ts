import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private mensaje = new Subject<string>();
  private open = new BehaviorSubject<boolean>(false);
  mensaje$ = this.mensaje.asObservable();
  open$ = this.open.asObservable();
  setMensaje(contenido: string) {
    this.mensaje.next(contenido);
  }
  abrirToast() {
    console.log('test toast service')

    this.open.next(true);
  }

  clearMensaje() {
    this.mensaje.next('');
  }
}
