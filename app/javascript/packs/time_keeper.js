import React from 'react'
import TimeKeeper from 'Components/TimeKeeper';
import ReactDOM from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <TimeKeeper name="React" />,
    document.body.appendChild(document.createElement('div')),
  );
});
