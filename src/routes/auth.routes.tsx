import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import {
  Confirmation,
  Splash,
  SignIn,
  FirstStep,
  SecondStep
} from "../screens"

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator headerMode="none" initialRouteName="Splash">
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUpFirstStep" component={FirstStep} />
      <Screen name="SignUpSecondStep" component={SecondStep} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  )
}