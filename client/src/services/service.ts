import missingImg from "../assets/missing.jpeg";

export const getAllByIndex = async (index: number) => {
  const response: any = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=flowers&maxResults=40&startIndex=${index}`
  );

  if (!response) {
    throw new Error(
      "Something went wrong. Unable to retrieve books. Retry or refresh page."
    );
  }

  return await response.json();
};

//for test//
export const getAllBooks = async () => {
  const response: any = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=flowers&maxResults=40`
  );

  if (!response) {
    throw new Error(
      "Something went wrong. Unable to retrieve books. Retry or refresh page."
    );
  }

  const result: any = await response.json();

  const books: any[] = result.items.map((book: any) => {
    return {
      id: book?.id,
      title: book?.volumeInfo?.title || "Title not available",
      authors:
        book?.volumeInfo?.authors?.join(" & ") || "Authors not available",
      description: book?.volumeInfo?.description || "Description not available",
      image: book?.volumeInfo?.imageLinks?.thumbnail || missingImg,
      publishedDate: book?.volumeInfo?.publishedDate || "Information missing",
    };
  });

  return books;
};