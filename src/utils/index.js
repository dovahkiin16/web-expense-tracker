import moment from 'moment-mini';

export const formatDate = (date) => {
  return moment(date).format('MMMM DD, YYYY - h:mm a');
};
