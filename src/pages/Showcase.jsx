import { useHistory } from 'react-router-dom';
import './Showcase.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShowcaseCard from '../components/ShowcaseCard';
import { getShowcaseImages } from '../utils/imageStorage';

function Showcase() {
  const history = useHistory();

  function handleGoHomeButtonClicked() {
    history.push('/');
  }

  return (
    <div>
      <Header />
      <main className="showcase-grid-container">
        {getShowcaseImages().map(({ name, dataUrl }, index) => (
          <ShowcaseCard key={`${name}-${index}`} name={name} dataUrl={dataUrl} />
        ))}
      </main>
      <Footer />
      <button className="showcase-home-button" onClick={handleGoHomeButtonClicked}>GOING HOME</button>
    </div>
  )
}

export default Showcase;