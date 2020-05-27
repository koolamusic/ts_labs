import React from 'react'
import { IState, IAction } from './interfaces'



const initialState: IState = {
    episodes: [],
    favourites: [],
}

export const Store = React.createContext<IState | any>(initialState)




export function reducer(state: IState, action: IAction): IState {
    console.log(action)
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, episodes: action.payload }
        case 'ADD_FAV':
            return { ...state, favourites: [...state.favourites, action.payload] }
        default:
            return state
    }
}

export function StoreProvider(props: any): JSX.Element {
    // The use reducer hook always requires a state and a dispatcher
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>
}