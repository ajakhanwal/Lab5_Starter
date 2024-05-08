// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber tests 
test('valid phone number should return true', () => {
  expect(isPhoneNumber('123-456-7891')).toBe(true);
});

test('phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number', () => {
  expect(isPhoneNumber('123-45-67890')).toBe(false);
});

test('empty phone number', () => {
  expect(isPhoneNumber('')).toBe(false);
});

//isEmail test cases
test('valid email', () => {
  expect(isEmail('abc@example.com')).toBe(true);
});

test('email with capital letters', () => {
  expect(isEmail('DEF@example.co')).toBe(true);
});

test('invalid email without domain', () => {
  expect(isEmail('test@example')).toBe(false);
});

test('invalid email without "@" should return false', () => {
  expect(isEmail('abcd.com')).toBe(false);
});

//isStrongPassword test cases:
test('valid strong password', () => {
  expect(isStrongPassword('abc12')).toBe(true);
});

test('strong password with capital letter', () => {
  expect(isStrongPassword('Abcd_123')).toBe(true);
});

test('invalid password with less than 3 characters', () => {
  expect(isStrongPassword('Ab')).toBe(false);
});

test('invalid password with more than 15 characters', () => {
  expect(isStrongPassword('Abcd_123Abcd_1234')).toBe(false);
});

//isDate test cases:
test('valid date should return true', () => {
  expect(isDate('12/31/2023')).toBe(true);
});

test('valid date with one number in XX', () => {
  expect(isDate('1/31/2023')).toBe(true);
});

test('invalid date with no month', () => {
  expect(isDate('/31/2023')).toBe(false);
});

test('invalid date with invalid day', () => {
  expect(isDate('12/3232/2023')).toBe(false);
});

//isHexColor test cases:
test('valid 3 character hex color', () => {
  expect(isHexColor('#0f0')).toBe(true);
});

test('valid 6 character hex color', () => {
  expect(isHexColor('#00ff00')).toBe(true);
});

test('invalid hex color with too many characters', () => {
  expect(isHexColor('#00ff00ff')).toBe(false);
});

test('invalid hex color with invalid characters', () => {
  expect(isHexColor('#g00ff0')).toBe(false);
});



