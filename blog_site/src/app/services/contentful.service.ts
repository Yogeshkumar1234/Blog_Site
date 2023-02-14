import { Injectable } from '@angular/core';
import{BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  data: any="";

  constructor() { }

  setData(data:object) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
