import React,{Component} from 'react';
import './styles.css';
import api from '../../services/api';

export default class SignIn extends Component{
    state = {
        email : '',
        senha : '',
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const response = await api.post('/login',{
            email : this.state.email,
            senha : this.state.senha
        });
        
        if(response.data.token){
            this.props.history.push('/');
        }
       
      
    }

    handleOnChange = event =>{
        this.setState({[event.target.name] : event.target.value});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='login-container'>
                        <input type='text'
                                placeholder='usuário'
                                name='email'
                                value={this.state.email}
                                onChange={this.handleOnChange}
                                />
                        <input type='password'
                                placeholder='senha'
                                name='senha'
                                value={this.state.senha}
                                onChange={this.handleOnChange}
                                />
                                
                        <button type='submit'>Entrar</button>
                    </div>
                </form>
            </div>
        )
    }
}