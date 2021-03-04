import React, { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { setExampleDataAction } from 'store/actions';
import { getExampleDataSelector } from 'store/selectors';

const AppOutline: React.FC = () => {
    const exampleData = useSelector(getExampleDataSelector);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setExampleDataAction({
            ...exampleData,
            user: {
                ...exampleData.user,
                name: event.target.value,
            },
        });
    };

    return (
        <>
            <input
                type="text"
                onChange={ onChangeHandler }
            />
            <div>Hello { exampleData.user.name }!</div>
        </>
    );
};

export default AppOutline;
