import { useState, useEffect } from 'react';
import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync,
} from 'expo-location';
import * as Permissions from 'expo-permissions';

export default (shouldTrack, callback) => {
    const [permissionStatus, setPermissionStatus] = useState(null);

    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try {
                const response = await Permissions.askAsync(
                    Permissions.LOCATION
                );
                subscriber = await watchPositionAsync(
                    {
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 1000,
                        distanceInterval: 10,
                    },
                    callback
                );
                setPermissionStatus(response.status);
            } catch (err) {
                console.log('Catch Block Error!');
                setPermissionStatus('denied');
            }
        };
        if (shouldTrack) startWatching();
        else {
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }
        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        };
    }, [shouldTrack, callback]);

    return [permissionStatus];
};
