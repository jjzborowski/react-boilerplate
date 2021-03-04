import rfdc from 'rfdc';
import { exampleDataTemplate } from 'constants/templates';
import { exampleDataActionProps } from 'store/actions/actionsProps';
import { SET_EXAMPLE_DATA } from 'store/actionTypes';
import { ExampleDataProps } from 'store/storeProps';

const deepClone = rfdc();

const INITIAL_STATE: ExampleDataProps = deepClone(exampleDataTemplate);

const exampleReducer = (state = INITIAL_STATE, action: exampleDataActionProps): ExampleDataProps => {
    switch (action.type) {
        case SET_EXAMPLE_DATA: {
            return { ...action.data };
        }
        default:
            return state;
    }
};

export default exampleReducer;
