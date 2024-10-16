export function NumberToSouthAsian(n: number): string {
    let numParts = n.toString().split(".");
    let intPart = numParts[0];
    let decimalPart = numParts.length > 1 ? numParts[1] : "00";
  
    decimalPart = decimalPart.length < 2 ? decimalPart + '0' : decimalPart.slice(0, 2);
  
    if (intPart.length <= 3) {
      return intPart + '.' + decimalPart;
    } else if (intPart.length <= 5) {
      return intPart.substring(0, intPart.length - 3) + ',' + intPart.substring(intPart.length - 3) + '.' + decimalPart;
    } else {
      let lastThreeDigits = intPart.substring(intPart.length - 3);
      let restOfTheDigits = intPart.substring(0, intPart.length - 3);
      let formattedRest = restOfTheDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
      return formattedRest + ',' + lastThreeDigits + '.' + decimalPart;
    }
    // return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  