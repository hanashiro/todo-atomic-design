# TODO List

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that follows the [Atomic Design](#atomic-design) together with the [No Run Development](https://www.linkedin.com/pulse/no-run-development-you-dont-need-run-your-project-akira-hanashiro-rrcdf/) methodology.

## Summary

- [TODO List](#todo-list)
  - [Summary](#summary)
  - [Getting Started](#getting-started)
  - [Development](#development)
    - [Docker](#docker)
    - [Files Creation](#files-creation)
    - [Components Development](#components-development)
    - [Code Formatting](#code-formatting)
  - [Tests](#tests)
  - [Build](#build)
  - [Development Tools](#development-tools)
  - [Architecture](#architecture)
    - [Atomic Design](#atomic-design)
      - [Atoms](#atoms)
      - [Molecules](#molecules)
      - [Organisms](#organisms)
      - [Templates](#templates)
      - [Pages](#pages)
      - [Extra](#extra)
    - [Files](#files)
    - [Hooks and Logic Files](#hooks-and-logic-files)
  - [No Run Development](#no-run-development)
  - [Other Tools](#other-tools)
    - [Immer](#immer)
    - [Material-UI](#material-ui)
      - [How can it be faster and more efficient?](#how-can-it-be-faster-and-more-efficient)
    - [Zustand and Zustood](#zustand-and-zustood)

## Getting Started

First, install the dependencies with `npm` or `yarn`:

```bash
npm install
# or
yarn install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

### Docker

You can use [Docker](https://www.docker.com/) if you want.

First, build the image:

```bash
    docker-compose build
```

Then, start the development server:

```bash
    docker-compose up
```

If you want to execute other NPM scripts, you can use this:

```bash
    docker-compose run --rm front [script name]
```

### Files Creation

To create new files, run the following command:

```bash
npm run plop
# or
yarn run plop
```

[Plop.js](https://plopjs.com/) will create the necessary files with the ready and standardized structures for you to start coding in no time. DON'T WASTE YOUR TIME CREATING FILES MANUALLY!

### Components Development

[Storybook](https://storybook.js.org/) is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.

Start Storybook with the following command:

```bash
npm run storybook
# or
yarn run storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

### Code Formatting

To have a good code standardization, use the Prettier plugin in your code editor or IDE.

If you want to garantee that all files are formatted, run the following command:

```bash
npm run prettier
# or
yarn run prettier
```

It will format all files in the `src` folder.

## Tests

All the test files are created automatically with the `plop` command. There are some examples commented in the generated files to help you understand how to write tests for your components. You can uncomment them and use them as a base to write your own tests or delete them and write your own tests from scratch.

When you need some values to be used in the tests, prefer to use the `faker` library to generate random values. It will make the tests more reliable and less fragile, as it saves your time thinking about the values to use.

Start tests with `Jest` with the following command:

```bash
npm test
# or
yarn test
```

It will run all the tests in watch mode.

To see the Test Coverage, run the following command:

```bash
npm run test:coverage
# or
yarn run test:coverage
```

## Build

Run the following command to build your application.

```bash
npm build
# or
yarn build
```

(Optional) If you want to export a static version of the application, run the following command after the build command:

```bash
npm run export
# or
yarn run export
```

The code will be on the `out` folder.
Finally, run the following command to start the Node.js server.
This server will have the code used in production, different from the development server

```bash
npm start
# or
yarn start
```

## Development Tools

To maintain good code structure and standardization, it is recommended to have the following plugins in your code editor or IDE:

-   [Prettier](https://prettier.io/) - Code Formatter
-   [ESLint](https://eslint.org/) - Linter
-   [EditorConfig](https://editorconfig.org/) - Code Style Standardization

## Architecture

### Atomic Design

The [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) is a methodology for creating design systems. It was created by Brad Frost and it is a way to create design systems in a more systematic and organized way.

It is based on the idea that the design of a system can be broken down into five distinct levels:

-   Atoms
-   Molecules
-   Organisms
-   Templates
-   Pages

#### Atoms

Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.

Avoid setting margins, padding, width, and height in atoms. They should remain flexible and reusable.

#### Molecules

Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of the design system.

For example, a form label, input, and button can join together to form a search form molecule.

#### Organisms

Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface. For example, a header, footer, or a card.

#### Templates

Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure.

In other words, templates are the declaration of things like grids, sidebars, and other layout elements.

#### Pages

Pages are specific instances of templates that show what a UI looks like with real representative content in place.

Next.js has a feature called `Layouts`. It is a way to define a layout for a group of pages. It is a good way to maintain the standardization of the pages and to avoid repeating the same code in all pages. You can pass the `Template` here.

#### Extra

Here we are adding categories for components `Atoms`, `Molecules` and `Organisms`. This is a way to organize the components in the project and improve the documentation and understanding of the components.

The categories are based on the purpose of the components:

-   Animation: Components that are responsible for animations.
-   Data Display: Components that are responsible for displaying data, like tables and cards.
-   Feedback: Components that are responsible for giving feedback to the user, like alerts and loaders.
-   Inputs: Components that are responsible for receiving data from the user, like inputs and buttons.
-   Layout: Components that are responsible for the layout of the page.
-   Navigation: Components that are responsible for the navigation of the page, like menus and pagination.
-   Surfaces: Components that are responsible for the surfaces of the page.

To organize the code present on big pages, we define what we call `Partials`. They are basically sections of the page to avoid having a huge file with all the code.

### Files

The files are generated with the `plop` command. They are organized by folder together with the related files. This way is easier to find styles, tests, and other related files.

### Hooks and Logic Files

On Pages, prefer to use the Hooks just to integrate something with React and its components, like a state or a lifecycle method.

If you need to create just a function or a logic, use the Logic files. They are easier to test and to maintain.

If a Hook can be reused in other parts of the application, create a Hook with Plop.js.

If a logic can be reused in other parts of the application (like helpers), create a Service file with Plop.js.

## No Run Development

The [No Run Development](https://www.linkedin.com/pulse/no-run-development-you-dont-need-run-your-project-akira-hanashiro-rrcdf/) is a methodology that I created to improve the development process. It is based on the idea that you don't need to run your project to develop it.

The main idea is to use tools like Storybook and Jest to develop and test the components and logic in isolation. This way, you can develop and test the components and logic without the need to run the project, what is faster, lighter, and more efficient.

In the end, you'll have a project that is already tested and with the components and logic developed and ready to be integrated into the project.

## Other Tools

### Immer

The project uses [Immer](https://immerjs.github.io/immer/) to work with immutable state. It is a tiny package that allows you to work with immutable state in a more convenient way.

Winner of the "Breakthrough of the year" React open source award and "Most impactful contribution" JavaScript open source award in 2019.

With Immer, you can write code that looks like mutable code, but it is actually immutable. It is a good way to maintain the standardization of the project and to have a simpler and more efficient state management.

### Material-UI

The project uses [Material-UI](https://mui.com/material-ui/) as the main UI library. It is a simple and customizable component library to build faster, beautiful, and more accessible React applications.

It is recommended to use Material-UI components and its theme's variables to maintain the standardization of the project and harmonize the look and feel of the application, as the user experience.

The standardization of margins, paddings, colors, and other styles is important to maintain the quality of the application and to make the development process faster and more efficient.

The animations are very important as a feedback to the user.

#### How can it be faster and more efficient?

Ex: to define a margin, you'll have values as `theme.spacing(1)` or `theme.spacing(2)`. These values are multiplied by 8, so you can use `theme.spacing(2)` instead of `16px` and `theme.spacing(1)` instead of `8px`.

If `1` is very small and `3` is very big, the perfect value is `2`. The less options, the less time wasted deciding and less chance of mistakes.

### Zustand and Zustood

The project uses [Zustand](https://github.com/pmndrs/zustand) and [Zustood](https://www.npmjs.com/package/@udecode/zustood) to manage the state of the application.

Zustand aims to provide a simple, fast, and scalable API for state management in React. It is a small, fast, and scalable state-management solution that is based on hooks and the context API.

It is recommended to use Zustand instead of Redux to maintain the standardization of the project and to have a simpler and more efficient state management.

Zustood is a library that provides a set of hooks and utilities to work with Zustand, solving common problems and providing a better developer experience.

Each page has its own Zustood Store to manage its state. You can define Global Stores, but avoid using for small components.
