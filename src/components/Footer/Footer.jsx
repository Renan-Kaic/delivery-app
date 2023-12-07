import React from "react";
import { ListGroup } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
        <h5>LaPizza</h5>
        <p>As melhores pizzas da cidade, experimente!</p>
      </div>
      <div>
        <h5 className="footer__title mb-3">Nossos Horários </h5>
        <ListGroup>
          <div className="delivery__time-item border-0 ps-0">
            <span>Sexta-feira - terça-feira</span>
            <p>10:00am - 12:00pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Quarta-feira quinta-feira</span>
            <p>Dia de folga</p>
          </div>
        </ListGroup>
      </div>
    </footer>
  );
};

export default Footer;
