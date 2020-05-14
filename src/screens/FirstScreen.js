import React, { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

export default FirstScreen = () => {
    const { tryLocalSignIn } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignIn();
    }, []);
    return null;
};
