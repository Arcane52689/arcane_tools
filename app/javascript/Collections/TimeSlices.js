import BaseCollection from 'Collections/Base';
import TimeSlice from '../Models/TimeSlice';

const TimeSlicesCollection = BaseCollection.extend({
  model: TimeSlice,

  comparator: function(slice1, slice2) {
    let result = slice1.get('start_time') - slice2.get('start_time');
    if (result > 0) {
      return -1;
    } else {
      return 1;
    }
  }
});

export default TimeSlicesCollection;