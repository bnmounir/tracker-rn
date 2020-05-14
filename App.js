import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/screens/AccountScreen';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import FirstScreen from './src/screens/FirstScreen';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { setNavigator } from './src/navigationRef';
import { FontAwesome } from '@expo/vector-icons';

const switchNavigator = createSwitchNavigator({
    Loading: FirstScreen,
    loginFlow: createStackNavigator({
        Signin: SigninScreen,
        Signup: SignupScreen,
    }),
    mainFlow: createBottomTabNavigator({
        trackListFlow: createStackNavigator(
            {
                TrackList: TrackListScreen,
                TrackDetail: TrackDetailScreen,
            },
            {
                navigationOptions: {
                    title: 'Tracks',
                    tabBarIcon: <FontAwesome name='th-list' size={24} />,
                },
            }
        ),
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen,
    }),
});

const App = createAppContainer(switchNavigator);

export default () => (
    <TrackProvider>
        <LocationProvider>
            <AuthProvider>
                <App ref={(navigator) => setNavigator(navigator)} />
            </AuthProvider>
        </LocationProvider>
    </TrackProvider>
);
