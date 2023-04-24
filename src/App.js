import './App.css';
import Header from "./pages/Header"
import Contents from "./pages/Contents"
import Footer from "./pages/Footer"
import Pagination from './components/Pagination';

function App() {
  return (
  <div>
    <Header/>
    <Contents/>
    <Pagination/>
    <Footer/>
  </div>
  )
}

export default App;
