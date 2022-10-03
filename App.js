import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Restaurant, OrderDelivery, MyOrders } from "./screens";
import Tabs from "./navigation/tabs";

import {Provider, useSelector, useDispatch} from 'react-redux';

//import store from './screens/store';
//import {editCart} from './screens/reducer'

//import { useStateValue } from "./screens/StateProvidertemp";

//import reducer, { initialState } from "./screens/reducertemp";
const Stack = createStackNavigator();

const App = () => {
  //const [{ cart, total }, dispatch] = useStateValue();
  return (
    //<Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Home"}
        >
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
          <Stack.Screen name="MyOrders" component={MyOrders} />
        </Stack.Navigator>
      </NavigationContainer>
    //</Provider>
  );
};

export default App;
