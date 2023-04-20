import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BookCard from '../BookCard/BookCard';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Book } from '../../services/type';
import userEvent from '@testing-library/user-event';

const mock: Book = {
  id: '123456',
  title: 'random book',
  authors: 'test and random',
  description: 'a test description 123',
  image: 'someurl',
  publishedDate: '2021-12-06'
};

describe('BookCard', () => {
  const queryClient = new QueryClient();
  it('should display the correct title, author and published date', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BookCard data={mock} />
      </QueryClientProvider>,
      { wrapper: MemoryRouter }
    );
    const title = screen.queryByText(/random book/i);
    const authors = screen.queryByText(/test and random/i);
    const date = screen.queryByText(/2021-12-06/i);
    expect(title).toBeVisible();
    expect(authors).toBeVisible();
    expect(date).toBeVisible();
  });
  it('should trigger an event when clicked', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BookCard data={mock} />
      </QueryClientProvider>,
      { wrapper: MemoryRouter }
    );
    const user = userEvent.setup();
    const card = screen.getByTestId('card');

    await user.click(card);
    expect(screen.queryByText(/random book/i)).toBeInTheDocument();
  });
});
