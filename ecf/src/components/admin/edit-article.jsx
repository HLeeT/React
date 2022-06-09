import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, Link, NavLink } from 'react-router-dom';
import {FaThList} from 'react-icons/fa'
import ArticleService from '../../services/article-service'
import AuthService from '../../services/auth-service';

const EditArticle = () => {
    const initialState = { titre: "",auteur:"", contenu: "", image: "", date:"" };
    const [article, setArticle] = useState(initialState);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setArticle(location.state);
    }, [location.state]);
    const handleChange = (e) => {
        let { name, value, checked, type } = e.target;
        value = type === 'checkbox' ? checked : value;
        setArticle({ ...article, [name]: value });
        console.log(article);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(article);
        const editArt = { titre: article.titre, auteur: article.auteur, contenu: article.contenu, image: article.image, date: article.date }
        ArticleService.updateArticle(article.id, editArt).then(data => console.log(data))
            .catch(err => console.error(err));
        setArticle(initialState);
        navigate('/admin');

    }

    const handleClick = () =>{
        AuthService.logout();
        navigate('/home');
      }
    console.log(location.state);
    return (
        <>
            <h1 className='text-center titre'>Admin</h1>
            <nav className="navbar navbar-expand-sm navbar-light row">
            <div className="container-fluid col-9">
                <ul className="navbar-nav titre">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin">Admin</NavLink>
                    </li>
                </ul>
                <div className='text-end titre'><button className='btn btn-primary' onClick = {handleClick}>Deconnexion</button></div>
            </div>
          </nav>
            <div className="row mt-5">
                <div className="col-4 offset-4">
                    <div className="card-header">
                        <h3>Edition du produit  N°00{location.state.id}</h3>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="text" id='titre' name='titre' className="form-control" placeholder='Entrez le titre' onChange={handleChange} value={article.titre} />
                                </div>
                                <div className="form-group">
                                    <input type="text" id='auteur' name='auteur' className="form-control" placeholder='Entrez auteur' onChange={handleChange} value={article.auteur} />
                                </div>
                                <div className="form-group">
                                    <input type="text" id='date'name='date' className="form-control" placeholder='Entrez la date de parution' onChange={handleChange} value={article.date} />
                                </div>
                                <div className="form-group">
                                    <input type="url" id='image' name='image' className="form-control" onChange={handleChange} value={article.image} placeholder='Entrez URL Image' />
                                </div>
                                <div className="form-group">
                                    <textarea name="contenu" id="contenu" cols="48" rows="5" onChange={handleChange} value={article.contenu} placeholder='Entrez du contenu'></textarea>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-warning col-12">Modifier</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditArticle