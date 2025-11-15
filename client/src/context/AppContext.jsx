import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [shows, setShows] = useState([]);
    const [favoriteMovies, setFavoriteMoives] = useState([]);

    const { user } = useUser();

    const fetchIsAdmin = async()=>{
        try {
            const { data } = await axios.get('/api/admin/is-admin', { headers: {
                Authorization: `Bearer`
            }})
        } catch (error) {
            console.error(error);
        }
    }

    const value = {axios};

    return (
        <AppContext.Provider value = {value}> 
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)