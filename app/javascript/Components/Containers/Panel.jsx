import React from 'react';
import CustomComponent from 'Components/CustomComponent';
import styles from 'Styles/Containers/panel';

class Panel extends CustomComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.defaultClassName = 'panel';
  }


  render() {
    return (
      <div className={this.className()}>
        {this.props.children}
      </div>
    )
  }
}

export class PanelHeader extends CustomComponent {

  constructor(props) {
    super(props);
    this.state = {};
    this.defaultClassName = 'panel__header'
  }


  render() {
    return (
      <div className={this.className()}>
        {this.props.children}        
      </div>
    );
  }
}

export class PanelBody extends CustomComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.defaultClassName = 'panel__header'
  }

  render() {
    return (
      <div className={this.className()}>
        {this.props.children}
      </div>
    );
  }
}

export default Panel;