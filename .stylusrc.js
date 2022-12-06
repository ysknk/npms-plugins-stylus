export default {
  cwd: "./test/before",
  src: "**/[!_]*.styl",
  dest: "./test/after/",
  // exec: ({stylus, nib, fs, path, utils, argv, filepath, filename, data}) => {
  //   stylus(data)
  //     .use(nib())
  //     .import('nib')
  //     .render(function(err, css){
  //       if (err) { throw err }
  //       const dest = path.resolve(`${argv.dest}${filename}${argv.ext}`)
  //       fs.mkdirSync(path.dirname(dest), { recursive: true })
  //       fs.writeFile(dest, css, (err, data) => {
  //         if (err) { throw err }
  //         utils.message.success(`stylus: ${dest}`, {ptime: false})
  //       })
  //     })
  // }
}
