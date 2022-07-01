import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import React from "react";
import Mapview, { Marker } from "react-native-maps";

import { UseColorContext } from "../context/provider/index";
import { mapDarkStyle, mapStandardStyle } from "./mapStyleData";
import { styles } from "./map.styles";

const Index = ({ children }) => {
  const { isLight } = UseColorContext();

  return (
    <View style={[styles.container]}>
      <Mapview
        style={{ flex: 1 }}
        showsUserLocation
        showsMyLocationButton
        customMapStyle={isLight ? mapStandardStyle : mapDarkStyle}
        // initialRegion={
        //   {
        //       latitude: 43.651070,
        //       longitude: -79.347015,
        //       longitudeDelta: 0.04,
        //       latitudeDelta: 0.09,
        //   }
        // }
      >
        <Marker
          description="Current Location"
          coordinate={{
            latitude: -3.723,
            longitude: -38.515,
          }}
        />
      </Mapview>

      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default Index;
