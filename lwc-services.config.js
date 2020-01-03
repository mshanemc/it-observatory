// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/lwc-create-app/blob/master/packages/lwc-services/example/lwc-services.config.js
module.exports = {
    resources: [{ from: 'src/client/resources', to: 'dist/resources' }],
    sourceDir: './src/client',
    moduleDir: './src/client/modules',
    localModulesDirs: ['./node_modules/@mshanemc/lwc-oss-base/src/modules']
};
