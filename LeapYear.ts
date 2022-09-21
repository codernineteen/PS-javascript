const cal: { [key: string]: number } = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

function dayOfProgrammer(year: number): string {
  //1700 ~ 1917 Julian cal -> leap year: %4
  //1919 ~ Gregorian -> leap year: % 400 || % 4 but not % 100
  //1918 Jan 31th -> Feb 14th(32th day of the year)
  if (year >= 1700 && year <= 1917) {
    //Julian
    if (year % 4 === 0) {
      cal["2"] = 29;
    }
  } else if (year === 1918) {
    //feb starts at 14th
    cal["2"] = 15;
  } else {
    if (year % 400 === 0) {
      cal["2"] = 29;
    }
    if (year % 4 === 0 && year % 100 !== 0) {
      cal["2"] = 29;
    }
  }

  let targetDay = 256;
  let targetMonth = 0;
  let restDate = 0;
  for (let month in cal) {
    if (targetDay - cal[month] < 0) {
      targetMonth = parseInt(month);
      restDate = targetDay;
      break;
    }
    targetDay -= cal[month];
  }

  return `${restDate}.${
    targetMonth < 10 ? `0${targetMonth}` : targetMonth
  }.${year}`;
}
