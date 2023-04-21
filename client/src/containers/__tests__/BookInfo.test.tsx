import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import BookInfo from '../BookInfo/BookInfo';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Book } from '../../services/type';
import { Params } from 'react-router-dom';

describe('BookInfo', () => {
  const queryClient = new QueryClient();

  vi.mock('react-router-dom', async () => {
    const mod = await vi.importActual('react-router-dom');
    return {
      ...(mod as any),
      useParams: () => ({
        id: 'VuVuDQAAQBAJ'
      })
    };
  });

  it('should render the title', async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <BookInfo />
        </QueryClientProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      const title = screen.getByText('PLANTS AND FLOWERS');
      expect(title).toBeVisible();
    });
  });
  it('should render the author', async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <BookInfo />
        </QueryClientProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      const authors = screen.getByText(/Alan E. Bessette & William K. Chapman/i);
      expect(authors).toBeInTheDocument();
    });
  });
  it('should render the button texts', async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <BookInfo />
        </QueryClientProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      const preview = screen.getByText(/No Preview/i);
      expect(preview).toBeVisible();
      const buy = screen.getByText(/sold out/i);
      expect(buy).toBeVisible();
    });
  });
});
