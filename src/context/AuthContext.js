import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/express_server';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'sign_user':
            return { ...state, errorMessage: '', token: action.payload };
        case 'clear_error':
            return { ...state, errorMessage: '' };
        case 'sign_out':
            return { ...state, token: null, errorMessage: '' };
        default:
            return state;
    }
};

const tryLocalSignIn = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'sign_user', payload: token });
        navigate('TrackList');
    } else {
        navigate('loginFlow');
    }
};

const signUp = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });
        const tk = response.data.token;
        await AsyncStorage.setItem('token', tk);
        dispatch({ type: 'sign_user', payload: tk });
        navigate('TrackList');
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Sign Up failed!' });
    }
};

const signIn = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        const tk = response.data.token;
        await AsyncStorage.setItem('token', tk);
        dispatch({ type: 'sign_user', payload: tk });
        navigate('TrackList');
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Sign In failed!' });
    }
};

const clearError = (dispatch) => () => dispatch({ type: 'clear_error' });

const signOut = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'sign_out' });
    navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signUp, signIn, clearError, tryLocalSignIn, signOut },
    { token: null, errorMessage: '' }
);
