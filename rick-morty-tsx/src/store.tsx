import React from 'react'


interface IState {
    episodes: [],
    favourites: []
}
interface IAction {
    type: string,
    payload: any,
}

const initialState: IState = {
    episodes: [],
    favourites: [],
}

export const Store = React.createContext<IState | any>(initialState)




export function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, episodes: action.payload }
        default:
            return state
    }
}

export function StoreProvider(props: any): JSX.Element {
    // The use reducer hook always requires a state and a dispatcher
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>
}