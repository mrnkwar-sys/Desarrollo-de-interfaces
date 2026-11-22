import { Image, Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { TarjetaProducto } from "./components/TarjetaProducto";

export default function Index() {

  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <View style={styles.screenContainer}>

      <View style={styles.header}>
        <View style={styles.cartContainer}>
          <Ionicons name="cart" size={30} color="#dd6f93"></Ionicons>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartCount}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.textTitle}>Nuestros Productos</Text>
      <View style={styles.productsContainer}>
        <TarjetaProducto 
          name={"Bolso Rilakkuma"} 
          price={20.99} 
          image={require('../../assets/images/image-removebg-preview.png')} 
          onAddToCart={handleAddToCart}
        />
        <TarjetaProducto 
          name={"Peluche Rilakkuma"} 
          price={32.99} 
          image={require('../../assets/images/mintRilakkuma.png')} 
          onAddToCart={handleAddToCart} 
        />
        <TarjetaProducto 
          name={"Pudding"} 
          price={120.99} 
          image={require('../../assets/images/pudding.png')} 
          onAddToCart={handleAddToCart}
        />
        <TarjetaProducto 
          name={"Smiski reflexivo"} 
          price={16.99} 
          image={require('../../assets/images/◞ ྀི◟ ͜ ✎ ❤︎ igαridoll(8).png')} 
          onAddToCart={handleAddToCart} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap', //Permite que las tarjetas bajen a otra fila si no caben
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff'
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 28,
    padding: 10
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    width: '100%',
    paddingHorizontal: 25,
    paddingBottom: 10,
    alignItems: 'flex-end',
    backgroundColor: '#e1eef0',
    paddingTop: 20
  },
  cartContainer: {
    position: 'relative',
    padding: 5,
  },
  badge: {
    position: 'absolute',
    right: -2,
    top: -2,
    backgroundColor: '#dd6f93', // Mismo color rosa que tus botones
    borderRadius: 12,
    minWidth: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  }
});
