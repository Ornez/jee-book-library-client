import {Book} from "../../books/models/book";
import {User} from "../../../auth/models/user";

export interface Rating {
  id: number;
  book: Book;
  user: User;
  rating: number;
}
