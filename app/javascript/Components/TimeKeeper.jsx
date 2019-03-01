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
      active: this.localStorageModels().length > 0
    };
  }

  componentDidMount() {
    let models = this.localStorageModels();
    this.timeSlices().reset(models, {parse: true});
    this.listenTo(this.timeSlices(), 'add change', this.storeSlices.bind(this));
    if (this.localStorageModels().length > 0) {
      setTimeout(this.refresh.bind(this));
    }
  }

  componentWillUnmount() {
    this.interval && clearInterval(this.interval);
    this.stopListening();
  }

  storeSlices() {
    let json = JSON.stringify(this.timeSlices().toJSON());
    window.localStorage.timeKeeper = json;
  }

  clearSlices() {
    window.localStorage.removeItem('timeKeeper');
    this.timeSlices().reset([]);
  }

  localStorageModels() {
    if (window.localStorage.timeKeeper) {
      return JSON.parse(window.localStorage.timeKeeper);
    }
    return [];
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

        {this.state.active && <button
          onClick={function () {
            this.clearSlices();
            this.setState({ active: false });
          }.bind(this)}
        >
          Clear
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