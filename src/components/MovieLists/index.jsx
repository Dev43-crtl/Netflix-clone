import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './styles.css';
import { useState } from 'react';


export const MovieLists = ({title, itens}) => {
    
    const [scrollx, setScrollX] = useState(-400)

    const handleLeftArrow = () => {
        let x = scrollx + Math.round(window.innerWidth / 2);

        if (x > 0) {
            x = 0;
        }

        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollx - Math.round(window.innerWidth / 2);
        let listW = itens.results.length * 155

        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }

        setScrollX(x);
    }

    return (
        <div className="movie-box text-white">
                {title}
            <div className="left" onClick={handleLeftArrow}>
                <ArrowBackIosNewIcon style={{fontSize: 50}} />
            </div>
            <div className="right" onClick={handleRightArrow}>
                <ArrowForwardIosIcon style={{fontSize: 50}} />
            </div>
            <div className="movie-row">
                <div className="movie-list" style={{marginLeft: scrollx, width: itens.results.length * 200}}>
                    {itens.results.length > 0 && itens.results.map( (itens, key) =>
                    <div className="movie-poster" key={key}>
                        <img src={`https://image.tmdb.org/t/p/w300${itens.poster_path}`} alt={itens.original_title} />
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}