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
      path: `/src/${componentDirectories.routes}/{{pascalCase name}}/page.ts`,
      templateFile: `plop-templates/pageComponent.tsx.hbs`,
    },
  ],
  layout: [
    {
      type: 'add',
      path: `src/${componentDirectories.routes}/{{pascalCase name}}/layout.tsx`,
      templateFile: 'plop-templates/layoutComponent.tsx.hbs',
    },
  ],
  UI: [
    {
      type: 'add',
      path: `src/${componentDirectories.UI}/{{pascalCase name}}/index.tsx`,
      templateFile: 'plop-templates/UIComponent.tsx.hbs',
    },
    {
      type: 'add',
      path: `src/${componentDirectories.UI}/{{pascalCase name}}/index.test.tsx`,
      templateFile: 'plop-templates/UITest.tsx.hbs',
    },
  ],
  container: [
    {
      type: 'add',
      path: `src/${componentDirectories.container}/{{pascalCase name}}/index.tsx`,
    },
    {
      type: 'add',
      path: `src/${componentDirectories.container}/{
      {pascalCase name}/index.test.tsx
     }`,
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
