import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  InstantSearch,
  SearchBox,
  Hits,
  RefinementList,
  Pagination,
  Panel,
  Highlight,
} from 'react-instantsearch-dom';

import { SortBy } from '../src';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

const Hit = ({ hit }: { hit: { name: string; description: string } }) => {
  return (
    <article>
      <h1>
        <Highlight attribute="name" hit={hit} />
      </h1>
      <p>
        <Highlight attribute="description" hit={hit} />
      </p>
    </article>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <InstantSearch indexName="instant_search" searchClient={searchClient}>
        <div className="search-panel">
          <div className="search-panel__filters">
            <Panel header="Sort">
              <SortBy
                defaultRefinement="instant_search"
                items={[
                  { value: 'instant_search', label: 'Most relevant' },
                  { value: 'instant_search_price_asc', label: 'Lowest price' },
                  {
                    value: 'instant_search_price_desc',
                    label: 'Highest price',
                  },
                ]}
              />
            </Panel>

            <Panel header="Brand">
              <RefinementList attribute="brand" />
            </Panel>
          </div>

          <div className="search-panel__results">
            <SearchBox
              translations={{
                placeholder: '',
              }}
            />
            <Hits hitComponent={Hit} />

            <div className="pagination">
              <Pagination />
            </div>
          </div>
        </div>
      </InstantSearch>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
