// In App.js in a new project
import "react-native-gesture-handler";
import { useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./Screens/SplashScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import HomeScreen from "./Screens/HomeScreen";
import BottamBar from "./Screens/BottamBar";
import Bikes from "./Screens/Bikes";
import Emechanic from "./Screens/Emechanic";
// import CarouselItem from './Screens/Emechanic';
import Basic from "./Screens/SecondScreens/Basic";
import MidRange from "./Screens/SecondScreens/MidRange";
import Booking from "./Screens/SecondScreens/Booking";
import BikeBooking from "./Screens/SecondScreens/Bikes_Booking";
import BikeBooking1 from "./Screens/SecondScreens/Bike_Booking_1";
import ProfileScreen from "./Screens/SecondScreens/ProfileScreen";
import Antifreeze from "./Screens/SecondScreens/CarPart/Antifreeze";
import Battery from "./Screens/SecondScreens/CarPart/Battery";
import Blades from "./Screens/SecondScreens/CarPart/Blades";
import Brakes from "./Screens/SecondScreens/CarPart/Brakes";
import Allignments from "./Screens/SecondScreens/CarPart/Allignments";
import Airfilter from "./Screens/SecondScreens/CarPart/AirFilter";
import OilFilter from "./Screens/SecondScreens/CarPart/Oil_Filter";
import Tyre from "./Screens/SecondScreens/CarPart/Tyre";
import BookingForm from "./Screens/SecondScreens/CarPart/BookingForm";
import ConfirmOrder from "./Screens/SecondScreens/CarPart/ConfirmOrder";
import Tyre_1 from "./Screens/SecondScreens/BikePart/Tyre_1";
import Sprocket from "./Screens/SecondScreens/BikePart/Sprcocket";
import SparkPlug from "./Screens/SecondScreens/BikePart/SparkPlug";
import Caorborator from "./Screens/SecondScreens/BikePart/Carborator";
import MapScreen from "./Screens/MapScreen";
import { Provider } from 'react-redux';

import { initFirebase } from "./Backend/config";
import {store} from './redux/store'
import { populateMap, products } from "./util";
import {CartScreen} from './Screens/CartScreen';


const Stack = createNativeStackNavigator();



function App() {
  useEffect(() => {
    initFirebase();
    populateMap();
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Bikes"
            component={Bikes}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Emechanic"
            component={Emechanic}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Basic"
            component={Basic}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MidRange"
            component={MidRange}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Booking"
            component={Booking}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BikeBooking"
            component={BikeBooking}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BikeBooking1"
            component={BikeBooking1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AntiFreeze"
            component={Antifreeze}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Battery"
            component={Battery}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Blades"
            component={Blades}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Brakes"
            component={Brakes}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Allignment"
            component={Allignments}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Airfilter"
            component={Airfilter}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OilFilter"
            component={OilFilter}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tyre"
            component={Tyre}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BookingForm"
            component={BookingForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ConfirmOrder"
            component={ConfirmOrder}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tyre_1"
            component={Tyre_1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sprocket"
            component={Sprocket}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SparkPlug"
            component={SparkPlug}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Carborator"
            component={Caorborator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CartScreen"
            component={CartScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
