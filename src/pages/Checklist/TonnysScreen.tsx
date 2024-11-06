import { QuestionCard } from "./QuestionCard";

export function TonnysScreen() {
  return (
      <QuestionCard
      question="O nick esta organizado?"
      onPositivePress={() => console.log('Resposta positiva!')}
      onNegativePress={() => console.log('Resposta negativa!')}
    />
  );
}
