# Nextjs App Router Boilerplate: ✨

## Introduction

Welcome to the App Router Boilerplate! This boilerplate is designed to kickstart your `Nextjs` project with a minimal configuration, allowing you to focus on building your application without worrying about setting up the basics.

## Boilerplate Features 👀

- [x] Tailwind : Utilize the power of Tailwind CSS for efficient styling
- [x] TypeScript : Benefit from the type safety and enhanced tooling provided by TypeScript.
- [x] Docker : Docker configuration included for containerized deployment
- [x] Husky & conventional commits
- [x] TESTS : TESTS configuration & validation included
- [x] Plop generation
- [x] CI/CD github workflows

### Getting Started

To get started with this boilerplate, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using `yarn`.

### Linting and formating:

1. Formatting/Linting is automatically processed on saving files. If linting errors remain unresolved, commit won't go through
2. In fact, linting and formatting tasks are also installed as a pre-commit hook through Husky

   - format your code

```shell
yarn format:fix
```

- fix your code

```shell
yarn lint:fix
```

### Husky

- Follows the [_Conventional Committing_](https://www.conventionalcommits.org/en/v1.0.0/) standard

- Feature example: `git commit -m "feat: Closes ISS-1. Ability to login with Apple"`
- Regular / casual example: `git commit -m "chore: ISS-4 Installed dependencies"`
- Husky will prevent commits from going through if it's not compliant

### Plop Component generation

- plop allows you to generate conventional code templates
  to generate a component all you need is to tap this command inside your terminal route project

```shell
yarn generate
```

- This will prompt you with a list of component types from which you can choose. Afterward, you can select a name for your `component`.

### Project structure

```
 └── .dockerignore
    └── .eslintrc.js
    └── .gitignore
    └── 📁.husky
    └── .huskyrc
    └── 📁.jest
        └── test-utils.tsx
    └── .lintstagedrc
    └── 📁.plop
        └── plopfile.js
        └── 📁settings
            └── 📁component
                └── index.js
        └── 📁templates
            └── 📁component
                └── component.tsx.hbs
                └── layoutTemplate.tsx.hbs
                └── pageTemplate.tsx.hbs
                └── test.tsx.hbs
    └── .prettierignore
    └── .prettierrc
    └── 📁.swc
        ├── plugins
    └── 📁.vscode
        └── typescript-react.code-snippets
    └── Dockerfile
    └── License
    └── README.md
    └── SECURITY.md
    └── 📁__tests__
        └── index.test.tsx
    └── jest.config.js
    └── jest.setup.js
    └── next-env.d.ts
    └── next.config.mjs
    └── package.json
    └── postcss.config.js
    └── 📁public
        └── next.svg
        └── vercel.svg
    └── 📁src
        └── 📁app
            └── favicon.ico
            └── globals.css
            └── layout.tsx
            └── page.tsx
        └── 📁components
            └── 📁UI
            └── 📁containers
        └── 📁helpers
        └── 📁hooks
        └── 📁lib
    └── tailwind.config.ts
    └── tsconfig.json
    └── yarn.lock
```

> If you want to deploy your Next.js App on Vercel, you will not need a container in this case. Since Next.js is created and maintained by Vercel, you can do your deployment with ease. However, if you are looking into running your App through AWS, Google Cloud Run or other cloud providers, you will need a container.

> In this boilerplate example a `Dockerfile` contains all the Instructions to deploy and run your nextjs app through another cloud providers
