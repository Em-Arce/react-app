import ReactLogo from "../assets/images/logo192.png";
import style from "../assets/styles/global_css.css";

function Navbar(){
  return(
    <nav>
      <img src={ReactLogo} alt="React Logo" className="nav--icon"></img>
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  )
};

export default Navbar;
