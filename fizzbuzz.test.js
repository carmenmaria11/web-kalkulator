import { fizzBuzz } from './fizzbuzz.js';
import test from 'node:test';
import * as assert from 'node:assert';

test('fizzBuzz(1) er "1"', () => {
    assert.strictEqual(fizzBuzz(1), "1");
});

test('fizzBuzz(3) er "Fizz"', () => {
    assert.strictEqual(fizzBuzz(3), "Fizz");
});

test('fizzBuzz(5) er "Buzz"', () => {
    assert.strictEqual(fizzBuzz(5), "Buzz");
});

test('fizzBuzz(15) er "FizzBuzz"', () => {
    assert.strictEqual(fizzBuzz(15), "FizzBuzz");
});