import React, { PropTypes } from 'react';

const Api = ({ result }) => (
  <div className="App">
    <p>Show Get API : { result }</p>
    <p>source : <a href="http://www.mocky.io/v2/58c76b9910000018281b7d70">www.mocky.io/v2/58c76b9910000018281b7d70</a></p>
  </div>
);

Api.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Api;
