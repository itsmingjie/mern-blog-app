//validation post
const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validatePostInput = data => {
  let errors = {};

  let { title, body } = data;

  //converting empty fields to empty string as validator function works only with strings
  title = !isEmpty(title) ? title : "";
  bosy = !isEmpty(body) ? body : "";

  if (Validator.isEmpty(title)) {
    errors.title = "Title is required";
  }

  if (Validator.isEmpty(body)) {
    errors.body = "Description is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
