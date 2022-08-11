import Twitter from "../assets/svgs/Twitter";
import Facebook from "../assets/svgs/Facebook";
import Instagram from "../assets/svgs/Instagram";
import LinkedIn from "../assets/svgs/LinkedIn";

function Footer() {
  return (
    <footer className="footer">
      <div className="twitter">
        <Twitter />
      </div>
      <div className="fb">
        <Facebook />
      </div>
      <div className="instagram">
        <Instagram />
      </div>
      <div className="linkedin">
        <LinkedIn />
      </div>
    </footer>
  )
}
export default Footer;
