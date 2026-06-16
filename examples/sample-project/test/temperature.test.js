const test = require('node:test');
const assert = require('node:assert');
const { celsiusToFahrenheit, fahrenheitToCelsius } = require('../src/temperature');

test('0C is 32F', () => {
  assert.strictEqual(celsiusToFahrenheit(0), 32);
});

test('100C is 212F', () => {
  assert.strictEqual(celsiusToFahrenheit(100), 212);
});

test('32F is 0C', () => {
  assert.strictEqual(fahrenheitToCelsius(32), 0);
});

test('212F is 100C', () => {
  assert.strictEqual(fahrenheitToCelsius(212), 100);
});
