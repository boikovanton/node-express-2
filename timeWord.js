function timeWord(time) {
    const [hourStr, minuteStr] = time.split(":");
    const hour = Number(hourStr);
    const minute = Number(minuteStr);
  
    if (hour === 0 && minute === 0) return "midnight";
    if (hour === 12 && minute === 0) return "noon";
  
    const ones = [
      "zero", "one", "two", "three", "four", "five",
      "six", "seven", "eight", "nine", "ten", "eleven",
      "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
      "seventeen", "eighteen", "nineteen"
    ];
  
    const tens = [
      "", "", "twenty", "thirty", "forty", "fifty"
    ];
  
    const ampm = hour < 12 ? "am" : "pm";
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    const hourWord = ones[displayHour];
  
    let minuteWord;
  
    if (minute === 0) {
      minuteWord = "o’clock";
    } else if (minute < 10) {
      minuteWord = `oh ${ones[minute]}`;
    } else if (minute < 20) {
      minuteWord = ones[minute];
    } else {
      const ten = Math.floor(minute / 10);
      const one = minute % 10;
      minuteWord = one === 0 ? tens[ten] : `${tens[ten]} ${ones[one]}`;
    }
  
    return `${hourWord} ${minuteWord} ${ampm}`;
  }
  
  module.exports = timeWord;