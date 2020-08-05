import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, HeroesParamList, TabTwoParamList } from '../types';
import HeroesScreen from '../screens/HeroesScreen';
import MyHeroesScreen from '../screens/MyHeroesScreen';
import HeroDetailsScreen from '../screens/HeroDetailsScreen';
import RecruitScreen from '../screens/RecruitScreen';

const BottomTab = createMaterialBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Heroes"
      activeColor="#0f0">
      <BottomTab.Screen
        name="Heroes"
        component={HeroesNavigator}        
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,          
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HeroesStack = createStackNavigator<HeroesParamList>();

function HeroesNavigator() {
  return (
    <HeroesStack.Navigator>
      <HeroesStack.Screen
        name="Heroes"
        component={HeroesScreen}
        options={{ headerTitle: 'Heroes', headerLeft: () => null }}
      />
      <HeroesStack.Screen
        name="MyHeroes"
        component={MyHeroesScreen}
        options={{ headerTitle: 'My Heroes' }}
      />
      <HeroesStack.Screen
        name="HeroDetails"
        component={HeroDetailsScreen}
        options={({ route } : any) => ({ title: route.params?.title ?? 'title not found'})}
      />
      <HeroesStack.Screen
        name="Recruit"
        component={RecruitScreen}
        options={{ headerTitle: 'Recruit' }}
      />
    </HeroesStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator 
      screenOptions={{
        headerLeft: () => null,
      }}
    >
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'World' }}
      />
    </TabTwoStack.Navigator>
  );
}
