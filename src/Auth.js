import { createStackNavigator, createSwitchNavigator } from "react-navigation";

import Main from "./Main";

import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import ForgotPassword from "./components/authUtils/ForgotPassword";
import OTP from "./components/authUtils/OTP";

const AppStack = createStackNavigator({
  Dashboard: Main
});

const AuthStack = createSwitchNavigator(
  {
    Login: createStackNavigator(
      {
        Login: Login,
        ForgotPassword: createSwitchNavigator(
          {
            SendAuth: ForgotPassword,
            OTP: OTP
          },
          {
            initialRouteName: "SendAuth"
          }
        )
      },
      {
        headerMode: "none"
      }
    ),
    Register: Register
  },
  {
    initialRouteName: "Login"
  }
);

const beforeLogin = createStackNavigator(
  {
    Login: Login,
    ForgotPassword: ForgotPassword
  },
  {
    headerMode: "none"
  }
);

//Authenticate to Main page
export const Authenticate = (loggedIn = false) => {
  return createSwitchNavigator(
    {
      _App: AppStack,
      _Auth: AuthStack
    },
    {
      initialRouteName: loggedIn ? "_App" : "_Auth"
    }
  );
};

// const loginPrevGSFA = AuthStack.router.getStateForAction;
// AuthStack.router = {
//   ...AuthStack.router,
//   getStateForAction(action, state) {
//     if (state && action.type === "replacePrevScreen") {
//       const routes = state.routes.slice(0, state.routes.length - 1);
//       routes.push(action);
//       return {
//         ...states,
//         routes,
//         index: routes.length - 1
//       };
//     }
//     return loginPrevGSFA(action, state);
//   }
// };
