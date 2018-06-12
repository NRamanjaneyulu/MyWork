import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class Items {
  

  constructor(public api: Api, public afAuth: AngularFireAuth, private afd: AngularFireDatabase) { }

  query(params?: any) {
    return this.api.get('/items', params);
  }

  // add(item: any) {
    
  //   var items = this.afd.list('/ItemList');
  //     const newItemRef = items.push({});
  //     newItemRef.set({
  //       name: item.name,
  //       about:item.about
  //     }).then(newItem => {
  //       return newItem;
  //     }, error => {
  //       console.log(error);
  //     });
  // }

  delete(item: Item) {
  }

}
