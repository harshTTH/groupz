import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Home = (props) => (
  <div id="main-cont" className="ui container">
    <Header/>
    {props.children}
  </div>
);

Home.propTypes = {
  children:PropTypes.element.isRequired
}

export default Home;
