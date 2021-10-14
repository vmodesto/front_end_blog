import React, { ReactNode } from 'react';
import Context from './Context';
import useStorage  from '../../utils/useStorage.js'

interface StoreProviderProps {
    children: ReactNode
}

const StoreProvider = ({ children }: StoreProviderProps) => {
    const [token, setToken] = useStorage('token');

    return (
        <Context.Provider
            value={{
                token,
                setToken
            }}
        >
            {children}
        </Context.Provider>
    )

}

export default StoreProvider;