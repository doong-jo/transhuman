import { useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import domtoimage from 'dom-to-image';
import './Preview.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StairButton from '../components/StairButton';
import { addShowcaseImage } from '../utils/imageStorage';

function Preview() {
  const history = useHistory();
  const { name } = useParams();
  const heroRef = useRef();

  function handleExportButtonClicked() {
    if(heroRef.current !== null ) {
      domtoimage.toPng(heroRef.current).then((dataUrl) => {
        addShowcaseImage(name, dataUrl);
        history.push('/showcase');
      })
    }
  }

  if (!name) {
    history.push('/dressroom');

    return null;
  }

  return (
    <div>
      <Header />
      <main className="preview-container">
        <div ref={heroRef} className="preview-hero">{name}</div>
        <div className="preview-name-wrapper">
          <span className="preview-name">{name}</span>
        </div>
        <StairButton className="preview-export-button" name="EXPORT" onClick={handleExportButtonClicked} />
      </main>
      <Footer />
    </div>
  )
}

export default Preview;