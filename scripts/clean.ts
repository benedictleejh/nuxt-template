import fs from 'node:fs'

const dirsToRemove = [
  '.output',
  '.data',
  '.nuxt',
  '.nitro',
  '.cache',
  'dist',
  'node_modules',
  'playwright-report',
  'test-results'
]

const filesToRemove = [
  'package.json'
]

dirsToRemove.forEach(dir => fs.rmSync(dir, { recursive: true, force: true }))
filesToRemove.forEach(file => fs.rmSync(file))
