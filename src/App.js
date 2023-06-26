import Pages from "./pages/Pages";
import Header from "./components/Header";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Category />
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
