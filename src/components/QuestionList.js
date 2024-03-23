import QuestionCard from './QuestionCard'; 

function QuestionList({ questions, onEdit, selectedQuestions, onSelect }) {
  return (
    <div>
      {questions.map((question) => (
        <QuestionCard 
          key={question.id} 
          question={question} 
          onEdit={onEdit}
          onSelect={onSelect}
          isSelected={selectedQuestions.includes(question.id)}
        />
      ))}
    </div>
  );
}

export default QuestionList;
