import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  id: string;
  name: string;
  city: string;
  idDisabl:boolean;
  nameDisabl:boolean;
  // nameColor:string;
  constructor() { }
}
