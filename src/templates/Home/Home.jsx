import { Bg } from '../../components/Bg';
import { Header } from '../Header';
import { Footer } from '../../components/Footer';
import './styles.css';

function Home() {
  return (
    <div className="Home">
      <Bg/>
      <Header/>
      <div className="main-text">
        <h1>Filmes, séries e muito mais. Sem limites.</h1>
        <h2>Assista onde quiser. Cancele quando quiser.</h2>
        <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
        <div className="get-start-form">
            <input type="text" className="form-group" placeholder="Email address"/>
            <button className="form-group" >Vamos lá ></button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
