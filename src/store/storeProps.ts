export interface userProps {
    id: string,
    name: string,
}

export interface exampleDataProps {
    user: userProps,
}

export interface rootStateProps {
    exampleData: exampleDataProps,
}
