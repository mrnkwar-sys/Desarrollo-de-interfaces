import { useRef, useState } from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  type LayoutChangeEvent,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Departamento } from '../Models/Entities/Departamento';
import { Persona } from '../Models/Entities/Persona';
import { DeptPersonasVM } from '../ViewModels/DeptPersonasVM';

/** Propiedades necesarias para representar y seleccionar un departamento. */
interface DepartmentRowProps {
  /** Departamento mostrado por la fila. */
  departamento: Departamento;
  /** Indica si el departamento está actualmente seleccionado. */
  seleccionado: boolean;
  /** Comunica al padre qué departamento se ha pulsado. */
  onSelect: (departamento: Departamento) => void;
}

/** Crea el ViewModel inicial del directorio.
 * @returns Un ViewModel con Tecnología seleccionada y su plantilla cargada.
 */
function crearViewModelInicial(): DeptPersonasVM {
  return new DeptPersonasVM();
}

/** Renderiza una pestaña accesible que permite seleccionar un departamento.
 * @param props Datos de presentación y callback de selección.
 * @returns Fila interactiva con el estado seleccionado indicado.
 */
function DepartmentRow({
  departamento,
  seleccionado,
  onSelect,
}: DepartmentRowProps) {
  /** Notifica al componente padre que se ha pulsado esta fila. */
  const handlePress = () => onSelect(departamento);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: seleccionado }}
      onPress={handlePress}
      style={[
        styles.departmentButton,
        seleccionado && styles.departmentButtonSelected,
      ]}
    >
      <Text style={[styles.departmentName, seleccionado && styles.selectedText]}>
        {departamento.nombre}
      </Text>
      {seleccionado && <View style={styles.selectedIndicator} />}
    </Pressable>
  );
}

/** Presenta la selección de departamentos y el equipo de cada área.
 * @returns Pantalla principal del directorio de equipo.
 */
