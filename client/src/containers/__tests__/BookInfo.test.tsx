import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import BookInfo from '../BookInfo/BookInfo';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Book } from '../../services/type';
import { Params } from 'react-router-dom';

describe('BookInfo', () => {
  const queryClient = new QueryClient();

  it('should render the information', () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <BookInfo />
        </QueryClientProvider>
      </MemoryRouter>
    );

    const back = screen.getByText(/Back/i);
    expect(back).toBeInTheDocument();
  });

  it('should load data after time', async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <BookInfo />
        </QueryClientProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/back/i)).toBeVisible();
    });
  });
});
