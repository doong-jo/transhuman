import { useHistory } from 'react-router-dom';
import './Preview.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Preview() {
  const history = useHistory();

  function handleExportButtonClicked() {
    history.push('/showcase');
  }

  return (
    <div>
      <Header />
      <main className="preview-container">
        <div className="preview-hero"></div>
        <div className="preview-name-wrapper">
          <span className="preview-name">ABC</span>
        </div>
        <button className="preview-export" onClick={handleExportButtonClicked}>EXPORT</button>
      </main>
      <Footer />
    </div>
  )
}

export default Preview;