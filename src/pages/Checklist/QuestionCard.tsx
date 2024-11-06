import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

interface QuestionCardProps {
  question: string;
  onPositivePress: () => void;
  onNegativePress: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, onPositivePress, onNegativePress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{question}</Text>
        </View>

        <View style={styles.feedbackContainer}>
          <TouchableHighlight
            style={styles.feedbackButton}
            onPress={onPositivePress}
            underlayColor="#ccc"
          >
            <Image
              source={require('../../img/sorrir.png')}
              style={styles.feedbackIcon}
            />
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.feedbackButton}
            onPress={onNegativePress}
            underlayColor="#ccc"
          >
            <Image
              source={require('../../img/rosto-triste-em-quadrado-arredondado.png')}
              style={styles.feedbackIcon}
            />
          </TouchableHighlight>
        </View>

        <View style={styles.productQuantityContainer}>
          <View style={styles.actionItem}>
            <Image
              source={require('../../img/camera.png')}
              style={styles.actionIcon}
            />
            <Text style={styles.productQuantity}>Mídia</Text>
          </View>

          <View style={styles.actionItem}>
            <Image
              source={require('../../img/balao-de-fala.png')}
              style={styles.actionIcon}
            />
            <Text style={styles.productQuantity}>Comentário</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0', // fundo mais claro para toda a tela
  },
  productContainer: {
    width: '90%',
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#FFFFFF', // fundo branco para destacar o conteúdo
    borderRadius: 10,
    elevation: 5, // sombra no Android
    shadowColor: '#000', // sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  productInfo: {
    marginBottom: 15,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  feedbackContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    width: '95%',
    margin: 'auto',
  },
  feedbackButton: {
    width: 70,
    height: 50,
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  feedbackIcon: {
    width: 24,
    height: 24,
  },
  productQuantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFD700', // mantendo o fundo dourado
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    width: 24,
    height: 24,
  },
  productQuantity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    paddingLeft: 10,
  },
});
