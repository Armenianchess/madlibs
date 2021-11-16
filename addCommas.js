function addCommas(num) {

  let sign = "";
  if (num < 0) sign = "-";
  num = Math.abs(num);

  let [whole, decimal] = num.toString().split(".");

  if (decimal) {
    return `${sign}${commaInsert(whole)}.${decimal}`;
  }

  return `${sign}${commaInsert(whole)}`;
}

function commaInsert(str) {

  let commaIndex = 0;
  let commaStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    commaStr = str[i] + commaStr;
    commaIndex++;

    if (commaIndex % 3 === 0 && i !== 0) {
      commaStr = "," + commaStr;
    }
  }

  return commaStr;
}

module.exports = addCommas;
