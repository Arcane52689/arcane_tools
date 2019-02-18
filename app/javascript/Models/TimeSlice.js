import BaseModel from 'Models/Base';
import moment from 'moment';
import { timePassed } from 'Utils/Format/Number';

const TimeSlice = BaseModel.extend({
  defaults: function() {
    return {
      start_time: moment(),
      name: '',
      description: ''
    };
  },

  timePassed: function() {
    let endTime = this.get('end_time') || moment();
    let seconds =  (endTime - this.get('start_time')) / 1000;
    return timePassed(seconds);
  }
});

export default TimeSlice;