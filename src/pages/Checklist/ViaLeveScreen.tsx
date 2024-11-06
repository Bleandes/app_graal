import { QuestionCard } from "./QuestionCard";

export function ViaLeveScreen() {
  return (
      <QuestionCard
      question="O Via Leve esta organizado?"
      onPositivePress={() => console.log('Resposta positiva!')}
      onNegativePress={() => console.log('Resposta negativa!')}
    />
  );
}
