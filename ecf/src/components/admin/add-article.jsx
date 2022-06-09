import React, { useState } from 'react'
import { useNavigate,NavLink } from 'react-router-dom';
import ArticleService from '../../services/article-service'
import AuthService from '../../services/auth-service';

const AddArticle = () => {
    const initialState = { titre: "",auteur:"", contenu: "", image: "", date:"" };
    const [article, setArticle] = useState(initialState);
    const navigate = useNavigate();
    const handleChange = (e) => {
        let { name, value, checked, type } = e.target;
        value = type === 'checkbox' ? checked : value;
        setArticle({ ...article, [name]: value });
        console.log(article);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(article);
        ArticleService.addArticle(article).then(data => console.log(data))
                                         .catch(err=>console.error(err));
        setArticle(initialState);
        navigate('/admin');
    }

    const handleClick = () =>{
        AuthService.logout();
        navigate('/home');
      }
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
                        <h3 className='titre text-center'>Ajout d'un nouvel article</h3>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-2">
                                    <input type="text" id='titre' name='titre' className="form-control texte" placeholder='Entrez le titre' onChange={handleChange} value={article.titre} />
                                </div>
                                <div className="form-group mb-2">
                                    <input type="text" id='auteur' name='auteur' className="form-control texte" placeholder='Entrez auteur' onChange={handleChange} value={article.auteur} />
                                </div>
                                <div className="form-group mb-2">
                                    <input type="text" id='date'name='date' className="form-control texte" placeholder='Entrez la date de parution' onChange={handleChange} value={article.date} />
                                </div>
                                <div className="form-group mb-2">
                                    <input type="url" id='image' name='image' className="form-control texte" onChange={handleChange} value={article.image} placeholder='Entrez URL Image' />
                                </div>
                                <div className="form-group mb-2">
                                    <textarea name="contenu" id="contenu" className='texte' cols="48" rows="5" onChange={handleChange} value={article.contenu} placeholder='Entrez du contenu'></textarea>
                                </div>
                                <div className="form-group mb-2">
                                    <button className="btn btn-warning col-12 texte">Soumettre</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddArticle