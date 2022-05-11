import { ExampleDataProps } from 'interfaces/storeProps';

export interface BasicActionProps {
    type: string,
}

export interface exampleDataActionProps extends BasicActionProps{
    data?: ExampleDataProps,
}
