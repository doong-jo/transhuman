import { useHistory } from 'react-router-dom';
import './Showcase.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShowcaseCard from '../components/ShowcaseCard';
import StairButtom from '../components/StairButton';
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
      <StairButtom className="showcase-home-button" name="GOING HOME" onClick={handleGoHomeButtonClicked} />
    </div>
  )
}

export default Showcase;