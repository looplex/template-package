import { test } from '@japa/runner'

import { add } from './index.js'

test('add two numbers', ({ expect }) => {
  expect(add(1, 1)).toBe(2)
})
