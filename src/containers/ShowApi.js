import React, { Component } from 'react';
import Apilib from '../libs/Api';
import Api from '../components/Api';

export class ShowApi extends Component {
  state = {
    result: '',
  };

  componentDidMount() {
    this.getApi();
  }

  getApi() {
    Apilib.get()
      .then((res) => {
        this.setState({
          result: res.data.hello,
        });
      }).catch(err => console.warn(err));
  }

  render() {
    return (
      <Api
        result={this.state.result}
      />
    );
  }
}

export default ShowApi;
