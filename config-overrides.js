const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const styles = require('./src/styles/variables')

module.exports = override(
 fixBabelImports('import', {
   libraryName: 'antd',
   libraryDirectory: 'es',
   style: true,
 }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': styles.variables.colors.primary,
      '@text-color': styles.variables.colors.darkGray
    },
  })
);
