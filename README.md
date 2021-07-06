[![MIT](https://img.shields.io/npm/l/@algolia/react-instantsearch-widget-sortby-ul)](./LICENSE.md) [![NPM version](http://img.shields.io/npm/v/@algolia/react-instantsearch-widget-sortby-ul.svg)](https://npmjs.org/package/@algolia/instantsearch-widget-sortby-ul)

## Demo

[Demo](https://codesandbox.io/s/github/algolia/react-instantsearch-widget-sortby-ul?file=/example/index.tsx) on CodeSandbox.

## Install

```bash
npm install @algolia/react-instantsearch-widget-sortby-ul
# or
yarn add @algolia/react-instantsearch-widget-sortby-ul
```

## Widget

### Usage

```jsx
import instantsearch from 'instantsearch.js';
import algoliasearch from 'algoliasearch/lite';
import { SortBy } from '@algolia/react-instantsearch-widget-sortby-ul';

const searchClient = algoliasearch('appId', 'apiKey');

const App = () => (
  <InstantSearch searchClient={searchClient} indexName="indexName">
    <SortBy />
  </InstantSearch>
);
```

## Connector

### Usage

```jsx
import { connectSortBy } from '@algolia/react-instantsearch-widget-sortby-ul';

// 1. Create a render function
const RenderSortBy = (renderOptions, isFirstRender) => {
  // Rendering logic
};

// 2. Create the custom widget
const CustomSortBy = connectSortBy(RenderSortBy);

// 3. Instantiate
const App = () => (
  <InstantSearch searchClient={searchClient} indexName="indexName">
    <CustomSortBy />
  </InstantSearch>
);
```

## Test

```bash
npm test
# or
yarn test
```

## Build

```bash
npm run build
# or
yarn build
```

## Release

```bash
npm run release
# or
yarn release
```

### First Release

```bash
npm run release -- --first-release
# or
yarn release --first-release
```

This will tag a release without bumping the version.

When you are ready, push the git tag and run `npm publish`.

If you want to publish it as a public scoped package, run `npm publish --access public` the first time.

[To know more about `standard-version`, read this →](https://github.com/conventional-changelog/standard-version#cli-usage)
