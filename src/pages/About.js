import Footer from '../components/Footer';
import Header from '../components/Header';



function About() {
  return (
    <>
      <Header />
      <div className='details'>
        <h1>About Bit Shows</h1>
        <div className='aboutUs'>
        <p>Movies are a form of art that have captivated audiences for over a century. They provide an escape from reality and allow viewers to experience a range of emotions. From heart-warming comedies to suspenseful thrillers, movies have something for everyone.
        </p>
        <p>The movie industry has gone through a lot of changes since its inception in the late 1800s. In the 2000s and 2010s, the popularity of superhero movies soared, with franchises like Marvel and DC Comics dominating the box office. The success of these movies can be attributed to their ability to appeal to a wide range of audiences, from comic book fans to general movie-goers.</p>
        <p>However, superhero movies aren't the only ones that have been successful in recent years. Independent films have also gained popularity, with many receiving critical acclaim and even winning awards at major film festivals. These movies often explore complex themes and offer a different perspective on the world.</p>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default About;