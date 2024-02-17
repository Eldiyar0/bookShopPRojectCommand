import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import BooksComponents from "./components/ComBook/BooksComponents";
import AllBooks from "./components/Section/AllBooks";
import Categories from "./components/Categories/Categories";
import Cart from "./components/Cart/Cart";
import Detail from "./components/pages/BookDetail/Detail";
import AdminPage from "./components/AdminPage/Admin";
import AdminMain from "./components/AdminPage/AdminMain";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllBooks />} />
        <Route path="/bookscomponents" element={<BooksComponents />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/recent" element={<Cart />} />
        <Route path="/book" element={<Detail />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/adminMain" element={<AdminMain />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
