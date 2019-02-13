import BaseCollection from 'Collections/Base';
import TimeSlice from '../Models/TimeSlice';

const TimeSlicesCollection = BaseCollection.extend({
  model: TimeSlice,
});

export default TimeSlicesCollection;