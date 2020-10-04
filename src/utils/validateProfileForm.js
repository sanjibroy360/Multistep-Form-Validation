export function isUsernameValid(username = "") {
  username = username.trim();
  if (!username) {
    return "Username is required.";
  }
  let hasNumber = username.split("").some((char) => !isNaN(+char));
  if (username.length < 6) {
    return "Username must be atleast 6 character long.";
  } else if (username !== username.toLowerCase()) {
    return "Username must be in lowercase";
  } else if (hasNumber) {
    return "Username should not contain any digit";
  } else {
    return "";
  }
}

export function isBioValid(bio = "") {
  bio = bio.trim();
  if (!bio) return "Bio is required.";
  return bio.length < 150 ? "Bio must be 150 characters long" : "";
}

export function isAvatarValid(avatar = "", imageType) {
  avatar = avatar.trim();
  if (!avatar) return "Profile picture is required.";
  let isJPEG = imageType.toLowerCase().includes("jpeg");
  return !isJPEG ? "Only .jpeg images are supported." : "";
}

export function isEmailValid(email = "") {
  email = email.trim();
  if(!email) return "Email is required.";
  let isValid =
    email.length && email.endsWith(".com") && email.includes("@");
  return !isValid ? "Invalid Email" : "";
}

export function isContactNumberValid(contactNumber = "") {
  contactNumber = contactNumber.trim();
  if(!contactNumber) return "Contact number is required.";
  
  let startingDigit = contactNumber.trim().slice(0, 1);
  if (startingDigit > 9 || startingDigit < 6) {
    return "Invalid contact number";
  }
  return "";
}
