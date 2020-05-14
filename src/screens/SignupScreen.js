import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Tile } from 'react-native-elements';

import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

function SignupScreen({ navigation }) {
    const { state, signUp, clearError } = useContext(AuthContext);

    return (
        <>
            <Tile
                imageSrc={{
                    uri:
                        'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60',
                }}
                title='Build Routes for your Daily Walks and Runs!'
                featured
                titleStyle={styles.tileTitle}
                containerStyle={styles.tileContainer}
                imageContainerStyle={{ bottom: 0 }}
            />
            <View style={styles.container}>
                <NavigationEvents onWillFocus={clearError} />
                <AuthForm
                    errorMessage={state.errorMessage}
                    navigation={navigation}
                    signUser={signUp}
                    btnTitle='Sign Up'
                />
                <NavLink
                    navMsg='Already a member? Sign In!'
                    navRoute='Signin'
                />
            </View>
        </>
    );
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        padding: 20,
        justifyContent: 'center',
        alignContent: 'center',
        // marginBottom: 50,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: 'white',
    },
    tileTitle: {
        fontWeight: 'bold',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    tileContainer: {
        flex: 1,
    },
});

export default SignupScreen;
