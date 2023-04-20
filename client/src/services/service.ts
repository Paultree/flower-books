import missingImg from '../assets/missing.jpeg';
import { Book } from './type';
import axios from 'axios';

export const getAllBooks = async (): Promise<Book[]> => {
  const response: any = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=flowers&maxResults=40`
  );

  if (!response) {
    throw new Error('Something went wrong. Unable to retrieve books. Retry or refresh page.');
  }

  const result: any = response.data;

  const books: Book[] = result.items.map((book: any) => {
    return {
      id: book?.id,
      title: book?.volumeInfo?.title || 'Title not available',
      authors: book?.volumeInfo?.authors?.join(' & ') || 'Authors not available',
      description: book?.volumeInfo?.description || 'Description not available',
      image: book?.volumeInfo?.imageLinks?.thumbnail || missingImg,
      publishedDate: book?.volumeInfo?.publishedDate || 'Information missing',
      storeLink: book?.saleInfo?.buyLink || null,
      previewLink: book?.saleInfo?.isEbook ? book?.volumeInfo?.previewLink : null
    };
  });

  return books;
};

export const getBook = async (id: string): Promise<Book> => {
  const response: any = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);

  if (!response) {
    throw new Error('Something went wrong. Unable to retrieve books. Retry or refresh page.');
  }

  const result: any = [response.data];

  const books: Book[] = result.map((book: any) => {
    return {
      id: book?.id,
      title: book?.volumeInfo?.title || 'Title not available',
      authors: book?.volumeInfo?.authors?.join(' & ') || 'Authors not available',
      description: book?.volumeInfo?.description || 'Description not available',
      image: book?.volumeInfo?.imageLinks?.thumbnail || missingImg,
      publishedDate: book?.volumeInfo?.publishedDate || 'Information missing',
      storeLink: book?.saleInfo?.buyLink || null,
      previewLink: book?.saleInfo?.isEbook ? book?.volumeInfo?.previewLink : null
    };
  });

  return books[0];
};
