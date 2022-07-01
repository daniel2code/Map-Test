import { View, TouchableOpacity, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";

import Icon from "react-native-vector-icons/Feather";
import Icon1 from "react-native-vector-icons/FontAwesome";

import { GetColor, UseColorContext } from "../../context/provider";
import ListItem from "../../components/list/listItem";
import MapComponent from "../../sevices/mapView";
import { styles } from "./home.styles";

const Index = () => {
  const { dispatch } = UseColorContext();
  const { primaryColor, secondaryColor } = GetColor();

  const handleToggle = () => {
    dispatch({ type: "TOGGLE" });
  };

  const [formValue, setFormValue] = useState("");

  const handleFormValueChange = (event) => {
    setFormValue(event.nativeEvent.text);
  };

  return (
    <MapComponent>
      <View style={styles.container}>
        <View style={styles.navBox}>
          <View
            style={[styles.textInputBox, { backgroundColor: primaryColor }]}
          >
            <View style={[styles.iconBox]}>
              <Icon name="search" color={secondaryColor} size={25} />
            </View>

            <TextInput
              placeholder="Search here"
              placeholderTextColor={secondaryColor}
              label="search"
              formKey="search"
              style={[styles.textInput, { color: secondaryColor }]}
              onChange={handleFormValueChange}
            />
          </View>

          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <View style={styles.profBox}>
              <TouchableOpacity
                onPress={handleToggle}
                style={[styles.setting, { backgroundColor: primaryColor }]}
              >
                <Icon name="toggle-right" size={25} color={secondaryColor} />
              </TouchableOpacity>

              <View style={[styles.setting, { backgroundColor: primaryColor }]}>
                <Icon1 name="location-arrow" size={25} color={secondaryColor} />
              </View>
            </View>
          </View>
        </View>

        {formValue !== "" && (
          <View style={styles.listBox}>
            {[...Array(3)].map((item, i) => {
              return <ListItem key={i} />;
            })}
          </View>
        )}
      </View>
    </MapComponent>
  );
};

export default Index;
