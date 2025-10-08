import { expect, test } from 'vitest'
import { validateEmail } from '../src/validate-email.js'

test('validates email address', () => {
  expect(validateEmail('')).toBe(false)
})
