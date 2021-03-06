import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './DressRoom.css';
import Closet from '../components/Closet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StairButton from '../components/StairButton';

function DressRoom() {
  const [showIntro, setIntro] = useState(false);
  const nameRef = useRef();
  const history = useHistory();

  function handleIntroShowButtonClicked() {
    setIntro(!showIntro);
  }

  function handleDoneButtonClicked() {
    if(nameRef.current.value === '') {
      alert('Type your TransHuman name.');
      
      return;
    }

    history.push(`/preview/${nameRef.current.value}`);
  }

  return (
    <div>
      <Header />
      <main className="dressroom-main">
        <div className="dressroom-description-root-container">
          <div 
            className="dressroom-description-container" 
            style={showIntro ? { transform: 'translate3d(0, 0, 0)', opacity: 1 } : {}}>
            <div>“과학기술의 변화와 발전은 단순히 산업 성장이나 경제 발전의 문제가 아니라, 인간의 활동과 그 삶에 의미를 부여하는 근본적인 조건이나 구조를 새롭게 상상하는 문제이기도 하다.”</div>
            <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lob</div>
            <button 
            className={`dressroom-intro-show-button ${showIntro ? 'dressroom-intro-show-button-up' : 'dressroom-intro-show-button-down'}`}
            style={showIntro ? { transform: 'translate3d(-50%, 0, 0)' } : {}}
            onClick={handleIntroShowButtonClicked}>
          </button>
          </div>
        </div>
        <div className="dressroom-main-container">
          <div className="dressroom-main-closet">
            <Closet name="HUMAN" />
            <Closet name="HEADS" />
            <Closet name="SHOES" />
          </div>
          <div className="dressroom-main-container-preview"></div>
          <div className="dressroom-main-closet">
            <Closet name="TOP" />
            <Closet name="BOTTOM" />
            <Closet name="DECO" />
          </div>
        </div>
        <input 
          ref={nameRef}
          className="dressroom-human-name"
          type="text"
          placeholder=""
          maxLength={10}
        />
        <StairButton className="dressroom-done-button" name="DONE" onClick={handleDoneButtonClicked} />
      </main>
      <Footer />
    </div>
  );
}

export default DressRoom;