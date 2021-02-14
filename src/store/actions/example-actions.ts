import store from 'store/store';
import { SET_EXAMPLE_DATA } from 'store/actionTypes';
import { exampleDataProps } from 'store/storeProps';

export const setExampleDataAction = (data: exampleDataProps): void => {
    store.dispatch({
        type: SET_EXAMPLE_DATA,
        data,
    });
};
