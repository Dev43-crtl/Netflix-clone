import './styles.css';

import {Bg} from '../../components/Bg';
import { Logo } from '../../components/Logo';
import {Footer} from '../../components/Footer';

import { Link } from 'react-router-dom';

export const Login = () => {

    return (
        <div className="Login position-relative">
            <Bg/>
            <Logo/>
            <div className="form-box">
                <form>
                    <h2>Entrar</h2>
                    <div className="form-floating" >
                        <input type="text" className="form-control" id="floatingInput" placeholder="Email ou número de telefone"/>
                        <label for="floatingInput">Email ou número de telefone</label>
                    </div>
                    <div className="form-floating" >
                        <input type="text" className="form-control" id="floatingInput" placeholder="Senha"/>
                        <label for="floatingInput">Senha</label>
                    </div>
                    <Link to="/browse">
                        <button>Entrar</button>
                    </Link>
                    <div className="login-configs d-flex">
                        <div className="checkboxs d-flex">
                            <input type="checkbox" className="me-1"/><p>Lembre-se de mim</p>
                        </div>
                        <div className="checkboxs d-flex">
                           <p>Precisa de ajuda?</p>
                        </div>
                    </div>

                    <div className="others">
                        <div>
                            <p>Conectar com o Facebook</p>
                        </div>
                        <div className="others-info">
                            <h6 className="mb-3">Novo por aqui?<Link to="/" style={{textDecoration: "none"}}><span className="text-white"> Assine agora.</span></Link></h6>
                            <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <span className="text-primary">Saiba mais.</span></p>
                        </div>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    );
}