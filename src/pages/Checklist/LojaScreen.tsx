import { ScrollView, StyleSheet, Text, View } from "react-native";
import { QuestionCard } from "./QuestionCard";

export function LojaScreen() {
        return (
          <ScrollView contentContainerStyle={styles.container}>
          <QuestionCard
      question="O nick esta organizado?"
      onPositivePress={() => console.log('Resposta positiva!')}
      onNegativePress={() => console.log('Resposta negativa!')}
      />
        <QuestionCard
      question="O nick esta organizado?"
      onPositivePress={() => console.log('Resposta positiva!')}
      onNegativePress={() => console.log('Resposta negativa!')}
      />
        <QuestionCard
      question="O nick esta organizado?"
      onPositivePress={() => console.log('Resposta positiva!')}
      onNegativePress={() => console.log('Resposta negativa!')}
      />
        <QuestionCard
      question="O nick esta organizado?"
      onPositivePress={() => console.log('Resposta positiva!')}
      onNegativePress={() => console.log('Resposta negativa!')}
      />
        <QuestionCard
      question="O nick esta organizado?"
      onPositivePress={() => console.log('Resposta positiva!')}
      onNegativePress={() => console.log('Resposta negativa!')}
      />
        <QuestionCard
      question="O nick esta organizado?"
      onPositivePress={() => console.log('Resposta positiva!')}
      onNegativePress={() => console.log('Resposta negativa!')}
      />      
       </ScrollView>
        );
}

const styles = StyleSheet.create({
container: {
  paddingVertical: 10,
  alignItems: 'center',
  backgroundColor: '#E0E0E0',
},
});