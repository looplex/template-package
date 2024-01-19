import { configure, processCLIArgs, run } from '@japa/runner'
import { expect } from '@japa/expect'
import { ndjson, spec } from '@japa/runner/reporters'

processCLIArgs(process.argv.splice(2))
configure({
  files: ['src/**/*.test.js'],
  plugins: [expect()],
  reporters: {
    activated: ['spec'],
    list: [ndjson(), spec()]
  }
})

run()
