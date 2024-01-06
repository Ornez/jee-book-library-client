import { Component } from '@angular/core';
import {BookService} from "../services/book.service";
import {tap} from "rxjs";
import {BookStoreService} from "../stores/book-store.service";
import {AsyncPipe, NgForOf, NgIf, SlicePipe} from "@angular/common";
import {AccountService} from "../../../auth/services/account.service";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    SlicePipe,
    NgIf
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  constructor(private bookService: BookService,
              public bookStore: BookStoreService,
              public accountService: AccountService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks()
      .pipe(
        tap(books => {
          this.bookStore.books.next(books);
        })
      )
      .subscribe()
  }
}
