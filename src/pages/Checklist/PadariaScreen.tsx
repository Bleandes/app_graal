import { QuestionCard } from "./QuestionCard";

export function PadariaScreen() {
  return (
      <QuestionCard
      question="O padaria esta organizado?"
      onPositivePress={() => console.log('Resposta positiva!')}
      onNegativePress={() => console.log('Resposta negativa!')}
    />
  );
}
