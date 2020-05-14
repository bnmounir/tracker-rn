import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

function TrackDetailScreen({ navigation }) {
    const { state } = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const track = state.find((t) => t._id === _id);
    const iniCoords = track.locations[0].coords;
    console.log(iniCoords);

    return (
        <View>
            <MapView
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...iniCoords,
                }}
                style={styles.map}
            >
                <Polyline coordinates={track.locations.map((l) => l.coords)} />
            </MapView>

            <Text style={styles.header}>{track.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        height: 350,
    },
    header: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 20,
    },
});

export default TrackDetailScreen;
