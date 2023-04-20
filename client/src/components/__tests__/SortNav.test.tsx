import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Book } from '../../services/type';
import SortNav from '../SortNav/SortNav';
import userEvent from '@testing-library/user-event';

describe('SortNav', () => {
  const queryClient = new QueryClient();
  it('should render the sort bar', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <SortNav />
      </QueryClientProvider>,
      { wrapper: MemoryRouter }
    );
    const sort = screen.queryByText(/sort by:/i);
    const title = screen.queryByText(/title/i);
    const author = screen.queryByText(/author/i);
    expect(sort).toBeVisible();
    expect(title).toBeVisible();
    expect(author).toBeVisible();
  });
  it('should trigger an event when clicked', async () => {
    const mockFn = vi.fn();

    render(
      <QueryClientProvider client={queryClient}>
        <SortNav handleSortAuthors={mockFn} handleSortTitle={mockFn} />
      </QueryClientProvider>,
      { wrapper: MemoryRouter }
    );
    const user = userEvent.setup();
    const title = screen.getByText(/title/i);
    const author = screen.getByText(/author/i);

    await user.click(title);
    await user.click(author);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
