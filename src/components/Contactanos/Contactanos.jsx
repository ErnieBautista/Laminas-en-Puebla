 import {
  BsFillExclamationCircleFill,
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsFacebook,
} from "react-icons/bs";
import "./contactanos.scss";

export const Contactanos = () => {
  return (
    <div className="contactanos">
      <ul>
        <BsFillTelephoneFill />
        <li>
          <a className="colorWhite" href="tel:2212588979">
            (221) 258 8979
          </a>
        </li>
        <BsFillEnvelopeFill />
        <li>
          <a
            className="colorWhite"
            href="mailto:laminasenpuebla.com@gmail.com?subject=Quiero una cotizacion por favor&body=Nombre:%0ACel con Whatsapp:%0A¿Qué perfil de laminas te interesa comprar?:%0A¿Cuántas láminas requieres?¿De que medidas?:%0A¿Requieres servicio de flete?:%0A¿Donde necesitas que se entreguen?:"
          >
            laminasenpuebla.com@gmail.com
          </a>
        </li>

        <a href="https://www.facebook.com/techoscurvoss" target="_new">
          <BsFacebook />
        </a>
      </ul>
      <button>
        <a className="colorWhite" href="/#contactanos">
          ¡Contáctanos!
        </a>
      </button>
    </div>
  );
};
