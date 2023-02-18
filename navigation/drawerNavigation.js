import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../screens/profile";
import React from "react";
import StackNavigator from "./stackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="inicio" component={StackNavigator} />
      <Drawer.Screen name="profile" component={Profile} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
