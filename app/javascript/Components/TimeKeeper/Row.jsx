import React from 'react';
import Panel from 'Components/Containers/Panel';
class TimeKeeperRow extends React.Component {



  componentDidMount() {
    this.setRefreshTimeout();
  }


  setRefreshTimeout() {
    this.interval = setTimeout(function() {
      this.setState({});
      !this.props.slice.get('end_time') && this.setRefreshTimeout();
    }.bind(this), 90);
  }

  render() {
    return (
      <Panel>
        Started: {this.props.slice.get('start_time').format("HH:MM:SS")}
        <div>
          Duration: {this.props.slice.timePassed()}
        </div>
        {this.props.slice.get("end_time") && <div>
          Ended: {this.props.slice.get('end_time').format('HH:MM:SS')}
        </div>}
      </Panel>
    )
  }
}

export default TimeKeeperRow;