import App from 'App';
import React from 'react';

export function setup() {
  //todo ....
  class Root extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoading : true
      }
    }

    render() {
      return (
        <App />
      )
    }
  }
  return Root
}
