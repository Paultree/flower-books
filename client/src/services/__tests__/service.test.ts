import { beforeEach, describe, expect, test, vi } from "vitest";
import axios from "axios";
import { getAllBooks } from "../service";

describe("getAllBooks", async () => {
  it("should fetch data on 40 books", async () => {
    const list = await getAllBooks();

    expect(list).toHaveLength(40);
  });

  it("should have objects with type Book", async () => {
    const list = await getAllBooks();
    expect(list[0]).toHaveProperty("id");
    expect(list[0]).toHaveProperty("title");
    expect(list[0]).toHaveProperty("authors");
    expect(list[0]).toHaveProperty("description");
    expect(list[0]).toHaveProperty("image");
    expect(list[0]).toHaveProperty("publishedDate");
  });
});
