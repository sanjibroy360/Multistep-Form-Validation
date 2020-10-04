
export function isNameValid(name = "", fieldName = "") {
  name = name.trim();
  if (!name) {
    return `${fieldName.trim()} is required.`;
  }

  let hasNonCharValue = name.split("").some((char, index) => {
    let asciiValue = name.toLowerCase().charCodeAt(index);
    if (asciiValue < 97 || asciiValue > 122 || !isNaN(+char)) {
      return true;
    }
    return false;
  });
  if (hasNonCharValue) {
    return "Only alphabets are allowed.";
  }
  return "";
}

export function isZipcodeValid(zipcode = "") {
  zipcode = zipcode.trim();
  if(!zipcode) return "Zipcode is required.";
  if (zipcode.length !== 6) {
    return "Zipcode must be 6 character long.";
  }

  let hasNonNumericValue = zipcode.split("").some((digit) => isNaN(+digit));

  if (hasNonNumericValue) {
    return "Zipcode sholud contain only numbers.";
  }
  return "";
}

export function isNonEmpty(value="", fieldName="") {
    value = value.trim();
    if(!value) {
        return `${fieldName.trim()} is required.`
    }
    return "";
}