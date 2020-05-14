import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { View } from 'react-native';
import { Context as LocationContext } from '../context/LocationContext';

import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const {
        state: { locations, name, isRecording },
        startRecording,
        stopRecording,
        changeName,
    } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();

    return (
        <View style={{ margin: 15, justifyContent: 'space-around' }}>
            <Input
                value={name}
                onChangeText={changeName}
                placeholder='Track Name'
            />
            {isRecording ? (
                <Button
                    onPress={stopRecording}
                    title='Stop Recording'
                    buttonStyle={{ backgroundColor: 'red' }}
                />
            ) : (
                <Button
                    onPress={startRecording}
                    title='Start Recording'
                    buttonStyle={{ margin: 10 }}
                />
            )}
            {!isRecording && locations.length ? (
                <Button
                    onPress={saveTrack}
                    title='Save Recording'
                    buttonStyle={{ margin: 10 }}
                    type='outline'
                />
            ) : null}
        </View>
    );
};

export default TrackForm;
