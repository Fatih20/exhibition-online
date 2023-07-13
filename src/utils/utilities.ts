import { FieldForm } from "./types";

export function errorMessageGenerator(errorAt: FieldForm | undefined) {
  switch (errorAt) {
    case "gender":
      return "Harap berikan informasi gender anda!";
    case "knowFrom":
      return "Harap berikan informasi tahu dari mana pameran ini!";
    case "name":
      return "Harap berikan informasi nama anda!";
    case "origin":
      return "Harap berikan informasi asal anda!";
    default:
      return "";
  }

  return "";
}
