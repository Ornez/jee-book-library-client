import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, of} from "rxjs";
import {environment} from "../../../environments/environment";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl: string = environment.apiUrl;
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any): Observable<void> {
    return this.http.post<User>(this.baseUrl + 'authenticate', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          this.setCurrentUser(user);
        }
      })
    )
  }

  register(model: any): Observable<void> {
    return this.http.post<User>(this.baseUrl + 'register', model).pipe(
      map(user => {
        if (user) {
          this.setCurrentUser(user);
        }
      })
    )
  }

  setCurrentUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  logout(): void {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  isLoggedIn(): Observable<boolean> {
    return this.currentUser$.pipe(
      map(user => {
        if (user)
          return true;
        else
          return false;
      })
    )
  }

  isUserRole(): Observable<boolean> {
    if (!this.isLoggedIn())
      return of(false);

    return this.currentUser$.pipe(
      map(user => {
        const decodedJWT = JSON.parse(window.atob(user!.token.split('.')[1]));
        const roles: string[] = decodedJWT.ROLES;
        return roles.includes("ROLE_USER");
      })
    )
  }

  isAdminRole(): Observable<boolean> {
    if (!this.isLoggedIn())
      return of(false);

    return this.currentUser$.pipe(
      map(user => {
        const decodedJWT = JSON.parse(window.atob(user!.token.split('.')[1]));
        const roles: string[] = decodedJWT.ROLES;
        return roles.includes("ROLE_ADMIN");
      })
    )
  }
}
