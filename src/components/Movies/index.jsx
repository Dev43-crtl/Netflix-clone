import { useEffect, useState } from 'react';

import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

import {Logo} from '../Logo'
import { MovieLists } from '../MovieLists'
import Tmdb from '../Tmdb';
import './styles.css';
import { FeatureMovie } from '../FeatureMovie';
import { FakeLoading } from '../FakeLoading';


export const Movies = () => {
    const [movieList, setMovieList] = useState([]);
    const [featureData, setFeatureData] = useState(null);
    const [blackHeader, setBlackHeader] = useState('');

    useEffect (() => {
        const loadAll = async () => {
            //pegar  a lista total
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            //pegar feature
            let originals = list.filter(i=>i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
            setFeatureData(chosenInfo);
        }

        loadAll();
    },[]);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setBlackHeader('black');
            }else {
                setBlackHeader('');
            }
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }

    }, []);


    return (
        <div className="Movies">
            <div className={`header ${blackHeader}`}>
                <div>
                    <Logo/>
                </div>
                <ul className="d-flex text-white col-7 menu-itens">
                    <li>Inicio</li>
                    <li>Séries</li>
                    <li>Filmes</li>
                    <li>Bombando</li>
                    <li>Minha lista</li>
                </ul>
                <div className="col-2 d-flex text-white menu-user">
                    <SearchIcon/>
                    <NotificationsIcon className="ms-2"/>
                    <div className="avatar ms-3"></div>
                </div>
            </div>
            <div>
                {featureData && 
                    <FeatureMovie item={featureData}/>
                }
                <section className="lists" >
                    {movieList.map((item, key) => (
                        <MovieLists itens={item.items} key={key} title={item.title}/>
                    ))};
                </section>
            </div>

            {movieList.length <= 0 && 
                <FakeLoading/>
            }
        </div>
    );
}