import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from '../loader';

import './random-icon.css';

const RandomIcon = ({ currentIcon, loading }) => {

  return (
    <div className="randomIcon">
      {loading ? <Loader /> : <FontAwesomeIcon icon={currentIcon} size="6x" />}
    </div>
  );
};

export default RandomIcon;