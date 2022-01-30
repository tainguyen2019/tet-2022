import { Link } from 'react-router-dom';
import './styles.css';

function HomeButton() {
  return (
    <div className="row">
      <div className="btn-container">
        <img src="return-icon.svg" alt="" />
        <Link className="home-btn" to="/">
          Quay lại
        </Link>
      </div>
    </div>
  );
}

export default HomeButton;
