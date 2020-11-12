import * as React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Splash from '../views/screens/Splash';
import Home from '../views/screens/Home';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const MainApp = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       tabBarOptions={{showLabel: false, style: {height: 60}}}>
//       <Tab.Screen
//         name="Home"
//         options={{
//           tabBarIcon: ({focused, size}) => (
//             <Image
//               source={
//                 focused
//                   ? require('./src/assets/icons/ic_home.png')
//                   : require('./src/assets/icons/ic_home_normal.png')
//               }
//               style={{
//                 width: 36,
//                 height: 36,
//               }}
//             />
//           ),
//         }}
//         component={HomeScreen}
//       />
//       <Tab.Screen
//         name="Order"
//         options={{
//           tabBarIcon: ({focused, size}) => (
//             <Image
//               source={
//                 focused
//                   ? require('./src/assets/icons/ic_order.png')
//                   : require('./src/assets/icons/ic_order_normal.png')
//               }
//               style={{
//                 width: 36,
//                 height: 36,
//               }}
//             />
//           ),
//         }}
//         component={OrderScreen}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: ({focused, size}) => (
//             <Image
//               source={
//                 focused
//                   ? require('./src/assets/icons/ic_profile.png')
//                   : require('./src/assets/icons/ic_profile_normal.png')
//               }
//               style={{
//                 width: 36,
//                 height: 36,
//               }}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
