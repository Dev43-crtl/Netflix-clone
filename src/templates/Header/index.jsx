import "./styles.css"

import {Logo} from "../../components/Logo"
import { Link } from "react-router-dom";
import {Language} from "../../components/Language";

export const Header = () => {
    return (
        <header>
            <div className="main">
                <div className="col-9">
                    <Logo/>
                </div>
                <div className="menu col-3">
                    <Language/>
                    <Link to="/login">
                        <button className="login">Entrar</button>
                    </Link>
                </div>
            </div>
        </header>
    );
}