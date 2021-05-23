import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';
import StairButton from '../components/StairButton';

function Home() {
  const [intialOpacity, setInitialOpacity] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setInitialOpacity(true);
  }, []);

  function handleNextButtonClicked() {
    history.push('/dressroom');
  }

  return (
    <main className="home-container">
      <div className="home-main-container" style={intialOpacity ? { opacity: 1 } : {}}>
        <div className="home-main-hangeul">
          {`환영합니다.
          당신의 TransHuman을
          보여주세요.`}
        </div>
        <div>
          {`Welcome to the Future.
          Show me your
          TransHuman.`}
        </div>
      </div>
      <div className="home-bottom-container">
        <StairButton className="next-button" name="NEXT" onClick={handleNextButtonClicked} />
      </div>
    </main>
  );
}

export default Home;