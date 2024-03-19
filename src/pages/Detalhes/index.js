import { Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';

export default function Detalhes() {
  const route = useRoute();
  const { detalheCurso } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 18 }}>{detalheCurso.curso}</Text>
      <Text> Product description: {detalheCurso.mensagem}</Text>
      <Image source={detalheCurso.imagem} style={styles.image} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 250, // Largura da imagem
    height: 350, // Altura da imagem
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#d3d3d3'
  }
});