// Even though the domain part of an email address can be 255 chars,
// in practice, the total email address is limited to 254 characters.
// See https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
const maxEmailLength = 254

const validateEmail = email => {
  if (!email || email.length > maxEmailLength) {
    return false
  }

  const tester = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.)+[a-zA-Z0-9-]{2,63}$/

  if (!tester.test(email)) {
    return false
  }

  return true
}

export { validateEmail }
