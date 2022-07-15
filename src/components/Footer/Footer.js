import face from "../../img/icon-facebook.svg";
import twiter from "../../img/icon-twitter.svg";
import pinterest from "../../img/icon-pinterest.svg";
import instagram from "../../img/icon-instagram.svg";
import '../Footer/Footer.css';

function Footer() {
  return (
    <footer className="container-fluid bg-dark ">
        <div className="container row m-auto">
      <div className="col-sm-9">
        <h2 className="text-white">loopstudios</h2>
      </div>
      <div className="col-sm-3 d-flex justify-content-between">
        <a><img src={face}></img></a>
        <a><img src={twiter}></img></a>
        <a><img src={pinterest}></img></a>
        <a><img src={instagram}></img></a>
      </div>
      <div className="col-sm-4 text-white d-flex justify-content-sm-between flex-column order ">
         <a>About</a>
         <a>Careers</a>
         <a>Event</a>
         <a>Product</a>
         <a>Support</a>
      </div>
      <div className="col-sm-8">
        <h4 className="text-secondary text-end small">2021 Loopstudios. All riths reserved.</h4>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
