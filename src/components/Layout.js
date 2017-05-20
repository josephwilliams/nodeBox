import React, { Component } from 'react';

class IndexPage extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>{children}</div>
    );
  }
}

export default IndexPage;
