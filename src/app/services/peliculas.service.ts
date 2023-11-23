import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor() { }

  private peliculas = [
    {
      imagen: 'assets/movies/spiderverse.jpg',
      nombre: 'Spiderman into the Spiderverse',
      horarios: ['12:10','14:20','16:30','18:40','21:00'],
      sinopsis: 'El adolescente Miles Morales se convierte en el Spider-Man de su universo, y debe unirse a cinco individuos con poderes arácnidos de otras dimensiones para detener una amenaza para todas las realidades.',
    },
    {
      imagen: 'assets/movies/starwars.jpg',
      nombre: 'Star Wars Revenge of the Siths',
      horarios: ['12:00','14:10','16:20','18:30','20:40','23:00'],
      sinopsis: 'Tras tres años de Guerras Clon, los jedi rescatan a Palpatine del Conde Dooku. Mientras Obi-Wan persigue una nueva amenaza, Anakin actúa como agente doble entre el Consejo Jedi y Palpatine, siendo atraído por un siniestro plan.',
    },
    {
      imagen: 'assets/movies/harrypotter.jpeg',
      nombre: 'Harry Potter and The Halfblodd Prince',
      horarios: ['12:10','14:20','16:30','18:40','21:00'],
      sinopsis: 'Cuando Harry Potter empieza su sexto año en Hogwarts, descubre un viejo libro marcado como propiedad del príncipe mestizo y comienza a aprender más sobre el oscuro pasado de Lord Voldemort.',
    },
    {
      imagen: 'assets/movies/loveme.jpg',
      nombre: 'Love me if you dare',
      horarios: ['12:10','14:20'],
      sinopsis:
        'Como adultos, Julien y Sophie continúan el extraño juego que comenzaron años atrás: intentar superarse entre si con acrobacias atrevidas e indignantes. Su juego podría ocultar el hecho de que realmente estén hechos el uno para el otro.',
    },
    {
      imagen: 'assets/movies/amantes.jpg',
      nombre: 'Los Amantes del Circulo Polar',
      horarios: ['16:30','18:40'],
      sinopsis: 'En la fría Laponia de Finlandia, bajo el eterno sol de medianoche, dos amantes se reúnen después de un largo período de separación, guiados por un poderoso motivo recurrente tejido por el destino, la fe y el amor. ¿Pueden negar su destino?',
    },
    {
      imagen: 'assets/movies/friedgreentomatoes.jpg',
      nombre: 'Fried Green Tomatoes',
      horarios: ['12:10','14:20','16:30'],
      sinopsis: 'Una ama de casa insatisfecha entabla amistad con una mujer mayor y se deja conquistar por sus fantásticas anécdotas de juventud.',
    },
    {
      imagen: 'assets/movies/lotr.jpg',
      nombre: 'The Lord of The Rings and The Return of The king',
      horarios: ['12:00','14:10','16:20','18:30','20:40','23:00'],
      sinopsis:
        'Gandalf y Aragorn lideran el mundo de los hombres contra la armada de Sauron para distraer su atención de Frodo y Sam, quienes se aproximan al Monte del Destino con el Anillo Único.',
    },
    {
      imagen: 'assets/movies/dune.jpg',
      nombre: 'Dune',
      horarios: ['12:00','14:10','16:20','18:30','20:40','23:00'],
      sinopsis: 'Una familia noble se ve envuelta en una guerra por el control del bien más valioso de la galaxia mientras su heredero se ve perturbado por visiones de un futuro oscuro.',
    },
    {
      imagen: 'assets/movies/williwonka.jpg',
      nombre: 'Wonka',
      horarios: ['12:00','14:10','16:20','18:30','20:40','23:00'],
      sinopsis: 'La historia se centrará específicamente en un joven Willy Wonka y en cómo conoció a los Oompa-Loompas en una de sus primeras aventuras.',
    },
    {
      imagen: 'assets/movies/devilwears.png',
      nombre: 'The Devil Wears Prada',
      horarios: ['12:00','14:10','16:20','18:30'],
      sinopsis: 'Una inteligente pero sensata recién graduada consigue un trabajo como asistente de Miranda Priestly, la exigente editora jefe de una revista de alta costura.',
    },
  ];

  getPeliculas(): typeof this.peliculas {
    return this.peliculas;
  }
}
