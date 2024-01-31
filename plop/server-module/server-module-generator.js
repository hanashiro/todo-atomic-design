module.exports = function (plop, handlers) {
    plop.setGenerator('server-module', {
        description: 'Server Module',
        prompts: [
            {
                name: 'name',
                type: 'input',
                message: "Server Module's Name: ",
                default: 'Product',
            },
            {
                name: 'folder',
                type: 'directory',
                message: "Folder's Name: (kebab-case) ",
                basePath: './src/data/server/',
            },
        ],
        actions(data) {
            const fileName = data.name[0].toLowerCase() + data.name.slice(1);
            const folder = data.folder.toLowerCase();

            const actions = [
                {
                    type: 'add',
                    path: `src/data/server/${folder}/${fileName}/${fileName}.controller.test.ts`,
                    templateFile:
                        'plop/server-module/server-controller-test-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/data/server/${folder}/${fileName}/${fileName}.controller.ts`,
                    templateFile:
                        'plop/server-module/server-controller-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/data/server/${folder}/${fileName}/${fileName}.dto.ts`,
                    templateFile: 'plop/server-module/server-dto-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/data/server/${folder}/${fileName}/${fileName}.entity.ts`,
                    templateFile:
                        'plop/server-module/server-entity-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/data/server/${folder}/${fileName}/${fileName}.mock.ts`,
                    templateFile: 'plop/server-module/server-mock-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/data/server/${folder}/${fileName}/${fileName}.repository.abstract.ts`,
                    templateFile:
                        'plop/server-module/server-repository-abstract-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/data/server/${folder}/${fileName}/${fileName}.repository.ts`,
                    templateFile:
                        'plop/server-module/server-repository-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/data/server/${folder}/${fileName}/${fileName}.repository.test.ts`,
                    templateFile:
                        'plop/server-module/server-repository-test-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/data/server/${folder}/${fileName}/${fileName}.provider.abstract.ts`,
                    templateFile:
                        'plop/server-module/server-provider-abstract-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/data/server/${folder}/${fileName}/${fileName}.provider.ts`,
                    templateFile:
                        'plop/server-module/server-provider-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/data/server/${folder}/${fileName}/${fileName}.schema.ts`,
                    templateFile:
                        'plop/server-module/server-schema-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/data/server/${folder}/${fileName}/${fileName}.service.abstract.ts`,
                    templateFile:
                        'plop/server-module/server-service-abstract-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/data/server/${folder}/${fileName}/${fileName}.service.test.ts`,
                    templateFile:
                        'plop/server-module/server-service-test-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/data/server/${folder}/${fileName}/${fileName}.service.ts`,
                    templateFile:
                        'plop/server-module/server-service-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/data/server/${folder}/${fileName}/${fileName}.ts`,
                    templateFile:
                        'plop/server-module/server-module-template.hbs',
                },
            ];

            return actions;
        },
    });
};
