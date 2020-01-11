import React, { createContext, useContext } from 'react';

const Store = createContext('');


export const Parent: React.FC<any> = (props: React.ProviderProps<string>) => {
    const text: string = 'random text';
    return <Store.Provider value={text}>{props.children}</Store.Provider>
}

export const Child: React.FunctionComponent = () => {
    const hook = useContext(Store)
    return (
        <div>{hook}</div>
    )
}