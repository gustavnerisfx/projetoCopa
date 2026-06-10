import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const gay = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <View>
      <DrawerNavigation />
    </View>
  );
}
