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

export default class ForgotPassword extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={layout.container}>
        <View style={styles.form}>
          <Image
            source={require("./../../../assets/images/logo/logo-mini.png")}
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Enter Email or Phone Number"
            underlineColorAndroid="transparent"
            style={form._text}
          />
          <TouchableHighlight
            style={btn._1}
            onPressIn={() => {
              this.props.navigation.navigate("OTP");
            }}
          >
            <Text style={btn._1_text}>go</Text>
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
