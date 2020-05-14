import React, { useContext } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

function AccountScreen() {
    const { signOut } = useContext(AuthContext);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.header}>Account Screen</Text>
                <Button onPress={signOut} title='Sign Out' />
            </View>
        </SafeAreaView>
    );
}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome size={24} name='gear' />,
};

const styles = StyleSheet.create({
    header: {
        fontSize: 36,
        fontWeight: 'bold',
        margin: 30,
    },
    container: {
        padding: 20,
        justifyContent: 'center',
        alignContent: 'center',
        paddingBottom: 200,
    },
});

export default AccountScreen;
