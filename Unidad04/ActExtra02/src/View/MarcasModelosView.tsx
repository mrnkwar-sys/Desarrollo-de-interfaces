import { useEffect, useState } from 'react';
import {
  Animated,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Marca } from '../Models/Entities/Marca';
import { ModeloCoche } from '../Models/Entities/ModeloCoche';
import { MarcasModelosVM } from '../ViewModels/MarcasModelosVM';

function crearViewModelInicial(): MarcasModelosVM {
  return new MarcasModelosVM();
}

export function MarcasModelosView() {
  const { width } = useWindowDimensions();
  const [viewModel, setViewModel] = useState(crearViewModelInicial);
  const [entrada] = useState(() => new Animated.Value(0));
  const esEscritorio = width >= 820;
  const marcaSeleccionada = viewModel.marcaSeleccionada;
  const modeloSeleccionado = viewModel.modeloSeleccionado;

  useEffect(() => {
    entrada.setValue(0);
    const animacion = Animated.timing(entrada, {
      toValue: 1,
      duration: 260,
      useNativeDriver: true,
    });
    animacion.start();
    return () => animacion.stop();
  }, [entrada, marcaSeleccionada?.idMarca, modeloSeleccionado?.idModelo]);

  const seleccionarMarca = (marca: Marca) => {
    const siguienteViewModel = new MarcasModelosVM();
    siguienteViewModel.marcaSeleccionada = marca;
    setViewModel(siguienteViewModel);
  };

  const seleccionarModelo = (modelo: ModeloCoche) => {
    const siguienteViewModel = new MarcasModelosVM();
    siguienteViewModel.marcaSeleccionada = marcaSeleccionada;
    siguienteViewModel.modeloSeleccionado = modelo;
    setViewModel(siguienteViewModel);
  };

  const renderMarca = (marca: Marca) => {
    const seleccionada = marcaSeleccionada?.idMarca === marca.idMarca;
    return (
      <Pressable
        key={marca.idMarca}
        accessibilityRole="button"
        accessibilityState={{ selected: seleccionada }}
        onPress={() => seleccionarMarca(marca)}
        style={({ pressed }) => [
          styles.brandTab,
          seleccionada && styles.brandTabSelected,
          pressed && styles.pressed,
        ]}
      >
        <Text style={[styles.brandText, seleccionada && styles.brandTextSelected]}>
          {marca.nombre}
        </Text>
        {seleccionada && <View style={styles.brandDot} />}
      </Pressable>
    );
  };

  const renderModelo = (modelo: ModeloCoche, index: number) => {
    const seleccionado = modeloSeleccionado?.idModelo === modelo.idModelo;
    return (
      <Pressable
        key={modelo.idModelo}
        accessibilityRole="button"
        accessibilityState={{ selected: seleccionado }}
        onPress={() => seleccionarModelo(modelo)}
        style={({ pressed }) => [
          styles.modelRow,
          seleccionado && styles.modelRowSelected,
          pressed && styles.pressed,
        ]}
      >
        <Text style={[styles.modelIndex, seleccionado && styles.modelIndexSelected]}>
          {String(index + 1).padStart(2, '0')}
        </Text>
        <View style={styles.modelCopy}>
          <Text style={[styles.modelName, seleccionado && styles.modelNameSelected]}>
            {modelo.nombreModelo}
          </Text>
          <Text style={styles.modelMeta}>Turismo · {modelo.alto} × {modelo.ancho} mm</Text>
        </View>
        <Text style={[styles.modelArrow, seleccionado && styles.modelArrowSelected]}>›</Text>
      </Pressable>
    );
  };

  const animacionContenido = {
    opacity: entrada,
    transform: [
      {
        translateY: entrada.interpolate({
          inputRange: [0, 1],
          outputRange: [10, 0],
        }),
      },
    ],
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.page}>
        <View style={styles.content}>
          <View style={styles.masthead}>
            <View style={styles.brandMark}>
              <Text style={styles.brandMarkText}>02</Text>
            </View>
            <Text style={styles.eyebrow}>GARAGE · GUÍA DE MODELOS</Text>
          </View>

          <View style={styles.titleRow}>
            <View style={styles.titleCopy}>
              <Text style={styles.title}>Encuentra tu coche</Text>
              <Text style={styles.subtitle}>
                Explora marcas, compara modelos y descubre sus dimensiones.
              </Text>
            </View>
            <View style={styles.catalogBadge}>
              <Text style={styles.catalogNumber}>{String(viewModel.listadoMarcas.length).padStart(2, '0')}</Text>
              <Text style={styles.catalogCaption}>MARCAS</Text>
            </View>
          </View>

          <View style={styles.brandSection}>
            <View style={styles.sectionHeading}>
              <Text style={styles.sectionLabel}>01 / MARCA</Text>
              <Text style={styles.sectionHint}>Elige una marca</Text>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.brandTabs}
            >
              {viewModel.listadoMarcas.map(renderMarca)}
            </ScrollView>
          </View>

          <Animated.View
            style={[
              styles.selectionLayout,
              esEscritorio ? styles.selectionLayoutWide : styles.selectionLayoutNarrow,
              animacionContenido,
            ]}
          >
            <View style={[styles.panel, styles.modelPanel]}>
              <View style={styles.panelHeading}>
                <View>
                  <Text style={styles.sectionLabel}>02 / MODELO</Text>
                  <Text style={styles.panelTitle}>{marcaSeleccionada?.nombre ?? 'Modelos'}</Text>
                </View>
                <View style={styles.countBadge}>
                  <Text style={styles.countText}>
                    {String(viewModel.listadoModelosPorMarca.length).padStart(2, '0')}
                  </Text>
                </View>
              </View>

              {viewModel.listadoModelosPorMarca.length > 0 ? (
                <View style={styles.modelList}>
                  {viewModel.listadoModelosPorMarca.map(renderModelo)}
                </View>
              ) : (
                <Text style={styles.emptyText}>No hay modelos para esta marca.</Text>
              )}
            </View>

            <View style={[styles.panel, styles.detailPanel]}>
              <View style={styles.panelHeading}>
                <View>
                  <Text style={styles.sectionLabel}>03 / DETALLE</Text>
                  <Text style={styles.panelTitle}>
                    {modeloSeleccionado?.nombreModelo ?? 'Ficha del vehículo'}
                  </Text>
                </View>
              </View>

              {modeloSeleccionado ? (
                <View>
                  <Image
                    accessibilityLabel={`Fotografía del modelo ${modeloSeleccionado.nombreModelo}`}
                    source={{ uri: modeloSeleccionado.urlFoto }}
                    resizeMode="cover"
                    style={styles.carPhoto}
                  />
                  <View style={styles.detailIntro}>
                    <View style={styles.detailTitleGroup}>
                      <Text style={styles.detailBrand}>{marcaSeleccionada?.nombre}</Text>
                      <Text style={styles.detailName}>{modeloSeleccionado.nombreModelo}</Text>
                    </View>
                    <View style={styles.specAccent} />
                  </View>
                  <View style={styles.specGrid}>
                    <View style={styles.specItem}>
                      <Text style={styles.specLabel}>ALTO</Text>
                      <Text style={styles.specValue}>{modeloSeleccionado.alto.toLocaleString('es-ES')} <Text style={styles.specUnit}>mm</Text></Text>
                    </View>
                    <View style={styles.specDivider} />
                    <View style={styles.specItem}>
                      <Text style={styles.specLabel}>ANCHO</Text>
                      <Text style={styles.specValue}>{modeloSeleccionado.ancho.toLocaleString('es-ES')} <Text style={styles.specUnit}>mm</Text></Text>
                    </View>
                  </View>
                </View>
              ) : (
                <View style={styles.emptyDetail}>
                  <View style={styles.emptyIcon}>
                    <Text style={styles.emptyIconText}>+</Text>
                  </View>
                  <Text style={styles.emptyTitle}>Tu siguiente coche</Text>
                  <Text style={styles.emptyText}>Selecciona un modelo para ver su foto y dimensiones.</Text>
                </View>
              )}
            </View>
          </Animated.View>

          <View style={styles.footer}>
            <View style={styles.footerLine} />
            <Text style={styles.footerText}>ACT EXTRA 02 <Text style={styles.footerSeparator}>·</Text> {Platform.OS === 'web' ? 'EDICIÓN WEB' : 'EDICIÓN MÓVIL'}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF9EF',
  },
  page: {
    flexGrow: 1,
  },
  content: {
    width: '100%',
    maxWidth: 1120,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 28,
  },
  masthead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
    marginBottom: 30,
  },
  brandMark: {
    width: 38,
    height: 38,
    borderRadius: 8,
    backgroundColor: '#F5C7C4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandMarkText: {
    color: '#694447',
    fontSize: 13,
    fontWeight: '800',
  },
  eyebrow: {
    color: '#987A73',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 30,
  },
  titleCopy: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    color: '#392A2A',
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontSize: 36,
    fontWeight: '700',
  },
  subtitle: {
    color: '#887671',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },
  catalogBadge: {
    backgroundColor: '#F8E6AC',
    minWidth: 72,
    paddingVertical: 9,
    paddingHorizontal: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  catalogNumber: {
    color: '#614E24',
    fontSize: 20,
    fontWeight: '800',
  },
  catalogCaption: {
    color: '#78663C',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.8,
    marginTop: 1,
  },
  brandSection: {
    marginBottom: 20,
  },
  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 11,
    marginBottom: 10,
  },
  sectionLabel: {
    color: '#B36F6C',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  sectionHint: {
    color: '#8D7C73',
    fontSize: 13,
  },
  brandTabs: {
    gap: 8,
    paddingVertical: 2,
    paddingRight: 4,
  },
  brandTab: {
    minHeight: 42,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    borderColor: '#EEE3D8',
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  brandTabSelected: {
    backgroundColor: '#F5C7C4',
    borderColor: '#F5C7C4',
  },
  brandText: {
    color: '#665451',
    fontSize: 13,
    fontWeight: '700',
  },
  brandTextSelected: {
    color: '#512F33',
  },
  brandDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#8C4D52',
  },
  selectionLayout: {
    gap: 16,
  },
  selectionLayoutWide: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  selectionLayoutNarrow: {
    flexDirection: 'column',
  },
  panel: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFE5DA',
    borderRadius: 8,
    padding: 18,
  },
  modelPanel: {
    flex: 0.82,
    minWidth: 0,
  },
  detailPanel: {
    flex: 1.55,
    minWidth: 0,
  },
  panelHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 15,
  },
  panelTitle: {
    color: '#392A2A',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 5,
  },
  countBadge: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: '#FFF2CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    color: '#705C2E',
    fontSize: 12,
    fontWeight: '800',
  },
  modelList: {
    gap: 7,
  },
  modelRow: {
    minHeight: 64,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 11,
    paddingVertical: 10,
    borderRadius: 7,
    backgroundColor: '#FFFCF7',
  },
  modelRowSelected: {
    backgroundColor: '#FCEAE6',
  },
  modelIndex: {
    color: '#B99A89',
    fontSize: 11,
    fontWeight: '800',
  },
  modelIndexSelected: {
    color: '#A25559',
  },
  modelCopy: {
    flex: 1,
    minWidth: 0,
  },
  modelName: {
    color: '#534441',
    fontSize: 14,
    fontWeight: '700',
  },
  modelNameSelected: {
    color: '#6F383D',
  },
  modelMeta: {
    color: '#96847B',
    fontSize: 11,
    marginTop: 4,
  },
  modelArrow: {
    color: '#B39C8E',
    fontSize: 22,
  },
  modelArrowSelected: {
    color: '#A25559',
  },
  pressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.82,
  },
  carPhoto: {
    width: '100%',
    aspectRatio: 2.05,
    borderRadius: 7,
    backgroundColor: '#F6E8D8',
  },
  detailIntro: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 14,
  },
  detailTitleGroup: {
    flex: 1,
  },
  detailBrand: {
    color: '#AE7270',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.7,
    textTransform: 'uppercase',
  },
  detailName: {
    color: '#392A2A',
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontSize: 27,
    fontWeight: '700',
    marginTop: 3,
  },
  specAccent: {
    width: 34,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#F2D475',
  },
  specGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    borderTopWidth: 1,
    borderTopColor: '#F0E7DD',
  },
  specItem: {
    flex: 1,
  },
  specLabel: {
    color: '#9B8177',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 5,
  },
  specValue: {
    color: '#493937',
    fontSize: 19,
    fontWeight: '800',
  },
  specUnit: {
    color: '#9B8177',
    fontSize: 11,
    fontWeight: '600',
  },
  specDivider: {
    width: 1,
    height: 35,
    backgroundColor: '#F0E7DD',
    marginHorizontal: 15,
  },
  emptyDetail: {
    minHeight: 280,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#FFFCF7',
    borderRadius: 7,
  },
  emptyIcon: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#F8E6AC',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  emptyIconText: {
    color: '#705C2E',
    fontSize: 26,
    fontWeight: '300',
  },
  emptyTitle: {
    color: '#493937',
    fontSize: 15,
    fontWeight: '800',
  },
  emptyText: {
    color: '#96847B',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 7,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 24,
  },
  footerLine: {
    width: 25,
    height: 2,
    backgroundColor: '#E9C766',
  },
  footerText: {
    color: '#A08D81',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  footerSeparator: {
    color: '#D8938B',
  },
});