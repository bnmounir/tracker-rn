// import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { withNavigation, SafeAreaView } from 'react-navigation';
import { Context as LocationContext } from '../context/LocationContext';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

function TrackCreateScreen({ navigation: { isFocused } }) {
    const {
        state: { isRecording },
        addLocation,
    } = useContext(LocationContext);
    const callback = useCallback(
        (location) => addLocation(location, isRecording),
        [isRecording]
    );
    const [permissionStatus] = useLocation(
        isFocused() || isRecording,
        callback
    );

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Map />
            {permissionStatus === 'denied' ? (
                <Text>please enable location</Text>
            ) : null}
            <TrackForm />
        </SafeAreaView>
    );
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name='plus' size={24} />,
};

const styles = StyleSheet.create({
    header: {
        fontSize: 36,
        fontWeight: 'bold',
    },
});

export default withNavigation(TrackCreateScreen);
