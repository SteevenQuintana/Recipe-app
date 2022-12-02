import "./styles/Footer.scss";
import productsImg from "../../assets/productImg.png";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer__title text-monster">Con el Patrocinio de</div>
      <div className="footer__img-container">
        <img
          className="footer__image"
          src={productsImg}
          alt="productos patrocinadores"
        />
      </div>
    </div>
  );
};

export default Footer;
