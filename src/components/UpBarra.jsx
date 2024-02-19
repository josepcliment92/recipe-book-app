import logoImage from "../assets/logo1.png";
import logoImage2 from "../assets/logo2.png";

function UpBarra() {
  return (
    <div className="upbarra">
      <div className="logoimg1">
        <img src={logoImage} alt="app logo" width='180px' />
      </div>
      <div className="titulo-upbarra">
        <h1>Sazón Digital</h1>
        <p>Tu app de cocina favorita</p>
      </div>
      <div className="logoimg2">
        <img src={logoImage2} alt="app logo 2" width="180px"/>
      </div>
    </div>
  );
}

export default UpBarra;
