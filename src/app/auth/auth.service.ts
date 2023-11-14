import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AtuhResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiBaseUrl = 'http://localhost:5147';

  user = new BehaviorSubject<User | null>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  signup(username: string,email: string, password: string){
    return this.http.post<AtuhResponseData>(this.apiBaseUrl + '/Auth/Register',
    {
      username: username,
      email: email,
      password: password
    }).pipe(catchError(this.handleError), tap(resData => {
      this.handleAuthentication(
        resData.email,
        resData.idToken,
        resData.localId,
        resData.expiresIn
        );
    }));
  }
  private handleAuthentication(email: string, userId: string, token: string, expiresIn: string){
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email,userId,token,expirationDate);
    this.user.next(user);
    this.autoLogout(+expiresIn * 1000);
    localStorage.setItem('userData',JSON.stringify(user));
  }

  autoLogin() {
    const storedData = localStorage.getItem('userData');
    let userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    };

    if (!storedData) {
      return;
    }

    userData = JSON.parse(storedData);
    const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

    if (loadedUser.token) {
      this.user.next(loadedUser);
      this.autoLogout(new Date(userData._tokenExpirationDate).getTime() - new Date().getTime());
    }
  }

  login(email: string, password: string){
    return this.http.post<AtuhResponseData>(this.apiBaseUrl + '/Auth/Login' ,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError), tap(resp=>{
      this.handleAuthentication(resp.email,resp.localId,resp.idToken,resp.expiresIn);
      }));
  }

  autoLogout(expirationDuration: number){
    this.tokenExpirationTimer = setTimeout(()=>{
      this.logout();
    },expirationDuration);
  }

  logout(){
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }


  private handleError(errorRes: HttpErrorResponse){
    let errorMessage = 'An unknown error occured!';
    if (!errorRes.error || !errorRes.error.error){
      return throwError(errorMessage);
    }
    switch(errorRes.error.error.message){
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists!';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Password sign-in is disabled';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exists!';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid password!';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'Invalid login credentials!';
        break;
    }
    return throwError(errorMessage);
  }
}
