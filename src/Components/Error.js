import thisIsFire from '../styles/thisIsFire.gif';
import '../styles/Error.css';

const Error = ({ error }) => {
  return (
    <div className="error-display">
      <img src={thisIsFire} alt="this is fine gif" className="dog-gif"/>
      <p className="error-message">Error:{error}</p>
      <p>Please refresh your browser.</p>
    </div>
  );
}

export default Error;