import { createSelector } from 'reselect';
import {
    exampleDataProps,
    rootStateProps,
} from 'store/storeProps';

export const getExampleDataSelector = createSelector(
    (state: rootStateProps) => state.exampleData,
    (exampleData: exampleDataProps) => exampleData,
);
