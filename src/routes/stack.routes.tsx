import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import {
  CarDetails,
  Confirmation,
  Home,
  Scheduling,
  SchedulingDetails,
  Splash,
  MyCars
} from "../screens"

const { Navigator, Screen } = createStackNavigator()

export function StackRoutes() {
  return (
    <Navigator headerMode="none" initialRouteName="Splash">
      <Screen name="Splash" component={Splash} />
      <Screen name="Home" component={Home} options={{gestureEnabled: false}}/>
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  )
}