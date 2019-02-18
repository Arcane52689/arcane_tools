import React from 'react'
import CustomComponent from 'Components/CustomComponent';
import TimeSlicesCollection from 'Collections/TimeSlices';
import TimeKeeperRow from 'Components/TimeKeeper/Row';
import moment from 'moment';
import { hot } from 'react-hot-loader';

class TimeKeeper extends CustomComponent {

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  componentDidMount() {
    // this.timeSlices().on('add', this.refresh.bind(this));
  }

  timeSlices() {
    if (!this._timeSlices) {
      this._timeSlices = new TimeSlicesCollection();
    }
    return this._timeSlices;
  }

  addSlice() {
    let lastSlice = this.timeSlices().first();
    lastSlice && lastSlice.set('end_time', moment());
    this.timeSlices().add({
      start_time: moment(),
    });
    this.setState({active: true});
  }


  render() {
    console.log(this.state)
    return (
      <div className="page">
        <div>TimeKeeper JSX</div>
        <button 
          onClick={this.addSlice.bind(this)}
        >
          { this.state.active ? 'Add' : 'Start'}
        </button>
        {this.state.active && <button
          onClick={function() {
            let lastSlice = this.timeSlices().first();
            lastSlice && lastSlice.set('end_time', moment());
            this.setState({active: false});
          }.bind(this)}
        >
          Stop
        </button>}
        <ul className="time-items">
          {this.timeSlices().map(function(slice, idx) {
            return (
              <TimeKeeperRow key={slice.cid}
                slice={slice}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default hot(module)(TimeKeeper);