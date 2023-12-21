const inputs = document.querySelectorAll('input');

const patterns = {
  telephone: new RegExp(/^\d{11}$/),
  username: new RegExp(/^[a-z\d]{5,12}$/),
  password: new RegExp(/^[\w@-]{8,20}$/),
  slug: new RegExp(/[a-z\d-]{8,20}$/),
  email: new RegExp(/^[a-z\d\.-]+@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/),
};

// validation function
var validate = (field, regex) => {
  if (regex.test(field.value)) {
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
};
inputs.forEach((x) => {
  x.addEventListener('keyup', (event) => {
    validate(event.target, patterns[event.target.attributes.name.value]);
  });
});
