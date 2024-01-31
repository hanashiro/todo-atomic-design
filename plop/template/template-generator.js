module.exports = function (plop, handlers) {
    plop.setGenerator('template', {
        description: 'Template',
        prompts: [
            {
                name: 'name',
                type: 'input',
                message: "Template's Name: ",
                default: 'Product',
            },
            {
                name: 'folder',
                type: 'directory',
                message: "Folder's Name: (kebab-case) ",
                basePath: './src/ui/templates/',
            },
        ],
        actions(data) {
            const fileName = handlers.createFilename(data.name);
            const folder = data.folder.toLowerCase();

            const actions = [
                {
                    type: 'add',
                    path: `src/ui/templates/${folder}/${fileName}/${data.name}.tsx`,
                    templateFile: 'plop/template/template-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/ui/templates/${folder}/${fileName}/${data.name}.styled.tsx`,
                    templateFile: 'plop/template/template-style-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/ui/templates/${folder}/${fileName}/${data.name}.hook.ts`,
                    templateFile: 'plop/template/template-hook-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/ui/templates/${folder}/${fileName}/${data.name}.logic.ts`,
                    templateFile: 'plop/template/template-logic-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/ui/templates/${folder}/${fileName}/${data.name}.logic.test.ts`,
                    templateFile:
                        'plop/template/template-logic-test-template.hbs',
                },
            ];

            return actions;
        },
    });
};
