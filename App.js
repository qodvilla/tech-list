import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Basic } from "./src/features/products/components/product-info-card.component";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Basic />
      <StatusBar style="auto" />
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
