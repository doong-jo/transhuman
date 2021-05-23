import PropTypes from 'prop-types';
import './ShowcaseCard.css';

function ShowcaseCard({ name, dataUrl }) {
  return (
    <div className="showcase-card">
      <img src={dataUrl} alt="transhuman" />
      <div className="name">{name}</div>
    </div>
  );
}

ShowcaseCard.prototype = {
  name: PropTypes.string,
  dataUrl: PropTypes.string
};

export default ShowcaseCard;