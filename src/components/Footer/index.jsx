import {Language} from "../Language"
import './styles.css';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <h5>Dúvidas? Ligue 0800-761-4631</h5>
                <ul>
                    <li>Perguntas Frequentes</li>
                    <li>Preferências de cookies</li>
                    <li>Central de ajuda</li>
                    <li>Informações corporativas</li>
                    <li>Termos de uso</li>
                    <li>Privacidade</li>
                </ul>
                <Language/>
            </div>
        </div>
    );
}