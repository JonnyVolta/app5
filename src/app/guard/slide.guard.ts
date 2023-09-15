import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { map} from 'rxjs/operators';
import { StorageService } from 'src/app/server/storage.service';
 
@Injectable({
  providedIn: 'root'
})
export class SlideGuard implements CanActivate {
  constructor(
    private router: Router,
    private storageService: StorageService
  ){}
   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
    return from(this.storageService.loadFlag())
    .pipe(map(welcolme => {
        if(welcolme === false) return true;
        else{
            this.router.navigateByUrl('/tabs/tab2');
            return false;
        }
    }));
  }
}
