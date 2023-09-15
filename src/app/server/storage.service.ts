import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  private _storage: Storage | null = null;
  constructor(
    private storage: Storage
  ) {
    this.init();
  }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }


  async saveFlag(flag: boolean){ 
    this._storage!.set('welcome', flag);
  }

  async loadFlag() { 
    return  await this.storage.get('welcome') || false;
  }

}
