import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {

  private data: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
   }

  getData(){
    return this.db.list('moving');
  }
  
}
