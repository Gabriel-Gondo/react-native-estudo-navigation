import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator 
        tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            labelStyle: { fontSize: 30 },
            showLabel: false
        }}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route?.name === 'TelaA') {
                    iconName = focused ? 'list-outline' : 'list-outline';
                } else if (route?.name === 'TelaB') {
                    iconName = focused ? 'list-outline' : 'list-outline';
                }else if (route?.name === 'TelaC') {
                    iconName = focused ? 'list-outline' : 'list-outline';
                }else{
                    iconName = focused ? 'list-outline' : 'list-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        initialRouteName="TelaB"
    >
        <Tab.Screen name='TelaA' component={TelaA} />
        <Tab.Screen name='TelaB' component={TelaB} />
        <Tab.Screen name='TelaC' component={TelaC} />
    </Tab.Navigator>
)