export function DeptPersonasView() {
  const { width } = useWindowDimensions();
  const [viewModel, setViewModel] = useState(crearViewModelInicial);
  const departmentScrollRef = useRef<ScrollView>(null);
  const [departmentScroll, setDepartmentScroll] = useState({
    offset: 0,
    viewport: 0,
    content: 0,
  });
  const departamentoSeleccionado = viewModel.departamentoSeleccionado;
  const puedeDesplazarIzquierda = departmentScroll.offset > 1;
  const puedeDesplazarDerecha =
    departmentScroll.offset + departmentScroll.viewport < departmentScroll.content - 1;
  const mostrarFlechas = Platform.OS === 'web' && width > 640;

  /** Selecciona un departamento y actualiza los datos observados por la vista.
   * @param departamento Departamento elegido por el usuario.
   */
  const seleccionarDepartamento = (departamento: Departamento) => {
    const siguienteViewModel = new DeptPersonasVM();
    siguienteViewModel.departamentoSeleccionado = departamento;
    setViewModel(siguienteViewModel);
  };

  /** Actualiza la posición de desplazamiento de las pestañas.
   * @param event Evento nativo con el desplazamiento horizontal actual.
   */
  const actualizarDesplazamientoDepartamentos = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    setDepartmentScroll((current) => ({
      ...current,
      offset: event.nativeEvent.contentOffset.x,
    }));
  };

  /** Registra el ancho visible de la franja de departamentos.
   * @param event Evento de layout de la franja.
   */
  const registrarAnchoVisibleDepartamentos = (event: LayoutChangeEvent) => {
    setDepartmentScroll((current) => ({
      ...current,
      viewport: event.nativeEvent.layout.width,
    }));
  };

  /** Registra el ancho total de las pestañas desplazables.
   * @param width Ancho del contenido horizontal.
   */
  const registrarAnchoContenidoDepartamentos = (width: number) => {
    setDepartmentScroll((current) => ({ ...current, content: width }));
  };

  /** Desplaza la franja en la dirección solicitada.
   * @param direction -1 para retroceder o 1 para avanzar.
   */
  const desplazarDepartamentos = (direction: -1 | 1) => {
    const distance = Math.max(departmentScroll.viewport * 0.72, 160);
    const nextOffset = Math.max(0, departmentScroll.offset + direction * distance);
    departmentScrollRef.current?.scrollTo({ x: nextOffset, animated: true });
  };

  /** Convierte una persona en una fila visual con nombre y apellidos.
   * @param persona Persona que se va a mostrar.
   * @returns Fila del listado de empleados.
   */
  const renderPersona = (persona: Persona) => (
    <View key={persona.idPer} style={styles.personaRow}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{persona.nombre.charAt(0)}</Text>
      </View>
      <View style={styles.personaInfo}>
        <Text style={styles.personaNombre}>{persona.nombre}</Text>
        <Text style={styles.personaApellidos}>{persona.apellidos}</Text>
      </View>
    </View>
  );

  /** Construye la pestaña de un departamento y calcula su estado visual.
   * @param departamento Departamento de la fila.
   * @returns Fila seleccionable del departamento.
   */
  const renderDepartamento = (departamento: Departamento) => (
    <DepartmentRow
      key={departamento.idDept}
      departamento={departamento}
      seleccionado={departamentoSeleccionado?.idDept === departamento.idDept}
      onSelect={seleccionarDepartamento}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.topline}>
          <View style={styles.mark}>
            <Text style={styles.markText}>A</Text>
          </View>
          <Text style={styles.eyebrow}>DIRECTORIO DE EQUIPO</Text>
        </View>

        <Text style={styles.title}>Equipo</Text>

        {viewModel.listadoDepartamentos.length > 0 ? (
          <View style={styles.departmentPicker}>
            {mostrarFlechas && (
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Ver departamentos anteriores"
                disabled={!puedeDesplazarIzquierda}
                onPress={() => desplazarDepartamentos(-1)}
                style={[styles.scrollArrow, !puedeDesplazarIzquierda && styles.scrollArrowDisabled]}
              >
                <Text style={styles.scrollArrowText}>‹</Text>
              </Pressable>
            )}
            <ScrollView
              ref={departmentScrollRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.departmentTabs}
              style={styles.departmentTabsViewport}
              onLayout={registrarAnchoVisibleDepartamentos}
              onContentSizeChange={registrarAnchoContenidoDepartamentos}
              onScroll={actualizarDesplazamientoDepartamentos}
              scrollEventThrottle={16}
            >
              {viewModel.listadoDepartamentos.map(renderDepartamento)}
            </ScrollView>
            {mostrarFlechas && (
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Ver más departamentos"
                disabled={!puedeDesplazarDerecha}
                onPress={() => desplazarDepartamentos(1)}
                style={[styles.scrollArrow, !puedeDesplazarDerecha && styles.scrollArrowDisabled]}
              >
                <Text style={styles.scrollArrowText}>›</Text>
              </Pressable>
            )}
          </View>
        ) : (
          <View style={styles.emptySelection}>
            <Text style={styles.emptySelectionTitle}>No hay departamentos disponibles</Text>
            <Text style={styles.emptyText}>No se puede mostrar un equipo hasta que haya departamentos.</Text>
          </View>
        )}

        {viewModel.listadoDepartamentos.length === 0 ? null : departamentoSeleccionado ? (
          <View style={styles.teamSection}>
            <View style={styles.teamHeading}>
              <View style={styles.teamTitleGroup}>
                <Text style={styles.sectionEyebrow}>EQUIPO</Text>
                <Text style={styles.teamTitle}>{departamentoSeleccionado.nombre}</Text>
              </View>
              <View style={styles.countBlock}>
                <Text style={styles.count}>{viewModel.numPersonasPorDept}</Text>
                <Text style={styles.countCaption}>
                  {viewModel.numPersonasPorDept === 1 ? 'PERSONA' : 'PERSONAS'}
                </Text>
              </View>
            </View>
            <View style={styles.personList}>
              {viewModel.listadoPersonasPorDept.length > 0 ? (
                viewModel.listadoPersonasPorDept.map(renderPersona)
              ) : (
                <Text style={styles.emptyText}>No hay empleados en este departamento.</Text>
              )}
            </View>
          </View>
        ) : (
          <View style={styles.emptySelection}>
            <Text style={styles.emptySelectionTitle}>Selecciona un departamento</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF8F5',
  },
  content: {
    width: '100%',
    maxWidth: 780,
    alignSelf: 'center',
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 44,
  },
  topline: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 28,
  },
  mark: {
    width: 34,
    height: 34,
    borderRadius: 11,
    backgroundColor: '#F4C6B8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  markText: {
    color: '#683E3A',
    fontSize: 16,
    fontWeight: '800',
  },
  eyebrow: {
    color: '#98736E',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  title: {
    color: '#39282B',
    fontSize: 32,
    fontWeight: '800',
  },
  subtitle: {
    color: '#907A78',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 7,
    marginBottom: 22,
  },
  departmentPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 13,
    marginBottom: 10,
  },
  departmentTabsViewport: {
    flex: 1,
    minWidth: 0,
    height: 50,
  },
  departmentTabs: {
    gap: 8,
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  scrollArrow: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EBCFC7',
    borderRadius: 19,
    backgroundColor: '#FFFFFF',
  },
  scrollArrowDisabled: {
    opacity: 0.38,
  },
  scrollArrowText: {
    color: '#A65E52',
    fontSize: 27,
    lineHeight: 30,
  },
  departmentButton: {
    minHeight: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEDBD5',
    borderRadius: 21,
  },
  departmentButtonSelected: {
    backgroundColor: '#F8DDD7',
    borderColor: '#E8B8AB',
  },
  departmentName: {
    color: '#573D3D',
    fontSize: 14,
    fontWeight: '600',
  },
  selectedIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#C66B5A',
    marginLeft: 7,
  },
  selectedText: {
    color: '#8C4746',
  },
  teamSection: {
    marginTop: 32,
  },
  teamHeading: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#EBD8D1',
  },
  teamTitleGroup: {
    flex: 1,
    paddingRight: 12,
  },
  sectionEyebrow: {
    color: '#A06D63',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  teamTitle: {
    color: '#39282B',
    fontSize: 23,
    fontWeight: '800',
  },
  countBlock: {
    minWidth: 80,
    alignItems: 'flex-end',
  },
  count: {
    color: '#C86750',
    fontSize: 40,
    fontWeight: '800',
    lineHeight: 46,
  },
  countCaption: {
    color: '#8C6F71',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
    marginTop: 3,
  },
  personList: {
    paddingTop: 4,
  },
  personaRow: {
    minHeight: 68,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0DFDA',
  },
  avatar: {
    width: 39,
    height: 39,
    borderRadius: 20,
    backgroundColor: '#F5D9D2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },
  avatarText: {
    color: '#9C5146',
    fontSize: 16,
    fontWeight: '800',
  },
  personaInfo: {
    flex: 1,
  },
  personaNombre: {
    color: '#573D3D',
    fontSize: 15,
    fontWeight: '700',
  },
  personaApellidos: {
    color: '#907A78',
    fontSize: 13,
    marginTop: 3,
  },
  emptySelection: {
    marginTop: 32,
    paddingVertical: 24,
    borderTopWidth: 1,
    borderTopColor: '#EBD8D1',
  },
  emptySelectionTitle: {
    color: '#573D3D',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  emptyText: {
    color: '#907A78',
    fontSize: 14,
    lineHeight: 21,
    paddingVertical: 14,
  },
});