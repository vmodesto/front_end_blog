import { createContext } from "react";

const StoreContext = createContext({
    token: null,
    setToken: (token: String) => {}
})

export default StoreContext;