let exportsTest = require('./exports')
console.log('exports: ' + JSON.stringify(exportsTest))
console.log('module.exports: ' + exportsTest.write('english'))
exportsTest.write('english')
exportsTest.speak('english')

let moduleExportsTest = require('./module.exports')
console.log('module.exports: ' + JSON.stringify(moduleExportsTest))
console.log('module.exports: ' + moduleExportsTest.write('english'))
moduleExportsTest.write('english')
moduleExportsTest.speak('english')

require('colors')
console.log('test'.green)
console.log('test'.underline.yellow)

/* import exportTest from './export'
console.log('exportTest: ' + JSON.stringify(exportTest))
console.log('export: ' + exportTest.write('english'))
exportTest.write('english')
exportTest.speak('english') */
