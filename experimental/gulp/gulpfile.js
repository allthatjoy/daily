const gulp = require('gulp')
const run = require('gulp-run-command').default
const fs = require('fs')

const defaultContent = '// TODO: IMPLEMENTATION'

const log = console.log

gulp.task('default', ['basicServerSetup'])

gulp.task('basicServerSetup', () => {
  const createDirectory = dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
      log(`directory successfully created: ${dir}`);
    } else {
      log(`directory already exists: ${dir}`);
    }
  }
  const createFile = ({
    file,
    content
  }) => {
    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, content)
      log(`file successfully created: ${file}`);
    } else {
      log(`file already exists: ${file}`);
    }
  }
  const dirsToCreate = ['./views', './views/assets', './routes']
  const filesToCreate = [{
    file: './routes/api.js',
    content: defaultContent
  }, {
    file: './server.js',
    content: defaultContent
  }, {
    file: './utility.js',
    content: defaultContent
  }]
  dirsToCreate.forEach(createDirectory)
  filesToCreate.forEach(createFile)
})
