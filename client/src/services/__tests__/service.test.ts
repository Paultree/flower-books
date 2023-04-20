import { beforeEach, describe, expect, test, vi } from 'vitest';
import axios from 'axios';
import { getAllBooks, getBook } from '../service';

describe('getAllBooks', async () => {
  it('should fetch data on 40 books', async () => {
    const list = await getAllBooks();

    expect(list).toHaveLength(40);
  });

  it('should have objects with properties from type Book', async () => {
    const list = await getAllBooks();
    expect(list[0]).toHaveProperty('id');
    expect(list[0]).toHaveProperty('title');
    expect(list[0]).toHaveProperty('authors');
    expect(list[0]).toHaveProperty('description');
    expect(list[0]).toHaveProperty('image');
    expect(list[0]).toHaveProperty('publishedDate');
    expect(list[0]).toHaveProperty('previewLink');
    expect(list[0]).toHaveProperty('storeLink');
  });
});

describe('getBook', async () => {
  it('should fetch data', async () => {
    const book = await getBook('KRggEAAAQBAJ');
    expect(book).toHaveProperty('id');
    expect(book).toHaveProperty('title', 'A Year Full of Flowers');
    expect(book).toHaveProperty('authors', 'Sarah Raven');
    expect(book).toHaveProperty('description');
    expect(book).toHaveProperty('image');
    expect(book).toHaveProperty('publishedDate');
    expect(book).toHaveProperty('previewLink');
    expect(book).toHaveProperty('storeLink');
  });
});
