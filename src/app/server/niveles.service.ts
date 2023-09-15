import { Injectable } from '@angular/core';
import { Nivel } from '../interface/nivel.interface';

@Injectable({
  providedIn: 'root'
})

export class NivelesService {
  niveles: Nivel[] = [
    {
      id: 1,
      index: 'app1.html',
      titulo: 'La expresión algebraica en la ecuación cuadrática es de la forma ax² + bx + c por fórmula general. <b>a, b</b> y <b>c ≠ 0; a, b, c</b>  son números enteros<br>   Z = (... -3, -2, -1, 0, +1, +2, +3 ...)',
      link: '/tabs/tab3/1',
      url: '../../../assets/mate365v5/app1.html',
      active: 1
    },
    {
      id: 2,
      index: 'app2.html',
      titulo: 'La expresión algebraica en la ecuación cuadrática es de la forma ax² + bx por fórmula general. <b>a, b ≠ 0; c = 0 a, b, c</b>   son números enteros <br>   Z = (... -3, -2, -1, 0, +1, +2, +3 ...)',
      link: '/tabs/tab3/2',
      url: '../../../assets/mate365v5/app2.html',
      active: 0
    },
    {
      id: 3,
      index: 'app3.html',
      titulo: 'La expresión algebraica en la ecuación cuadrática es de la forma ax² + c por fórmula general. <b>a, c ≠ 0;   b = 0   a, b, c</b>   son números enteros <br>   Z = (... -3, -2, -1, 0, +1, +2, +3 ...)',
      link: '/tabs/tab3/3',
      url: '../../../assets/mate365v5/app3.html',
      active: 0
    },
    {
      id: 4,
      index: 'app4.html',
      titulo: 'La expresión algebraica en la ecuación cuadrática es de la forma ax² + bx + c El Trinomio en la ecuación cuadrática es Cuadrado Perfecto (TCP) por factorización. <b>a, b y c ≠ 0; a, b, c</b>   son números enteros<br>   Z = (... -3, -2, -1, 0, +1, +2, +3 ...)',
      link: '/tabs/tab3/4',
      url: '../../../assets/mate365v5/app4.html',
      active: 0
    },
    {
      id: 5,
      index: 'app5.html',
      titulo: 'La expresión algebraica en la ecuación cuadrática es de la forma ax² + bx + c El trinomio en la ecuación cuadrática es de la forma x² + px + q por factorización. <b>a = +1,  b</b>    y   <b> c ≠ 0;   a, b, c</b>   son números enteros<br>   Z = (... -3, -2, -1, 0, +1, +2, +3 ...)',
      link: '/tabs/tab3/5',
      url: '../../../assets/mate365v5/app5.html',
      active: 0
    },
    {
      id: 6,
      index: 'app6.html',
      titulo: 'La expresión algebraica en la ecuación cuadrática es de la forma ax² + bx por factorización. <b>a, b ≠ 0; c = 0 a, b, c</b> son números enteros<br> Z = (... -3, -2, -1, 0, +1, +2, +3 ...)',
      link: '/tabs/tab3/6',
      url: '../../../assets/mate365v5/app6.html',
      active: 0
    },
    {
      id: 7,
      index: 'app7.html',
      titulo: 'La expresión algebraica en la ecuación cuadrática es de la forma ax² + c es una diferencia de cuadrados <b>A2 - B2</b>. por factorización. <b>a, c ≠ 0, A2 ≠ B2;  b = 0,  c < 0 a, b, c</b> son números enteros<br> Z = (... -3, -2, -1, 0, +1, +2, +3 ...)',
      link: '/tabs/tab3/7',
      url: '../../../assets/mate365v5/app7.html',
      active: 0
    },
    {
      id: 8,
      index: 'app8.html',
      titulo: 'La expresión algebraica en la ecuación cuadrática es de la forma ax² + c por despeje. <b>a, c ≠ 0; b = 0  a, b, c</b> son números entero<br>   Z = (... -3, -2, -1, 0, +1, +2, +3 ...)',
      link: '/tabs/tab3/8',
      url: '../../../assets/mate365v5/app8.html',
      active: 0
    }
  ];
  constructor() { }

  allNiveles(){
    return this.niveles;
  }

  getNivel(id: number){
    return this.niveles.find( nivel => nivel.id === id)
  }

  getNivelIndex( index: string){
    return this.niveles.find( nivel => nivel.index === index);
  }

}
