import {Author} from "../../authors/models/author";

export interface Book {
  id: number;
  name: string;
  description: string;
  pages: number;
  author: Author;
  averageRating: number;
  numberOfVotes: number;
}
