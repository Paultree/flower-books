import { Book } from './type';

export interface BookGridProp {
  data: Book[];
  isLoading: boolean;
  isError: boolean;
  error: null | Error;
}

export interface BookCardProp {
  data: Book;
}
