import { Image, Text, View, StyleSheet } from "react-native";
import { TarjetaProducto } from "./components/TarjetaProducto";

export default function Index() {
  return (
    <View style={styles.container}>
      <TarjetaProducto name={""} price={0} image={""} onAddToCart={function (): void {
        throw new Error("Function not implemented.");
      } } ></TarjetaProducto>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff'
  },
});
