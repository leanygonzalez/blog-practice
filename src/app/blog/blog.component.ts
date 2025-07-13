import { Component, OnInit } from '@angular/core';
import { Noticia } from './noticia.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  noticias: Noticia[] = [];
  nuevaNoticia: Noticia = { titulo: '', imagenUrl: '', texto: '', fecha: '' };
  errorMensaje = '';

  ngOnInit(): void {
    this.noticias = [
      {
        titulo: 'Bienvenida al blog',
        imagenUrl: 'https://via.placeholder.com/150',
        texto: 'Esta es la primera noticia de nuestro blog.',
        fecha: new Date().toISOString().split('T')[0]
      },
      {
        titulo: 'Segunda noticia',
        imagenUrl: 'https://via.placeholder.com/150',
        texto: 'Aquí tienes otra entrada para ver cómo funciona.',
        fecha: new Date().toISOString().split('T')[0]
      }
    ];
  }

  agregarNoticia(): void {
    this.errorMensaje = '';
    const { titulo, imagenUrl, texto, fecha } = this.nuevaNoticia;
    if (!titulo || !imagenUrl || !texto || !fecha) {
      this.errorMensaje = 'Todos los campos son obligatorios.';
      return;
    }
    this.noticias.unshift({ ...this.nuevaNoticia });
    this.nuevaNoticia = { titulo: '', imagenUrl: '', texto: '', fecha: '' };
  }
}
