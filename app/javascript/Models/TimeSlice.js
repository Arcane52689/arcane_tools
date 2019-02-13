import BaseModel from 'Models/Base';
import moment from 'moment';

const TimeSlice = BaseModel.extend({
  defaults: function() {
    return {
      start_time: moment(),
      name: '',
      description: ''
    };
  },

  timePassed: function() {
    var endTime = this.get('endTime') || moment();
    return (endTime - this.get('start_time')) / 1000;
  }
});

export default TimeSlice;