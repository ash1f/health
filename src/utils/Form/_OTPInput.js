import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default class _OTPIn extends Component {
  render() {
    return (
      <View style={styles.otpContainer}>
        <TextInput style={styles.otp} underlineColorAndroid="transparent" />
        <TextInput style={styles.otp} underlineColorAndroid="transparent" />
        <TextInput style={styles.otp} underlineColorAndroid="transparent" />
        <TextInput style={styles.otp} underlineColorAndroid="transparent" />
        <TextInput style={styles.otp} underlineColorAndroid="transparent" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between"
  },
  otp: {
    padding: 10,
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "rgb(189,195,199)"
  }
});
