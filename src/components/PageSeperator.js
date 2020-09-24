import React, { Component, Fragment } from 'react';

class PageSeperator extends Component {
  render() {
    return (
      <Fragment>
        <div className="page-separator">
          <div className="page-separator__text">{this.props.name}</div>
        </div>
      </Fragment>
    );
  }
}

export default PageSeperator;