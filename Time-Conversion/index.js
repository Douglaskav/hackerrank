/**
 * @author Douglas Nicolas(douglaskav)
 * [Time-Conversion](https://www.hackerrank.com/challenges/time-conversion/problem)
 */



function timeConversion(s) {
  let timeset = s.substr(s.length - 2, s.length);

  let hour = s.slice(0, -2);
  hour = hour.substring(2);

  let initialHours = s.substr(0, 2);

  if (timeset === "AM") {
    hour = "0" + (initialHours % 12) + hour;
  } else if ((timeset === "PM") & (initialHours != 12)) {
    hour = Number(initialHours) + 12 + hour;
  } else if ((timeset === "PM") & (initialHours == 12)) {
    hour = initialHours + hour;
  }

  return hour;
}

console.log(timeConversion("12:45:54PM"));
