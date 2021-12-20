import {Logo} from '../../components/Logo'
import {Link} from 'react-router-dom';
import './styles.css';

export const Inicio = () => {
    return (
        <div className="Inicio">
           <div className="col-9">
                <Logo/>
            </div>
            <div className="avatars">
                <h1>Quem está assistindo?</h1>
                <div className="avatar-select">
                    <div className="avatar-box text-center">
                        <Link to="/movies">
                            <div className="avatar"></div>
                        </Link>
                        <p className="avatar-label">Bruna</p>
                    </div>
                </div>
                <button className="profile-button">Gerenciar perfis</button>
            </div>
        </div>
    );
}