import Footer from '../components/Footer';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import "../components/Styles.css";
import { useState, useEffect } from 'react';

function Details({ shows }) {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/cast`)
      .then((res) => res.json())
      .then((data) => setCast(data));
  }, [id]);
  const [text, setText] = useState('view_module');

  const handleClick = () => {
    if (text === 'view_list') {
      setText('view_module');
    } else {
      setText('view_list');
    }
  };

  const show = shows.find(s => s.id === parseInt(id));
  const summary = show.summary.replace(/<[^>]+>/g, '');// Uklanjam tagove iz stringa
  console.log(show);
  if (!show) {
    return <div class="sk-cube-grid">
      <div class="sk-cube sk-cube1"></div>
      <div class="sk-cube sk-cube2"></div>
      <div class="sk-cube sk-cube3"></div>
      <div class="sk-cube sk-cube4"></div>
      <div class="sk-cube sk-cube5"></div>
      <div class="sk-cube sk-cube6"></div>
      <div class="sk-cube sk-cube7"></div>
      <div class="sk-cube sk-cube8"></div>
      <div class="sk-cube sk-cube9"></div>
    </div>;
  }

  return (
    <div >
      <Header />
      <Row className='mainDetails'>
        <div className="col-6 details">
          <Card.Img src={show.image.medium} />
        </div>
        <div className="col-6 details">
          <h1>{show.name}</h1>
          <div className="d-flex flex-wrap">
            {show.genres.map((genre, index) => (
              <span key={index} className="badge rounded-pill bg-gray me-2 mb-2">{genre}</span>
            ))}
          </div>
          <div className="bg-gray p-2 rounded summary">{summary}</div>
        </div>
      </Row>
      <Row className="justify-content-center details">
        <div className="d-flex align-items-center">
          <h2 className="me-2">Cast</h2>
          <div onClick={handleClick}>
            <i className="material-icons view">{text}</i>
          </div>
        </div>
        <div className={text === 'view_list' ? " " : "cast_module"}>
          {cast.map((person) => (
            <div key={person.person.id} className={text === 'view_list' ? 'd-flex justify-content align-items my-3' : 'cast_module1'}>
              {text === 'view_list' && (
                <div className='cast_list'>
                  <img className="rounded-circle me-2" src={person.person.image.medium} alt={person.person.name} width="50" height="50" />
                  <div>
                    <div className="fw-bold">{person.person.name}</div>
                    <div className="text-muted">{person.character.name}</div>
                  </div>
                </div>
              )}
              {text === 'view_module' && (
                <div className="row row-cols-12 justify-content-center">
                    <div className="col">
                      <Card className="cast">
                        <Card.Img className="castImg" src={person.person.image.medium} />
                        <Card.Body>
                          <Card.Title className="castTitle">{person.person.name}</Card.Title>
                        </Card.Body>
                      </Card>
                    </div>
 
                </div>
              )}
            </div>
          ))}
        </div>
      </Row>
      <Footer />
    </div>
  );
}

export default Details;