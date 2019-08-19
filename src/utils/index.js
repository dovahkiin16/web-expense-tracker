import moment from 'moment-mini';

export const formatDate = (date) => {
  return moment(date).format('MMMM DD, YYYY - h:mm a');
};

export const addCommas = (value) => {
  const valueStr = value.toString();
  const remainder = valueStr.length % 3;
  let result = "";

  if (value === 0) {
    return value;
  }

  if (remainder < 3) {
    result += valueStr.slice(0, remainder);
  }

  for (let i = remainder; i < valueStr.length; i += 3) {
    let toConcat = valueStr.slice(i, i + 3);

    result = result + "," + toConcat;
  }

  return result;
}