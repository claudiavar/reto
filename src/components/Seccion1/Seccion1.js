import imagen from "../../img/desktop/image-interactive.jpg";
import "../Seccion1/Seccion1.css";

function Seccion1() {
  return (
    <div className="conteiner-fluid principal">
      <div>
        <img className="foto" src={imagen}></img>
      </div>
      <div className="texto">
        <h3>THE LEADER INTERACTIVE IN INTERACTIVE VR</h3>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
}
export default Seccion1;
