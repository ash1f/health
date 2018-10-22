import { TabNavigator } from "react-navigation";
import LoginForm from "./components/Login/LoginForm";
import Register from "./components/Register/Register";

export const loginnavigator = TabNavigator({
  newUser: { screen: Register },
  User: { screen: LoginForm }
});
