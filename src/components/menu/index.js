import { Link } from 'react-router-dom';
import './styles.css';

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-title">Tết 2022 - Vui xuân Nhâm Dần</div>
      <Link className="link-item" to="/intro">
        Giới thiệu
      </Link>
      <Link className="link-item" to="/gift">
        Chúc tết
      </Link>
      <Link className="link-item" to="/review-2021">
        Review 2021
      </Link>
    </div>
  );
}

export default Menu;
