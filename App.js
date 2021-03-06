import { StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { ProductsScreen } from "./src/features/products/screens/products-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Navigator = Tab.Navigator;
const ScreenComponent = Tab.Screen;

const TAB_ICON = {
  Products: 'tv-outline',
  Favourites: 'heart-outline',
  Sell: 'cash-outline',
  Profile: 'person-outline'
}

const createScreenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ color, size }) => <Ionicons name={iconName} size={size} color={color} />,
  };
};

import {
  useFonts as useTitilliumWebFont,
  TitilliumWeb_400Regular,
} from "@expo-google-fonts/titillium-web";
import {
  useFonts as useRobotMonoFont,
  RobotoMono_500Medium,
} from "@expo-google-fonts/roboto-mono";
import {
  useFonts as useIncosolalaFont,
  Inconsolata_400Regular,
} from "@expo-google-fonts/inconsolata";

export default function App() {
  const [titilliumFontLoaded] = useTitilliumWebFont({
    TitilliumWeb_400Regular,
  });
  const [robotoMonoFontLoaded] = useRobotMonoFont({ RobotoMono_500Medium });
  const [inconsolataFontLoaded] = useIncosolalaFont({ Inconsolata_400Regular });

  if (!titilliumFontLoaded || !robotoMonoFontLoaded || !inconsolataFontLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Navigator
          screenOptions={createScreenOptions}
        >
          <ScreenComponent name="Products" component={ProductsScreen} />
          <ScreenComponent name="Favourites" component={ProductsScreen} />
          <ScreenComponent name="Sell" component={ProductsScreen} />
          <ScreenComponent name="Profile" component={ProductsScreen} />
        </Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
