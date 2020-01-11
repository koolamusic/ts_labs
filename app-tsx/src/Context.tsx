import React, {createContext, useContext, PropsWithChildren} from 'react';

const { Provider, Consumer } = createContext('');


export const Parent : React.FC = (props : PropsWithChildren<{}>) => {
    const text: string = 'random text';
  return  <Provider value={text}>{props.children}</Provider>
}

export const Child : React.FunctionComponent = () => {
    // const hook = React.useContext()
return <Consumer>{(value : string) => <div>{value}</div>}</Consumer>
}