import React, { useContext } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import { Context as TrackContext } from '../context/TrackContext';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';

function TrackListScreen({ navigation }) {
    const { state, fetchTracks } = useContext(TrackContext);

    return (
        <View>
            <NavigationEvents onWillFocus={fetchTracks} />

            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('TrackDetail', {
                                _id: item._id,
                            })
                        }
                        style={{ marginVertical: 5 }}
                    >
                        <ListItem chevron title={item.name} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

TrackListScreen.navigationOptions = {
    title: 'Tracks',
};

const styles = StyleSheet.create({
    header: {
        fontSize: 36,
        fontWeight: 'bold',
    },
});

export default TrackListScreen;
