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
- [x] CI/CD github workflow
- [x] Minimal config sitemap generation

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
.
├── README.md                   Project documentation
├── LICENSE                    # Licensing information
├── public/                    # Public assets (favicon, etc.)
│   ├── favicon.ico
│   └── ...
├── src/                       # Application source code
│   ├── app/                    # Application core components
│   │   ├── globals.css          # Global CSS styles
│   │   ├── layout.tsx           # Main application layout
│   │   └── page.tsx            # Default application page
│   ├── components/             # Reusable UI components
│   │   ├── UI/                 # UI-specific components
│   │   └── features/          # Features components for specific functionalities and managing application logic
│   ├── helpers/                 # Helper functions for logic and utilities
│   ├── hooks/                   # React hooks for state management
│   ├── lib/                    # Shared application libraries
│   ├── next-env.d.ts            # TypeScript declarations for environment variables
│   ├── next.config.mjs          # Next.js configuration file
│   ├── styles/                  # Project-wide styles (optional)
│   │   └── globals.css          # Global styles for the project
│   └── utils/                   # Utility functions
├── .dockerignore               # Files ignored during Docker image creation
├── .eslintrc.js                # ESLint configuration for code linting
├── .gitignore                 # Files ignored by Git version control
├── .husky/                    # Husky configuration for pre-commit hooks
├── .huskyrc                   # Husky configuration file
├── .jest/                      # Jest configuration for testing
│   └── test-utils.tsx           # Utility functions for testing
├── .lintstagedrc               # Configuration for staged file linting
├── .plop/                      # Plop configuration for code generation
│   ├── plopfile.js             # Plop configuration file
│   └── settings/               # Plop settings for component generation
│       ├── component/
│       │   └── index.js         # Plop component generation settings
│       └── templates/
│           ├── component/
│           │   ├── component.tsx.hbs  # Template for component generation
│           │   ├── layoutTemplate.tsx.hbs  # Template for layout generation
│           │   └── pageTemplate.tsx.hbs   # Template for page generation
│           │   └── test.tsx.hbs        # Template for test file generation
├── .prettierignore             # Files ignored by Prettier code formatter
├── .prettierrc                 # Prettier configuration file
├── .swc/                       # Configuration for SWC (optional)
│   └── plugins/                # SWC plugins (for compilation)
├── .vscode/                    # VS Code configuration (optional)
│   └── typescript-react.code-snippets  # VS Code code snippets for React development
├── Dockerfile                  # Dockerfile for containerized deployment
├── jest.config.js               # Jest configuration for unit testing
├── jest.setup.js                # Setup file for Jest testing
├── package.json                # Project dependencies and configuration
├── postcss.config.js            # PostCSS configuration for styling (optional)
└── tailwind.config.ts            # Tailwind CSS configuration file
└── tsconfig.json                # TypeScript compiler configuration
└── yarn.lock                   # Lock file for dependencies installed with Yarn
```
