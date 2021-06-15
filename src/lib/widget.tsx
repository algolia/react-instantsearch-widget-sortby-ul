import { connectSortBy } from 'react-instantsearch-dom';

import { SortByComponent } from './component';

import type { SortByItem } from './types';
import type { ElementType } from 'react';

type WidgetParams = {
  defaultRefinement: string;
  items: SortByItem[];
};

export const SortBy = connectSortBy(
  SortByComponent
) as ElementType<WidgetParams>;
