const componentDirectories = {
  type: 'input',
  routes: '/app',
  container: 'components/containers',
  UI: 'components/UI',
};
const actions = {
  page: [
    {
      type: 'add',
      path: `../src/${componentDirectories.routes}/{{pascalCase name}}/page.tsx`,
      templateFile: `templates/component/pageTemplate.tsx.hbs`,
    },
  ],
  layout: [
    {
      type: 'add',
      path: `../src/${componentDirectories.routes}/{{pascalCase name}}/layout.tsx`,
      templateFile: 'templates/component/layoutTemplate.tsx.hbs',
    },
  ],
  UI: [
    {
      type: 'add',
      path: `../src/${componentDirectories.UI}/{{pascalCase name}}/index.tsx`,
      templateFile: 'templates/component/component.tsx.hbs',
    },
    {
      type: 'add',
      path: `../src/${componentDirectories.UI}/{{pascalCase name}}/index.test.tsx`,
      templateFile: 'templates/component/test.tsx.hbs',
    },
  ],
  container: [
    {
      type: 'add',
      path: `../src/${componentDirectories.container}/{{pascalCase name}}/index.tsx`,
      templateFile: 'templates/component/component.tsx.hbs',
    },
    {
      type: 'add',
      path: `../src/${componentDirectories.container}/{{pascalCase name}}/index.test.tsx`,
      templateFile: 'templates/component/test.tsx.hbs',
    },
  ],
};

module.exports = {
  description: 'Creates a new component',
  prompts: [
    {
      type: 'list',
      name: 'componentType',
      message: 'What commponent do you want to create ? ',
      choices: ['page', 'layout', 'container', 'UI'],
    },
    {
      name: 'name',
      message: 'What is the name of the component ?',
    },
  ],
  actions: ({ componentType }) => actions[componentType],
};
