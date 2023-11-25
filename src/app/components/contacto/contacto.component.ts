import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent implements OnInit {
  contactoForm: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    correo: new FormControl(''),
    asunto: new FormControl(''),
    mensaje: new FormControl('')
  });
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      asunto: ['', [Validators.required, Validators.minLength(5)]],
      mensaje: ['', [Validators.required, Validators.minLength(15)]],
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Form', {
      nombre: form.value?.nombre,
      correo: form.value?.correo,
      asunto: form.value?.asunto,
      mensaje: form.value?.mensaje,
    });
  }
}
