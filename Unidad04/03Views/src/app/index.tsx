import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, useWindowDimensions } from 'react-native';

export default function Index() {
  // Obtenemos el ancho de la pantalla para ajustar la disposición responsive
  const { width } = useWindowDimensions();
  const isMobile = width < 768; // Definimos el punto de corte (breakpoint) para móvil

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerText}>HEADER</Text>
      </View>

      {/* BODY (sidebar izquierda, contenido principal, sidebar derecha) */}
      <View style={[styles.body, isMobile && styles.bodyMobile]}>
        {/* SIDEBAR IZQUIERDA (Azul) */}
        <View style={[styles.sidebarLeft, isMobile && styles.sidebarMobile]}>
          <Text style={styles.sidebarText}>SIDEBAR LEFT</Text>
        </View>

        {/* CONTENIDO (Gris) */}
        <View style={styles.content}>
          <Text style={styles.contentText}>CONTENT</Text>
        </View>

        {/* SIDEBAR DERECHA (Verde) */}
        <View style={[styles.sidebarRight, isMobile && styles.sidebarMobile]}>
          <Text style={styles.sidebarText}>SIDEBAR RIGHT</Text>
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>FOOTER</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  /* HEADER */
  header: {
    height: 50,
    backgroundColor: '#00FFFF', // Cyan
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#0080FF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  /* CUERPO PRINCIPAL */
  body: {
    flex: 1,
    flexDirection: 'row', // En pantallas grandes los elementos van uno al lado del otro
  },
  bodyMobile: {
    flexDirection: 'column', // En pantallas pequeñas se apilan verticalmente
  },
  /* SIDEBARS Y CONTENIDO */
  sidebarLeft: {
    flex: 1, // Proporción de la barra lateral
    backgroundColor: '#0000FF', // Azul
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 4, // Toma la mayor parte del espacio central
    backgroundColor: '#808080', // Gris
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidebarRight: {
    flex: 1, // Proporción de la barra lateral
    backgroundColor: '#008000', // Verde
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidebarMobile: {
    flex: 0,
    height: 60, // Altura fija si se muestra en modo vertical móvil
  },
  /* TEXTOS DE SIDEBAR Y CONTENIDO */
  sidebarText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  contentText: {
    color: '#6A0DAD', // Morado/Púrpura como en la imagen
    fontWeight: 'bold',
    fontSize: 20,
  },
  /* FOOTER */
  footer: {
    height: 50,
    backgroundColor: '#FFB6C1', // Rosa claro
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#6A0DAD', // Morado/Púrpura
    fontWeight: 'bold',
    fontSize: 18,
  },
});