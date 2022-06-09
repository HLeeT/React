import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate,NavLink } from 'react-router-dom';
import { FaPlusSquare, FaEdit, FaTrashAlt, FaHome } from "react-icons/fa";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs"
import { MdLogout } from "react-icons/md"
import ArticleService from '../../services/article-service'; 
import AuthService from '../../services/auth-service';

const Admin = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    ArticleService.getArticles()
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.error(err))
  }, []);
  const deleteProduct = id => {
    ArticleService.removeArticle(id)
      .then(data => console.log(data))
      .catch(err => console.error(err));
    window.location.reload();
  }
  const handleClick = () =>{
    AuthService.logout();
    navigate('/home');
  }
  console.log(articles);
  return (
    <>
      <h1 className='text-center titre'>Admin</h1>
        <nav className="navbar navbar-expand-sm navbar-light row">
            <div className="container-fluid col-9">
                <ul className="navbar-nav titre">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                    </li>
                </ul>
                <div className='text-end titre'><button className='btn btn-primary' onClick = {handleClick}>Deconnexion</button></div>
            </div>
          </nav>
      <div className="text-end">
        <Link className='btn btn-warning mb-1' to={`/add-article`}><FaPlusSquare /> Add</Link>
      </div>
      <table className='table table-striped table-bordered text-center'>
        <thead>
          <tr className='titre'>
            <th>Id</th>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Contenu</th>
            <th>Image</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles && articles.map(article => (
            <tr key={article.id} className='texte'>
              <td>{article.id}</td>
              <td>{article.titre}</td>
              <td>{article.auteur}</td>
              <td>{article.contenu}</td>
              <td><img src={article.image} width={50} alt="" /></td>
              <td>{article.date}</td>
              <td>
                <Link to={`/edit-article/${article.id}`}className='btn btn-warning m-1' state={article}><FaEdit /> </Link>
                <Link to={`/admin/${article.id}`} className='btn btn-danger m-1'
                  onClick={() => {
                    if (window.confirm('Etes vous sûr de supprimer cet article ?')) {
                      deleteProduct(article.id);
                    }
                  }}
                > <FaTrashAlt /> </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>

  )
}

export default Admin