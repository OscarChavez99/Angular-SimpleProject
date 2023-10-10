import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  public cambioValor: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
}
