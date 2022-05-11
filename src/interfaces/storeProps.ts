export interface userProps {
    id: string,
    name: string,
}

export interface ExampleDataProps {
    user: userProps,
}

export interface RootStateProps {
    exampleData: ExampleDataProps,
}
