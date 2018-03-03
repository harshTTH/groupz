import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Home = (props) => (
  <div>
    <Header/>
    <div style={{
        "backgroundColor":"#e3f2fd",
        "height":"100vh",
        "margin":"0",
      }}>
        {props.children}
    </div>
  </div>
);

Home.propTypes = {
  children:PropTypes.element.isRequired
}

export default Home;
