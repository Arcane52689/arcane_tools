import React from 'react';
import CustomComponent from 'Components/CustomComponent';
import {PanelBody, PanelHeader} from 'Components/Containers/Panel';
import Panel from 'Components/Containers/Panel';
import styles from 'Styles/Containers/TimeKeeperRow';
import { BEM } from '../../Utils/Format/String';

class TimeKeeperRow extends CustomComponent {

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
    let bemOptions = {
      block: 'time-keeper-row',
      modifiers: []
    };
    if (!this.props.slice.get('end_time')) {
      bemOptions.modifiers.push('active');
    }
    return (
      <Panel className={BEM(bemOptions)}>
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
        <PanelBody className="time-keeper-row__body">
          <div className="">
            <div>
              Started: {this.props.slice.get('start_time').format("h:mm:ss")}
            </div>
            <div>
              Duration: {this.props.slice.timePassed()}
            </div>
            {this.props.slice.get("end_time") && <div>
              Ended: {this.props.slice.get('end_time').format('h:mm:ss')}
            </div>}
          </div>
         <div>
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
         </div>
          
        </PanelBody>
      </Panel>
    )
  }
}

export default TimeKeeperRow;