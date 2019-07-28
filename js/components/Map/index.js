/* @flow */

import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native';

type Props = {
  onPress: () => void,
};

const Map = (props: Props) => (
  <MapView
  style={StyleSheet.absoluteFillObject}
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
/>
);

export default Map;
