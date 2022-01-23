import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import Root from './navigation/Root';
import {PRIMARY} from './utils/Theme';

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */

export default () => (
  <>
    <StatusBar backgroundColor={PRIMARY} />
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ApplicationProvider>
  </>
);
