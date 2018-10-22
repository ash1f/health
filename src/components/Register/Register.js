import React, { Component } from "react";
import { StyleSheet, View, KeyboardAvoidViewing, Image } from "react-native";

import RegisterForm from "./RegisterForm";

export default class Register extends Component {
  render() {
    return (
      <View style={styles.login}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../assets/images/logo/logo.png")}
          />
        </View>
        <View style={styles.formContainer}>
          <RegisterForm />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  logo: {
    width: 125,
    height: 125
  },
  formContainer: {
    flex: 1
  }
});
