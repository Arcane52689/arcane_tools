import React from 'react';

class CustomComponent extends React.Component {

  className() {
    return `${this.defaultClassName || ''} ${this.props.className || ''}`;
  }

  refresh(newState = {}) {
    this.setState(newState);
  }

  listeners() {
    if (this._listeners) {
      this._listeners = [];
    }
    return this._listeners
  }

  listenTo(backboneObject, event, callback) {
    backboneObject.on(event, callback);
    return this._addListener(backboneObject, event, callback);
  }

  _addListener(backboneObject, event, callback) {
    let lastId = (this.listeners()[0] && this.listeners()[0].id) || 0;

    this.listeners().push({
      id: lastId + 1,
      event: event,
      callback: callback,
      object: backboneObject
    });

    return id;
  }

  stopListening() {
    this.listeners().forEach(function(listener) {
      listener.object.off(listener.event, listener.callback);
    });
    this._listeners = [];
  }

}

export default CustomComponent;