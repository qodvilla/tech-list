import { StyleSheet} from "react-native";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import {ProductsScreen} from "./src/features/products/screens/products-screen";

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
      <ProductsScreen />
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
