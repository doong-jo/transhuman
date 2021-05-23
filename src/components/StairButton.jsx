import PropTypes from 'prop-types';
import './StairButton.css';

function StairButton({ className, name, onClick }) {
  return (
    <div className={`stair-button-container ${className}`} onClick={onClick}>
      <div className="stair-button-top"></div>
      <div className="stair-button-medium"></div>
      <div className="stair-button-bottom"></div>
      <button className="stair-button-text">{name}</button>
    </div>
  )
}

StairButton.prototype = {
  className: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default StairButton;