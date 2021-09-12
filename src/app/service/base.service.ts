import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';
import{AngularFirestoreCollection, AngularFirestore} from 'angularfire2/firestore'
import{map} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
private itemsCollection: AngularFirestoreCollection<T> | undefined;
collectionName: string = '';
afs: AngularFirestore;  
constructor(afs: AngularFirestore) { 
  this.afs = afs
}

getAll(collectionName: string): Observable<T[]>{
  if (!this.itemsCollection) {
    this.collectionName = collectionName;
    this.itemsCollection = this.afs.collection<T>(this.collectionName)
  }
  return this.itemsCollection.snapshotChanges().pipe(
    map(action => action.map(a =>{
      const data = a.payload.doc.data();
    
      return data;
    }))
  )
}
}
