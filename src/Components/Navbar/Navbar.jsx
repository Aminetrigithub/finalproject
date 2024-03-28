import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";
import logo from "../../Assets/images/freshcart-logo.svg";

function Navbar() {
  return (
    <>
      <ul className="nav bg-light d-flex  align-items-center">
        <div className="pos nav me-auto d-flex  align-items-center ">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              <img src={logo} alt="fresh market logo" width={150} />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/home" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="/categories">
              Categories
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link disabled" to="/brands">
              Brands
            </Link>
          </li>
        </div>

        <div className="post nav  ms-auto ">
          <li className="nav-item d-flex align-items-center">
            <i className="fab fa-facebook mx-2"></i>
            <i className="fab fa-twitter mx-2"></i>
            <i className="fab fa-instagram mx-2"></i>
            <i className="fab fa-tiktok mx-2"></i>
            <i className="fab fa-youtube mx-2"></i>
          </li>

          <li className="nav-item">
            <Link className="nav-link active" to="/login" aria-current="page">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/logout">
              Logout
            </Link>
          </li>
        </div>
      </ul>
    </>
  );
}
export default Navbar;
