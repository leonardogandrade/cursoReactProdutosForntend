import React,{useState} from 'react';
import { useHistory } from 'react-router-dom'
import './styles.css';
import api from '../../services/api';

export default function SignIn(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    const handleSubmit = async event =>{
        event.preventDefault();

        const response = await api.post('/login',{
            email,
            senha
        });
        
        if(response.data.token){
            history.push('/');
        }else
            window.alert('Usuário ou senha incorretos')
         
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className='login-container'>
                    <input type='text'
                            placeholder='usuário'
                            name='email'
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            />
                    <input type='password'
                            placeholder='senha'
                            name='senha'
                            value={senha}
                            onChange={event => setSenha(event.target.value)}
                            />
                            
                    <button type='submit'>Entrar</button>
                </div>
            </form>
        </div>
    )
}