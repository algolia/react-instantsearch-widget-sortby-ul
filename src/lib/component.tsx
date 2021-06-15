import React from 'react';

import type { SortByItem } from './types';

type Props = {
  items: SortByItem[];
  currentRefinement: string;
  refine: (indexName: string) => void;
};

export const SortByComponent = ({
  items,
  currentRefinement,
  refine,
}: Props) => {
  return (
    <div className="ais-Menu ais-CustomSortBy">
      <ul className="ais-Menu-list">
        {items.map((item) => (
          <li
            key={item.value}
            className={`ais-Menu-item ${
              item.value === currentRefinement ? 'ais-Menu-item--selected' : ''
            }`}
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="#"
              className="ais-Menu-link"
              onClick={(event) => {
                event.preventDefault();
                refine(item.value);
              }}
            >
              <span className="ais-Menu-label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
