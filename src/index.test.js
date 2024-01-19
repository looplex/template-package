import { test } from '@japa/runner'

import { sum } from './index.js'

test('add two numbers', ({ expect }) => {
  expect(sum(1, 1)).toBe(2)
})
