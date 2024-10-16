export enum ValidationType {
  Name = "name",
  Email = "email",
  Mobile = "mobile",
  SpecialCharacters = "special_characters",
  Uppercase = "uppercase",
  Lowercase = "lowercase",
  FirstUpperRestLower = "first_upper_rest_lower",
  Alphanumeric = "alphanumeric",
  Username = "username",
  Password = "password",
  GSTNumber = "gstNumber",
  PinCode = "pinCode",
  OnlyAlphabets = "onlyalphabets",
  Numeric = "numeric",
  // PanNumber = "panNumber",
}


export function validateInput(inputString: string, validationType: ValidationType): boolean {
  let pattern: RegExp;

  switch (validationType) {
      case ValidationType.Name:
          pattern = /^[a-zA-Z\s]{2,}$/;
          break;
      case ValidationType.Email:
          pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          break;
      case ValidationType.Mobile:
          pattern = /^[6-9]\d{9}$/;
          break;
      case ValidationType.SpecialCharacters:
          pattern = /^[a-zA-Z0-9\s]+$/;
          break;
      case ValidationType.Uppercase:
          pattern = /^[A-Z]+$/;
          break;
      case ValidationType.Lowercase:
          pattern = /^[a-z]+$/;
          break;
      case ValidationType.FirstUpperRestLower:
          pattern = /^[A-Z][a-z]*$/;
          break;
      case ValidationType.Alphanumeric:
          pattern = /^[a-zA-Z0-9]+$/;
          break;
      case ValidationType.Username:
          pattern = /^[a-zA-Z0-9_]{4,16}$/;
          break;
      case ValidationType.Password:
          pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
          break;
      case ValidationType.GSTNumber:
          pattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
          break;
      case ValidationType.PinCode:
          pattern = /^[1-9][0-9]{5}$/;
          break;
      case ValidationType.OnlyAlphabets:
          pattern = /^[a-zA-Z\s]+$/;
          break;
      case ValidationType.Numeric:
          pattern = /^[0-9]+$/;
          break;
      // case ValidationType.PanNumber:

      default:
          // Invalid validation type
          return false;
  }

  return pattern.test(inputString);
}