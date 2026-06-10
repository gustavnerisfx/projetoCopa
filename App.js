import { StatusBar } from 'expo-status-bar';
import { BlurView } from 'expo-blur';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'components/HomeScreen';

// icones do react icons
import { TbCards } from "react-icons/tb";
import { PiSoccerBallFill } from "react-icons/pi";
import { GiBrazilFlag } from "react-icons/gi";

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      ScreenOptions={{
        tabBarStyle: { position: 'absolute' },
        tabBarBackground: () => (
          <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
        ),

        
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cards" component={CardsScreen} />
      <Tab.Screen name="Matches" component={MatchesScreen} />
      <Tab.Screen name="Flag" component={FlagScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <View>
      <TabNavigation /> 
    </View>
  );
}
