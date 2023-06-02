import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import fs from 'fs'
import path from 'path'

import utils from 'node-package-utilities'

export const packageName = 'stylus'
export const packageWrapName = 'npms.confg'
export const wrapConfig = await utils.value.fromConfig(packageWrapName)
export const baseConfig = await utils.value.fromConfig(packageName)
export const config = Object.assign(
  {},
  (wrapConfig && wrapConfig[packageName]) || {},
  baseConfig
)

export const argv = yargs(hideBin(process.argv))
  .config(config || {})
  .option('cwd', {
    alias: 'c',
    description: 'Current Working Directory',
    default: '',
    demandOption: false
  })
  .option('src', {
    alias: 's',
    description: 'Source Directory',
    demandOption: true
  })
  .option('dest', {
    alias: 'd',
    description: 'Dest Directory',
    // default: ''
    demandOption: true
  })
  .option('encode', {
    alias: 'enc',
    description: 'File String Encode',
    default: 'utf8'
  })
  .option('ext', {
    alias: 'e',
    description: 'Target Extention',
    default: '.css',
    demandOption: true
  })
  .option('ignore', {
    alias: 'ig',
    description: 'Ignore Directory',
    default: '{**/_*,node_modules/**/*}',
    demandOption: false
  })
  .help()
  .argv

if (!argv.exec) {
  argv.exec = ({
    stylus,
    nib,
    fs,
    path,

    argv,

    filepath,
    filename,

    data
  }) => {
    stylus(data)
      .use(nib())
      .import('nib')
      .render(function(err, css){
        if (err) { throw err }
        const dest = path.resolve(`${argv.dest}${filename}${argv.ext}`)
        fs.mkdirSync(path.dirname(dest), { recursive: true })
        fs.writeFile(dest, css, (err, data) => {
          if (err) { throw err }
          utils.message.success(`${dest}`)
        })
      })
  }
}

export default argv
