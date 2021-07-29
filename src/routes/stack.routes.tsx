import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import {
  CarDetails,
  Confirmation,
  Home,
  Scheduling,
  SchedulingDetails,
  Splash
} from "../screens"

const { Navigator, Screen } = createStackNavigator()

export function StackRoutes() {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="Splash" component={Splash} />
    </Navigator>
  )
}