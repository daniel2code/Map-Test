import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { GetColor } from "../../context/provider";
import { styles } from "./list.style";

const Index = () => {
  const { primaryColor, secondaryColor } = GetColor();

  const img = require("../../../assets/pics.png");

  return (
    <View style={[styles.listBox, { backgroundColor: primaryColor }]}>
      <Image resizeMode="contain" style={styles.cardImg} source={img} />

      <View style={styles.textBox}>
        <Text style={[styles.cardName, { color: secondaryColor }]}>
          Lokai Hamburk
        </Text>
        <Text style={[styles.subCardText, { color: secondaryColor }]}>Pub in Prague</Text>
      </View>
    </View>
  );
};

export default Index;
