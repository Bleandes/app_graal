import { Text, TouchableHighlight, View, StyleSheet } from "react-native";

export function ChecklistScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableHighlight onPress={() => navigation.navigate('Tonnys')} underlayColor="#DDDDDD" style={styles.touchable}>
          <Text style={styles.cardText}>Tonny's</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.card}>
        <TouchableHighlight onPress={() => navigation.navigate('Nick')} underlayColor="#DDDDDD" style={styles.touchable}>
          <Text style={styles.cardText}>Nick</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.card}>
        <TouchableHighlight onPress={() => navigation.navigate('Route')} underlayColor="#DDDDDD" style={styles.touchable}>
          <Text style={styles.cardText}>Route</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.card}>
        <TouchableHighlight onPress={() => navigation.navigate('Loja')} underlayColor="#DDDDDD" style={styles.touchable}>
          <Text style={styles.cardText}>Loja</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.card}>
        <TouchableHighlight onPress={() => navigation.navigate('Padaria')} underlayColor="#DDDDDD" style={styles.touchable}>
          <Text style={styles.cardText}>Padaria</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.card}>
        <TouchableHighlight onPress={() => navigation.navigate('Grill')} underlayColor="#DDDDDD" style={styles.touchable}>
          <Text style={styles.cardText}>Grill</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.card}>
        <TouchableHighlight onPress={() => navigation.navigate('ViaLeve')} underlayColor="#DDDDDD" style={styles.touchable}>
          <Text style={styles.cardText}>Via Leve</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', 
  },
  card: {
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 80,
    backgroundColor: '#FFFFFF', // cor de fundo neutra
    borderColor: '#E0E0E0', // borda leve e discreta
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  touchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    color: '#333333', // cor do texto mais suave
    fontWeight: 'bold',
  },
});
