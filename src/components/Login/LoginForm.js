import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableHighlight,
  Button
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.loginInputContainer}>
        <TextInput
          placeholder="Enter Email or Phone Number"
          style={styles.input}
          underlineColorAndroid="transparent"
          returnKeyType="next"
        />
        <TextInput
          placeholder="Enter Password"
          style={styles.input}
          secureTextEntry
          returnKeyType="go"
          underlineColorAndroid="transparent"
        />
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate("Dashboard")}
          style={styles.loginButton}
        >
          <Text style={styles.loginButtonText}>
            login <Ionicons name="md-arrow-forward" color="white" size={25} />
          </Text>
        </TouchableHighlight>
        <Text
          onPress={() => {
            this.props.navigation.navigate("ForgotPassword");
          }}
          style={styles.link}
        >
          Forgot ?
        </Text>
      </View>
    );
  }
}

export default withNavigation(LoginForm);

const styles = StyleSheet.create({
  loginInputContainer: {
    paddingHorizontal: 30,
    justifyContent: "center"
  },
  input: {
    paddingHorizontal: 10,
    height: 60,
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "rgb(189,195,199)"
  },
  loginButton: {
    paddingVertical: 5,
    borderRadius: 50,
    backgroundColor: "rgb(236, 27, 134)"
    //marginTop: 25
    //marginBottom: 300
  },
  loginButtonText: {
    fontSize: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: "rgb(255, 255, 255)",
    textAlign: "center"
  },
  link: {
    textAlign: "right",
    fontSize: 18,
    color: "#34495E",
    paddingVertical: 10
  }
});
