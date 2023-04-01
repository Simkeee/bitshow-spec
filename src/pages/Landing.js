import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingCard from '../components/LandingCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../components/Styles.css";

function Landing({ shows }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const showsPerPage = 20;

  const filteredShows = shows.filter(show =>
    show.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentShows = filteredShows.slice(indexOfFirstShow, indexOfLastShow);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  }

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  }
  useEffect(() => {
    if (shows) {
      setIsLoading(false);
    }
  }, [shows]);
  if (isLoading) {// loading screen while getting show
    return <div className="sk-cube-grid">
      <div className="sk-cube sk-cube1"></div>
      <div className="sk-cube sk-cube2"></div>
      <div className="sk-cube sk-cube3"></div>
      <div className="sk-cube sk-cube4"></div>
      <div className="sk-cube sk-cube5"></div>
      <div className="sk-cube sk-cube6"></div>
      <div className="sk-cube sk-cube7"></div>
      <div className="sk-cube sk-cube8"></div>
      <div className="sk-cube sk-cube9"></div>
    </div>
  }
  if (searchQuery !== '' && filteredShows.length === 0) {
    return (
      <>
        <Header />
        <div className="container my-5 searchNone">
          <h3>We couldn't find any shows matching your search</h3>
          <i className="material-icons prefix" id="sadSmiley">sentiment_very_dissatisfied</i>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <i className="material-icons prefix">search</i>
          <Form.Control
            className='formInput'
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <Row>
          {currentShows.map((show, index) => (
            <Col key={index} md={3}>
              <Link to={`/details/${show.id}`}>
                <LandingCard show={show} />
              </Link>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-between mt-3">
          <Button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</Button>
          <Button onClick={handleNextPage} disabled={indexOfLastShow >= filteredShows.length}>Next</Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
