import PropTypes from 'prop-types';
import './ShowcaseCard.css';

function ShowcaseCard({ name }) {
  return (
    <div className="showcase-card">
      <div className="name">{name}</div>
    </div>
  );
}

ShowcaseCard.prototype = {
  name: PropTypes.string
};

export default ShowcaseCard;