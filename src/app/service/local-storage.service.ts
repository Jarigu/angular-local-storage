import { Injectable } from '@angular/core';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LSService {

    value: string;
  
    constructor() {
      // console.log(JSON.parse(localStorage.getItem('todos')))
      this.value =  localStorage.getItem('key1') ?? 'Not value found';
    }
  
    getValue() {
      this.value =  localStorage.getItem('key1') ?? 'Not value found';
      return of(this.value);
    }

    createValue() {
        localStorage.setItem('key1', 'Is a default value');
    }

    clear() {
      localStorage.clear();
    }
  
  }