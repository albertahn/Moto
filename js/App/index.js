/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar
} from "react-native";

import Map from '../components/Map';


const styles = StyleSheet.create({
  mapView: {
    flex: 1,
    padding: 4,
  },
});

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <View style={[styles.mapView, StyleSheet.absoluteFillObject]}>
        <Map />
      </View>
    </Fragment>
  );
};

export default App;
