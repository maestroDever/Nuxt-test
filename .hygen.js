const { join } = require('path')
const _ = require('lodash')

module.exports = {
  templates: join(__dirname, '.templates'),
  helpers: {
    componentName: (s) => _.startCase(s.replace(/\//g, '_')).replace(/\s+/g, ''),
    cssSelector: (s) => _.kebabCase(s),
    pagePath: (s) => s.split('/').map((p) => {
      // page names with leading _
      if (p.indexOf('_') === 0) {
        return '_' + _.kebabCase(p)
      }

      return _.kebabCase(p)
    }).join('/')
  }
}
