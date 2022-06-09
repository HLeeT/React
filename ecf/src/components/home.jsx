import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import ArticleService from '../services/article-service';
import {BsCheckCircleFill, BsXCircleFill} from "react-icons/bs"

const Home = () => {
  const [articles, setArticles] = useState([]);//déclaration de l'état initialisé à un tableau vide

  useEffect(() => {
    ArticleService.getArticles()
      .then(res => res.json())
      .then(data => setArticles(data))//lorsqu'il y a succès on met à jour l'état avec (data)
      .catch(err => console.error(err))//catch est exécuté lorsqu'il y a erreur
  }, []);
  console.log(articles)
  return (
    <>
    <div className='row col-12'>
    {articles && articles.map(article => (
          <div key={article.id} className="card col-10 offset-1 mb-3 mt-4">
            <div className="card-header text-center titre">
              {article.date}
            </div>
            <div className="card-body">
              <h5 className="card-title text-center titre">{article.titre}</h5>
              <img className='float-start me-5' src={article.image} alt="" />
              <p className="card-text texte">{article.contenu}</p>
            </div>
            <div className="card-footer text-center texte">
            <p className='text-center titre'>{article.auteur}</p>
            </div>
          </div>
        ))}
      </div>
      
    </>
  )}

export default Home