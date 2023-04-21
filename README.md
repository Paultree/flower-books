## Flower Books

A basic front-end application which demonstrates fetching and displaying data from an API.

# Demo & Snippets

First draft  
![Alt Text](./project-demos/project-demo.gif)

Updated version  
![Alt Text](./project-demos/project-demo-update.gif)

# Link

https://paultree.github.io/flower-books

# Requirement/Purpose

Purpose of project is to demonstrate data fetching from an API and styling for a search engine webpage that displays books related to flowers.

Develop a basic front-end application with the following features:

- Fetch and display a list of books related to flowers from the following REST API: https://www.googleapis.com/books/v1/volumes?q=flowers - [x]
- Present the fetched data in a table, including book title, authors, and published date. - [x]
- Enable users to view more details of a selected book, such as title, subtitle, authors, image, and description. - [x]
- Encourage the candidates to showcase their creativity and add a personal touch to the application. - [x]
- Include a README file explaining the app's features and the creative elements introduced. - [x]

Stack used:

- React + Vite
- SCSS/SASS
- Typescript

Libraries:

- SASS
- react-query
- ~react-redux~
- react-loader-spinner
- rtl
- ~react-overlays~
- react-router-dom

# Build Steps

Prequisities:

- Vite
- Google Chrome
- VCS

Steps:

- Clone repo
- Navigate into client/ using CLI
- npm install
- npm run dev
- Open google chrome browser and copy link in command line(local: link) into browser searchbar.

for testing:

- npm run test

# Design Goals/Approach

- For fetching all flower books, I have decided to use the react-query library. Although for the scope of this project we are fetching a specific API, I thought react-query would be best to use for its efficient fetching and error handling.
  - Will only use 40 flower-related books as google books API only allows 40 max at a time. To include filter feature, I am only using a specific query.
- Used Cedarville Cursive font purely for the title/header text. Book information will retain a generic font to improve UX in terms of reading.
- When user clicks on a cell/card, redirect user to new page which shows more information on book.
  - Image of book
  - description
  - Complete title and author text.
- Responsive design for phone(320px), tablet(768px), desktop(992px) and large desktop(1440px).
- ~Favorite button that allows user to favorite a book.~
  - ~At the center or right (on same level as sorting component), I will add a filter option 'all' and 'favourites' which will render favourited books or all books.~
- For sort feature, I plan to use the .sort method to re-order the list by book title or author.
  - Sort navbar has an underline depending on what list is getting sorted by.
    - Use of useState hook and joining of classes.
- tests created for components + service.
  - Mainly testing if component rendered information correctly.
  - For bookInfo, had to import react-router-dom and import into test in order for it to be testable as it does not take in any props but only useParams.
- For link buttons, user can click on preview or buy to redirect them to their respective pages. If preview link or buy links are unavailable on the API, it will be reflected on the button as it will be disabled.
- description from api uses html text. To overcome this, included a replace method in the service layer to filter out the html elements and return native text.

# Features

- Responsive design - [x]
- Can sort list by author or title -[x]
- User can click on button that redirects them to store page or preview page - [x]

# Known Issues

- Low resolution of book image due to api only providing thumbnail images hence when enlarged image looks blurry.

# Future Goals

- Feature that allows user to favorite books
- Feature that allows user to filter book list by favourites

# Change Logs

# What did you struggle with?

- finding a solution for sorting the data from react-query
- testing BookInfo component and trying to mock useParams hook.

# Licencing Details

# Further Details
