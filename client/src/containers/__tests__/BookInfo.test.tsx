import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookInfo from "../BookInfo/BookInfo";
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
];

describe("BookInfo", () => {
  const queryClient = new QueryClient();

  it("should show loading view", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BookInfo data={mock} />
      </QueryClientProvider>,
      { wrapper: MemoryRouter }
    );
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });
});
