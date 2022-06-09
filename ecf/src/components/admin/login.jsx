import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth-service';

const Login = () => {
    const initialState = { email: "", password: ""};
    const [user, setUser] = useState(initialState);
    const [msgErr, setMsgErr] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        let {name, value} = e.target;
        setUser({ ...user, [name]:value});
        console.log(user)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(AuthService.login(user.email, user.password)){
            navigate('/admin');
        }else{
            setMsgErr("Email ou Mot de Passe incorrecte");
        }
    }
  return (
    <>
        <div className="row mt-5">
            <div className="col-4 offset-4">
                <div className="card">
                    {msgErr && <div className="alert alert-danger">
                        <b>{msgErr}</b>
                    </div>}
                    <div className="card-header">
                        <h1 className="h3 text-center titre">Connectez-vous</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit = {handleSubmit} autoComplete='off'>
                            <div className="form-group">
                                <input type="email" className='form-control texte' 
                                name="email" id="email" placeholder='Entrez votre email' 
                                value={user.email} onChange = {handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input type="password" className='form-control texte' 
                                name="password" id="password" placeholder='Entrez votre mot de passe'
                                value={user.password} onChange = {handleChange}
                                />
                            </div>
                            <div className="form-group mt-2">
                                <button type="submit" className='btn btn-warning col-12 texte'>Soumettre</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login