const inquirerDirectory = require('inquirer-directory');
const pageGenerator = require('./plop/page/page-generator');
const partialGenerator = require('./plop/partial/partial-generator');
const componentGenerator = require('./plop/component/component-generator');
const storeGenerator = require('./plop/store/store-generator');
const hookGenerator = require('./plop/hook/hook-generator');
const serviceGenerator = require('./plop/service/service-generator');
const templateGenerator = require('./plop/template/template-generator');

module.exports = function (plop) {
    plop.setPrompt('directory', inquirerDirectory);

    Object.keys(handlers).forEach((functionName) => {
        plop.setHelper(functionName, handlers[functionName]);
    });

    [
        pageGenerator,
        partialGenerator,
        componentGenerator,
        storeGenerator,
        hookGenerator,
        serviceGenerator,
        templateGenerator,
    ].forEach((generator) => generator(plop, handlers));
};

const handlers = {
    getPath(folder, name) {
        let path = '';
        if (folder) {
            path += `${folder.toLowerCase()}/`;
        }
        path += `${name.toLowerCase()}`;
        return path;
    },
    createFilename(componentName) {
        return componentName
            .replace(/([A-Z])/g, ' $1')
            .trim()
            .toLowerCase()
            .split(' ')
            .join('-');
    },
};
