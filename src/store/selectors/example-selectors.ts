import { createSelector } from 'reselect';
import {
    ExampleDataProps,
    RootStateProps,
} from 'interfaces/storeProps';

export const getExampleDataSelector = createSelector(
    (state: RootStateProps) => state.exampleData,
    (exampleData: ExampleDataProps) => exampleData,
);
