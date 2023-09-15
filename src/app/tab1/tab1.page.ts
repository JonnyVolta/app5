import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular'; 
import { StorageService } from '../server/storage.service';

interface Slider {
  img: string, 
  titulo: string, 
  desc: string
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  public slides: Slider[] = [
    {
      img: '/assets/img/ap1.webp',
      titulo: 'Bienvenido',
      desc: 'Mate365 trae para ti la aplicación <br> ax² + bx + c = 0'
    },
    {
      img: '/assets/img/telefono-inteligente.png',
      titulo: 'Una gran aplicación',
      desc: 'Dirigida al estudiante que inicia en su aprendizaje en la resolución de ecuaciones de segundo grado de la forma ax² + bx + c = 0'
    },
    
    {
      img: '/assets/img/coseno.png',
      titulo: 'Multiples Métodos',
      desc: 'Mediante la fórmula general o factorización según sea la expresión algebraica: un TCP; de la forma: x²+px + q o una diferencia de cuadrados'
    },
    {
      img: '/assets/img/libro-de-matematicas.png',
      titulo: 'Fácil entendimiento',
      desc: 'Resuelve la ecuación paso a paso y de manera detallada.'
    },
    {
      img: '/assets/img/calculo.png',
      titulo: 'Aprendizaje progresivo',
      desc: 'Con cada nivel de aprendizaje se incrementa el grado de dificultad'
    },
    {
      img: '/assets/img/logaritmo.png',
      titulo: 'Cientos de Ejercicios',
      desc: 'Para cada nivel de aprendizaje se pueden analizar y resolver cientos de ejercicios diferentes con solo cambiar el valor de a,b y c'
    },
  ];
  @ViewChild('slider', { read: IonSlides })
  slider!: IonSlides;
  constructor(
    private router: Router,
    private storageService: StorageService
    ) { }
  ngOnInit() { }

  goToDashboard(): void{
    const content  = document.getElementById('welcome')! ;
    content.classList.remove('animate_fadeIn');
    content.classList.add('animate__fadeOut');
    setTimeout(() => {
      this.storageService.saveFlag(true);
      this.router.navigate(['/tabs', 'tab2']);
      setTimeout(() => {
        this.slider.slideTo(0);
      }, 400);
    }, 350);
  }

}
