import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomTabButton = ({ children, onPress }) => {
    return (
      <TouchableOpacity
        style={{
          top: -30,
          justifyContent: "center",
          alignItems: "center",
          ...styles.shadow,
        }}
        onPress={onPress}
      >
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: "#ff6347",
          }}
        >
          {children}
        </View>
      </TouchableOpacity>
    );
  };
  

export default CustomTabButton

const styles = StyleSheet.create({})