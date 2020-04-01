import React from 'react';
import '../stylesheets/layouts/_footer.scss';
import ImageLogoAdalab from '../images/logo-adalab-80px.png';

class Footer extends React.Component {
  render() {
    return (
      <div className="page__footer container">
        <div className="footer__text font__footer">
          Awesome profile-cards @2018
        </div>
        <div className="footer__logo--container">
          <a href="https://adalab.es/" title="Ir a adalab">
            <img src={ImageLogoAdalab} alt="logo adalab" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;