import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

export default {
  title: "Button"
};

export const Default = () => (
  <View style={{ padding: 16, justifyContent: "space-between", flex: 1 }}>
    <Button mode="text">Press me</Button>
    <Button mode="outlined">Press me</Button>
    <Button mode="contained">Press me</Button>
  </View>
);

Default.storyName = "Default";
