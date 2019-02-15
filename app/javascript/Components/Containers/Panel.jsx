import React from 'react';
import styles from 'Styles/Containers/panel';

class Panel extends React.Component {

  render() {
    return (
      <div className={styles.panel}>
        {this.props.children}
      </div>
    )
  }
}

export class PanelHeader extends React.Component {

  render() {
    return (
      <div className={styles.panel__header}>
        {this.props.children}        
      </div>
    );
  }
}

export class PanelBody extends React.Component {

  render() {
    return (
      <div className={styles.panel__body}>
        {this.props.children}
      </div>
    );
  }
}

export default Panel;