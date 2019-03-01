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
  },

  parse: function(resp) {
    let data = _.clone(resp);
    _.each(data, function(value, key) {
      if (key.indexOf('time') > -1) {
        data[key] = moment(value);
      }
    });
    return data;
  },

  toJSON: function() {
    let data = _.clone(this.attributes);
    _.each(data, function (value, key) {
      if (key.indexOf('time') > -1) {
        data[key] = moment(value).toJSON();
      }
    });
    return data;
  }


});

export default TimeSlice;