import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class Main extends Component {
  render() {
    return (
      <View>
        <Text>Dashboard</Text>
        <Button
          title="Signout"
          onPress={() => this.props.navigation.navigate("_Auth")}
        />
      </View>
    );
  }
}
