import React from "react";
import Main from "./Main";
import Canres from "./Genres";
import Books from "./Books";
import BooksAll from "./BooksAll";
import About from "./About";

const AllBooks = () => {
  return (
    <div>
      <Main />
      <Canres />
      <Books />
      <BooksAll />
      <About />
    </div>
  );
};

export default AllBooks;
