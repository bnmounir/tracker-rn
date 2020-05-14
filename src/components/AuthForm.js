import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

function AuthForm({ signUser, errorMessage, mainTitle, btnTitle }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Input
                label='Email'
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Input
                label='Password'
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
            />
            {errorMessage.length ? (
                <Text style={styles.error}>{errorMessage}</Text>
            ) : null}

            <Button
                style={styles.btn}
                title={btnTitle}
                onPress={() => signUser({ email, password })}
            />
        </>
    );
}

AuthForm.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    header: {
        marginBottom: 40,
        alignSelf: 'center',
    },
    error: {
        alignSelf: 'center',
        color: 'red',
        margin: 20,
        fontWeight: 'bold',
        fontSize: 14,
    },
    switch: {
        color: 'blue',
        marginTop: 20,
        textAlign: 'center',
    },
    btn: {
        margin: 20,
    },
});

export default AuthForm;
