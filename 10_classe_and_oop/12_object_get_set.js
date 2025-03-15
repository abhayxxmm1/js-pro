// ये वाला syntax ज़्यादा use नहीं होता है rarely देखोगे इस syntax ko
// underscore kya dikhata hai ki mai almost ek private property define krr raha hu
// ya fir ye normal users ke use mai nahi aa rahi
// get(le ke ane kaa aur ched chaad krna[overwrite kardiya hai]) aur set use krne se itna meaning nahi reh jata underscore ka
// getters aur setters method nhi rehta ye ek special method ban jata hata hai jo mai propertie ke upar rak raha hu

const User = {
  _email: "h@hc.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

/* here we can use factory function > object.create ये array मैं भी होते है 
> new is a constructor function
> User ke base pe ek object create kroo aur usko t ke andar refer krr do */
const tea = Object.create(User);
console.log(tea._email);
