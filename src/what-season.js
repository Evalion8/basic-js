const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();
  const day = date.getDate();

  const seasons = [
    {
      name: 'winter',
      start: { month: 11, day: 21 },
      end: { month: 2, day: 19 },
    },
    {
      name: 'spring',
      start: { month: 2, day: 20 },
      end: { month: 5, day: 20 },
    },
    {
      name: 'summer',
      start: { month: 5, day: 21 },
      end: { month: 8, day: 22 },
    },
    {
      name: 'fall',
      start: { month: 8, day: 23 },
      end: { month: 11, day: 20 },
    },
  ];

  for (const season of seasons) {
    const { start, end } = season;

    if (
      (month === start.month && day >= start.day) ||
      (month === end.month && day <= end.day) ||
      (month > start.month && month < end.month)
    ) {
      return season.name;
    }
  }

  return 'winter';
}

module.exports = {
  getSeason,
};
