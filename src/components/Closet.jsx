import './Closet.css';
import PropTypes from 'prop-types';

function Closet({ name }) {
  return (
    <div className="closet-container">
      <div className="title">{name}</div>
      <div className="reset">Reset</div>
    </div>
  );
}

Closet.propTypes = {
  name: PropTypes.string,
};

export default Closet;