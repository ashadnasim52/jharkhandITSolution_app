import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../tabs/Home';
import {Icon} from '@ui-kitten/components';
import Contact from '../tabs/Contact';
import Setting from '../tabs/Setting';
import About from '../tabs/About';
import {ACCENT, PRIMARY} from '../utils/Theme';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderTopColor: 'transparent',
          height: 50,
          backgroundColor: '#000000',
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              style={{
                height: 30,
                width: 30,
              }}
              name="home-outline"
              fill={focused ? PRIMARY : ACCENT}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              style={{
                height: 30,
                width: 30,
              }}
              name="email-outline"
              fill={focused ? PRIMARY : ACCENT}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              style={{
                height: 30,
                width: 30,
              }}
              name="settings-2-outline"
              fill={focused ? PRIMARY : ACCENT}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              style={{
                height: 30,
                width: 30,
              }}
              name="person-outline"
              fill={focused ? PRIMARY : ACCENT}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
