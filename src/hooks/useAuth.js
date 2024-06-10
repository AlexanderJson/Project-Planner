// Fetches the logged in users data

import {  onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../assets/firebaseConfig";

const useAuth = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        }); 
        
        return () => unsubscribe();
    }, []);

    return user;
};

export default useAuth;