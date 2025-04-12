// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

// Import các màn hình trước đó
import LoginScreen from './screens/LoginScreen';
import SelectLocationScreen from './screens/SelectLocationScreen';
import SignUpScreen from './screens/SignUpScreen';

// Import các màn hình mới
import HomeScreen from './screens/HomeScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ExploreScreen from './screens/ExploreScreen';
import BeveragesScreen from './screens/BeveragesScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator cho các màn hình chính
const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Home') iconName = 'home';
        else if (route.name === 'Explore') iconName = 'search';
        else if (route.name === 'Cart') iconName = 'shopping-cart';
        else if (route.name === 'Favourites') iconName = 'heart';
        else if (route.name === 'Account') iconName = 'user';
        return <Feather name={iconName} size={size} color={color} />;
      },
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Explore" component={ExploreScreen} />
    <Tab.Screen name="Cart" component={() => null} />
    <Tab.Screen name="Favourites" component={() => null} />
    <Tab.Screen name="Account" component={() => null} />
  </Tab.Navigator>
);

// Stack Navigator chính
const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      {/* Các màn hình trước đó */}
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SelectLocation" component={SelectLocationScreen} options={{ headerShown: false }} />

      {/* Các màn hình chính (sau khi đăng nhập và chọn vị trí) */}
      <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Beverages" component={BeveragesScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;