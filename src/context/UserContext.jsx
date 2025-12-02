import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    
    const login = (username, password) => {
        // Aquí iría la lógica real de autenticación
        setUser({ username, password });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
    return useContext(UserContext);
}