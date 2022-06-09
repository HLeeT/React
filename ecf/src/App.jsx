import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Admin from './components/admin/admin';
import Home from './components/home';
import Nav from './components/nav';
import NotFound from './components/not-found';
import AddArticle from './components/admin/add-article';
import EditArticle from './components/admin/edit-article';
import Login from './components/admin/login';
import PrivateRoute from './components/admin/private-route';
import ProductItem from './components/article-item';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/footer';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav />}>
            <Route path='' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='article/:id' element={<ProductItem/>} />
          </Route>
          <Route path="login" element={<Login/>} />
          <Route path="admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
          <Route path="add-article" element={<PrivateRoute><AddArticle /></PrivateRoute>} />
          <Route path="admin/:id" element={<PrivateRoute><Admin /></PrivateRoute>} />
          <Route path="edit-article/:id" element = {<PrivateRoute><EditArticle/></PrivateRoute>  } />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
