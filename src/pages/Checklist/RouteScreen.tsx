import { Text, View } from "react-native";
import { QuestionCard } from "./QuestionCard";

export function RouteScreen() {
        return (
          <QuestionCard
      question="O nick esta organizado?"
      onPositivePress={() => console.log('Resposta positiva!')}
      onNegativePress={() => console.log('Resposta negativa!')}
    />
        );
}