import { StyleSheet, Text, View } from "react-native";
import React from "react";

import HomeScreen from "../screens/Home";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { GetColor } from "../context/provider/index";
import CustomTabButton from "../components/customTabButton";

import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Ionicons";
import Icon4 from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/Octicons";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const { primaryColor, secondaryColor } = GetColor();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 80,
            backgroundColor: primaryColor,
            position: "absolute",
            elevation: 0,
          },
        }}
      >
        <Tab.Screen
          name="User"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <View>
                <Text>
                  <Icon name="find" color={secondaryColor} size={30} />,
                </Text>
              </View>
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Icon5 name="stack" color={secondaryColor} size={30} />
            ),

            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Location"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Icon2 name="plus" color={"#fff"} size={35} />,

            tabBarShowLabel: false,

            tabBarButton: (props) => <CustomTabButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Sear"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Icon3
                name="ios-notifications-outline"
                color={secondaryColor}
                size={30}
              />
            ),

            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Notification"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Icon4 name="user-o" color={secondaryColor} size={25} />
            ),

            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
