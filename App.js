import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Navigations from "./src/navigation/navigation";
import ColorProvider from "./src/context/provider/index";

export default function App() {
  return (
    <ColorProvider>
      <SafeAreaView style={styles.container}>
        <Navigations />
      </SafeAreaView>
    </ColorProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    position: "relative",
  },
});
