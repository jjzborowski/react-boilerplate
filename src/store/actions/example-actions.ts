import store from 'store/store';
import { SET_EXAMPLE_DATA } from 'store/actionTypes';
import { ExampleDataProps } from 'interfaces/storeProps';

export const setExampleDataAction = (data: ExampleDataProps): void => {
    store.dispatch({
        type: SET_EXAMPLE_DATA,
        data,
    });
};
