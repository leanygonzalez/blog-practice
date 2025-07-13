import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Noticia } from '../noticia.model';

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  imports: [CommonModule, FormsModule]
})
export class BlogComponent {
 noticias: Noticia[] = [
  {
    titulo: 'Brillar sin brillar: el auge del maquillaje efecto piel fresca',
    imagenUrl: 'https://images.unsplash.com/photo-1595433707802-bc5e47a46c2f',
    texto: 'Este verano lo que se lleva no es el exceso, sino la sutileza: bases ligeras, iluminadores en crema y labiales que parecen tu tono natural. Las redes sociales están llenas de rutinas donde se prioriza la piel real sobre los filtros. En esta entrada comparto mis favoritos low-cost que dan ese efecto “recién levantada y divina”.',
    fecha: '05-07-2025'
  },
  {
    titulo: 'Peludos con historia: adopta amor y cambia vidas',
    imagenUrl: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb',
    texto: 'El pasado fin de semana se celebró en la plaza central de Valencia una feria solidaria donde más de 40 perros y gatos buscaron familia. Algunas asociaciones compartieron historias conmovedoras de rescates y segundas oportunidades. Yo fui testigo del encuentro entre “Moka”, una perrita mestiza, y Clara, que se emocionó hasta las lágrimas al abrazarla.',
    fecha: '05-07-2025'
  }
];


  nuevaNoticia: Noticia = {
    titulo: '',
    imagenUrl: '',
    texto: '',
    fecha: ''
  };
  errorMensaje: string = '';

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



