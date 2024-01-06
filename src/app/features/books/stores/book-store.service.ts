import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Book} from "../models/book";

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  books: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  constructor() { }
}
