import React from 'react';

import { BackTop } from 'antd';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://google.com">Tech</a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/chintan.jehani/"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://twitter.com/Chintan85112994"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/in/chintan-thakkar-957079172/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
          <li><a href="https://www.instagram.com/chintan_231099/"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2021 Chintan</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;