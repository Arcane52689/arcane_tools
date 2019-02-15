import React from 'react';
import {PanelBody, PanelHeader} from 'Components/Containers/Panel';
import Panel from 'Components/Containers/Panel';

class TimeKeeperRow extends React.Component {



  componentDidMount() {
    this.setRefreshTimeout();
  }


  setRefreshTimeout() {
    this.interval = setTimeout(function() {
      this.setState({});
      !this.props.slice.get('end_time') && this.setRefreshTimeout();
    }.bind(this), 80);
  }

  render() {
    return (
      <Panel>
        <PanelHeader>
          <input 
            onChange={function(event) {
              this.props.slice.set('name', event.target.value);
              this.setState({});
            }.bind(this)}
            value={this.props.slice.get('name') || ''}
            placeholder="Panel Name"
          />
        </PanelHeader>
        <PanelBody>
          <div>
            Started: {this.props.slice.get('start_time').format("HH:MM:SS")}
          </div>
          <div>
            Duration: {this.props.slice.timePassed()}
          </div>
          <div>
            <input 
              onChange={function(event) {
                this.props.slice.set('issue_number', event.target.value);
                this.setState({});
              }.bind(this)}
              placeholder={'Issue Number'}
              value={this.props.slice.get('issue_number')}
            />
          </div>
          <div>
            <textarea
              onChange={function(event) {
                this.props.slice.set('description', event.target.value);
                this.setState({});
              }.bind(this)}
              value={this.props.slice.get('description')}
              placeholder="Description"
            />
          </div>
          {this.props.slice.get("end_time") && <div>
            Ended: {this.props.slice.get('end_time').format('HH:MM:SS')}
          </div>}
        </PanelBody>
      </Panel>
    )
  }
}

export default TimeKeeperRow;