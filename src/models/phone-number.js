const Formats = require('google-libphonenumber').PhoneNumberFormat;
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

export default class PhoneNumber {
  constructor(number) {
    this.parsedNumber = phoneUtil.parse(number);
  }

  internationalFormat() {
    return phoneUtil.format(this.parsedNumber, Formats.INTERNATIONAL);
  }
}
