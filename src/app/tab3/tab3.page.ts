import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Nivel } from '../interface/nivel.interface';
import { NivelesService } from '../server/niveles.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  nivel: Nivel;
  link: any;
  frame: boolean = false;
  level: Number = 0;

  loading: boolean = true;

  constructor(
    public sanitizer: DomSanitizer,
    private router: ActivatedRoute,
    private niveles: NivelesService
  ) { 
    this.nivel = this.niveles.getNivel( Number(this.router.snapshot.params['app']) )!;
    this.link = this.sanitizer.bypassSecurityTrustResourceUrl(this.nivel.url);
    setTimeout(() => {
      this.frame = true;
    }, 100);
  }

  uploadDone(event: any): void { 

    const link = event.target.contentDocument.URL; 
  
    if(link !== 'about:blank'){
      const segment = link.split('/');
      const nivel = segment[segment.length - 1];
      this.level = Number(this.niveles.getNivelIndex( nivel )?.id);  
        this.loading = false; 
    }
    
  }

}


