import { Link } from 'react-router-dom';
import './styles.css';

export const FeatureMovie = ({item}) => {
    console.log(item);

    let year = new Date(item.first_air_date);
    let genres = [];

    for(let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    return (
        <div>
            <section className="feature" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
                <div className="vertical-feature">
                    <div className="horizontal-feature">
                        <div className="feature-title">{item.original_name}</div>
                        <div className="feature-info">
                            <div className="feature-score">{item.vote_average}</div>
                            <div className="feature-year">{year.getFullYear()}</div>
                            <div className="feature-seasons">{item.number_of_seasons} temporadas</div>
                        </div>
                        <div className="feature-description">{item.overview}</div>
                        <div className="feature-buttons">
                            <Link to="/watch" className="watch">Assistir</Link>
                            {/* <Link to="/list/add" className="lista">Minha lista</Link> */}
                        </div>
                        <div className="feature-genres">
                            <strong>Gêneros:</strong> {genres.join(', ')}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}