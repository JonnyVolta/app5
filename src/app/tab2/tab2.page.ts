import { Component } from '@angular/core';
import { NivelesService } from '../server/niveles.service';
import { Nivel } from '../interface/nivel.interface';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  data: Nivel[] = [];

  constructor(
    private niveles: NivelesService
  ) {
    this.data = this.niveles.allNiveles();
  }

}
