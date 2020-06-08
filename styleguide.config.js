const path = require('path')

module.exports = {
  components: './components/**/*.{js,jsx,tsx}',
  webpackConfig: require('./webpack.config.js'),
  require: [path.resolve(__dirname, 'styleguide.setup.js')],
  propsParser: (filePath, source, resolver, handlers) => {
    const { ext } = path.parse(filePath);
    return ext === '.tsx'
      ? require('react-docgen-typescript').parse(
        filePath,
        source,
        resolver,
        handlers
      )
      : require('react-docgen').parse(source, resolver, handlers);
  },
  pagePerSection: true,
  styles: {
    StyleGuide: {
      content: {
        maxWidth: '100%',
      },
    },
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'global/Layout.jsx')
  }
}
