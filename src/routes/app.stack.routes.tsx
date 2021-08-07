import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import {
  CarDetails,
  Home,
  Scheduling,
  SchedulingDetails,
  MyCars,
} from "../screens"

const { Navigator, Screen } = createStackNavigator()

export function AppStackRoutes() {
  return (
    <Navigator headerMode="none" initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  )
}