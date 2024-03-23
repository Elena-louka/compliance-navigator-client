import QuestionCard from './QuestionCard'; 

function QuestionList({ questions, onEdit }) {
  return (
    <div>
      {questions.map((question) => (
        <QuestionCard key={question.id} question={question} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default QuestionList;

  