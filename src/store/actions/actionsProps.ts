import { exampleDataProps } from 'store/storeProps';

export interface BasicActionProps {
    type: string,
}

export interface exampleDataActionProps extends BasicActionProps{
    data?: exampleDataProps,
}
