import React from "react";
import {
  render,
  fireEvent,
  screen,
  findByTestId,
  waitFor,
} from "@testing-library/react";
import BookGrid from "../BookGrid/BookGrid";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Book } from "../../services/book";

const mock: Book[] = [
  {
    id: "123456",
    title: "random book",
    authors: "test and random",
    description: "a test description 123",
    image: "someurl",
    publishedDate: "2021-12-06",
  },
  {
    id: "123457",
    title: "test book",
    authors: "test",
    description: "a test description 456",
    image: "somelink",
    publishedDate: "2020-02-10",
  },
];

describe("BookGrid", () => {
  const queryClient = new QueryClient();
  it("should display the loading view", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BookGrid data={mock} isLoading={true} />
      </QueryClientProvider>,
      { wrapper: MemoryRouter }
    );
    waitFor(() => expect(screen.findByTestId("loader")).toBeVisible());
  });

  it("should display the error message", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BookGrid data={mock} isLoading={false} isError={true} />
      </QueryClientProvider>,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("error")).toBeInTheDocument();
  });

  it("should render the list of books", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BookGrid data={mock} isLoading={false} isError={false} />
      </QueryClientProvider>,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByText(/test book/i)).toBeVisible();
    expect(screen.getByText(/random book/i)).toBeVisible();
  });
});
