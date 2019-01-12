/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
  const inMinutes = hours * 60 + minutes + interval;
  let tempHours = Math.trunc(inMinutes / 60);
  let outMinutes = inMinutes - tempHours * 60;
  let outHours = tempHours % 24;
  return (('00' + outHours).slice(-2))+':'+(('00' + outMinutes).slice(-2))
};
