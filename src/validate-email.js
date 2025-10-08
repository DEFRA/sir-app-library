const validateEmail = email => {
  if (!email) {
    return false
  }

  const tester = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.)+[a-zA-Z0-9-]{2,63}$/

  if (!tester.test(email)) {
    return false
  }

  const domainMaxLength = 255
  const emailParts = email.split('@')

  if (emailParts[1].length > domainMaxLength) {
    return false
  }

  return true
}

export { validateEmail }
