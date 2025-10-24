import { expect, test } from 'vitest'
import { validateEmail } from '../src/validate-email.js'

const goodEmailAddresses = [
  'test@test.com',
  'averylonglongsuperlongemailaddressandIllsayitagainthisislong@anevenlongerbitasIneedtogetto255characters.herewegoagainthisisgoingtobefunisntit.andagainherewegoagainthisisgoingtobefunisntitohyes.andmoreherewegoagainthisisgoingtobefunisntitnoitsnot.com',
  'test@test-123.com',
  'test@test.test-123.com',
  'test@test-123.test-123.com',
  'a@a.com',
  'a@a.co.uk',
  '1234567890!#$%&\'*+/=?^_`{|}~.-@test.com',
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ@test.com',
  'abcdefghijklmnopqrstuvwxyz@test.com'
]

const badEmailAddresses = [
  '',
  'averylonglongsuperlongemailaddressandIllsayitagainthisislong@anevenlongerbitasIneedtogetto255characters.herewegoagainthisisgoingtobefunisntit.andagainherewegoagainthisisgoingtobefunisntitohyes.andmoreherewegoagainthisisgoingtobefunisntitnoitsnot.nearlythere.com',
  'averylonglongsuperlongemailaddressandIllsayitagainthisislongandover64chars@test.com',
  'a@averylonglongsuperlongemailaddressandIllsayitagainthisislongandover63chars.com',
  'a@a.averylonglongsuperlongemailaddressandIllsayitagainthisislongandover63chars',
  'a@a.a',
  '"@test.com',
  'test@#$%&.com',
  'test@test',
  'test @test.com',
  'test@ test.com',
  'test@test*.com'
]

const specialChars = '!#$%&\'*+/=?^_`{|}~.'

test('checks good email addresses pass validation', () => {
  for (const address of goodEmailAddresses) {
    expect(validateEmail(address)).toBe(true)
  }
})

test('checks bad email addresses fail validation', () => {
  for (const address of badEmailAddresses) {
    expect(validateEmail(address)).toBe(false)
  }

  for (const char of specialChars) {
    const address = `test@${char}.com`
    expect(validateEmail(address)).toBe(false)
  }
})
