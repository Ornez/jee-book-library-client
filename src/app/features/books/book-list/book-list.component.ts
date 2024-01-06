import { Component } from '@angular/core';
import {BookListItemComponent} from "../book-list-item/book-list-item.component";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    BookListItemComponent
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {

}
