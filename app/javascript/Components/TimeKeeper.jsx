import React from 'react'
import TimeSlicesCollection from 'Collections/TimeSlices';
import TimeKeeperRow from 'Components/TimeKeeper/Row';
import moment from 'moment';

class TimeKeeper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.timeSlices().on('add', this.refresh.bind(this));
  }

  refresh() {
    this.setState({});
  }

  timeSlices() {
    if (!this._timeSlices) {
      this._timeSlices = new TimeSlicesCollection();
    }
    return this._timeSlices;
  }

  addSlice() {
    this._timeSlices.add({
      start_time: moment(),
    });
    this.setState({});
  }


  render() {
    return (
      <div className="page">
        <div>TimeKeeper JSX</div>
        <button onClick={this.addSlice.bind(this)}>Add</button>
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

export default TimeKeeper;