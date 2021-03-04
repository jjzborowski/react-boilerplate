import { createSelector } from 'reselect';
import {
    ExampleDataProps,
    RootStateProps,
} from 'store/storeProps';

export const getExampleDataSelector = createSelector(
    (state: RootStateProps) => state.exampleData,
    (exampleData: ExampleDataProps) => exampleData,
);
