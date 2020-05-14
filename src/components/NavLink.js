import React from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

function NavLink({ navMsg, navigation, navRoute }) {
    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate(navRoute)}>
                <Text style={styles.switch}>{navMsg}</Text>
            </TouchableOpacity>
        </>
    );
}

NavLink.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    switch: {
        color: 'blue',
        marginTop: 20,
        textAlign: 'center',
    },
});

export default withNavigation(NavLink);
