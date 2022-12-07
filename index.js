#!/usr/bin/env node

'use strict'

/* @author ysknk */

import fs from 'fs'
import path from 'path'
import glob from 'glob'

import stylus from 'stylus'
import nib from 'nib'
import utils from 'node-package-utilities'

import argv from './lib/arguments.js'

utils.time.initializeProcess()

glob.sync(argv.src, {
  ignore: argv.ignore,
  cwd: argv.cwd
}).map((key) => {
  const filename = key.replace(/\.[^/.]+$/, '')
  const filepath = path.resolve(argv.cwd, key)

  utils.message.processing(filepath)

  fs.readFile(filepath, argv.enc, (err, data) => {
    if (err) { return }

    argv.exec({
      stylus,
      nib,
      fs,
      path,

      argv,

      filepath,
      filename,

      data
    })
  })
})

