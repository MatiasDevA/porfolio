import { Injectable } from '@angular/core';
import {signInWithPopup, GoogleAuthProvider, Auth} from "@angular/fire/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {
  constructor(private auth: Auth) {}
  authGoogle() {
   return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
}
