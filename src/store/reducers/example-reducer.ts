import { exampleDataTemplate } from 'constants/templates';
import rfdc from 'rfdc';
import { exampleDataActionProps } from 'store/actions/actionsProps';
import { SET_EXAMPLE_DATA } from 'store/actionTypes';

const deepClone = rfdc();

const INITIAL_STATE = deepClone(exampleDataTemplate);

const exampleReducer = (state = INITIAL_STATE, action: exampleDataActionProps) => {
    switch (action.type) {
        case SET_EXAMPLE_DATA: {
            return { ...action.data };
        }
        default:
            return state;
    }
};

export default exampleReducer;
