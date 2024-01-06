import {Book} from "../../books/models/book";
import {Member} from "../../../auth/models/member";

export interface Rating {
  id: number;
  book: Book;
  member: Member;
  rating: number;
}
