import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  View,
  TextInput,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight
} from "react-native";

import { form, btn, layout } from "./../../utils/Stylesheet/Common";
import _OTPInput from "./../../utils/Form/_OTPInput";

export default class OTP extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={layout.container}>
        <View style={styles.form}>
          <Image
            source={require("./../../../assets/images/logo/logo-mini.png")}
          />
        </View>
        <View style={styles.formContainer}>
          <Text>Enter Received One Time Pin:</Text>
          <_OTPInput />
          <TouchableHighlight style={btn._1}>
            <Text style={btn._1_text}>Submit</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flexGrow: 2,
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
  form: {
    flex: 1
  }
});
