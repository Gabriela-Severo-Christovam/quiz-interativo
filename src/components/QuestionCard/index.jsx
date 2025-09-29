import questions  from "../../data/question";
import './QuestionCard.module.css'

export default function Questions() {
    const questionsList = questions.map(question => (
      <div key={question.id}>
        <h3>{question.question}</h3>
        {question.options.map((option, index) => (
          <button key={index}>{option}</button>
        ))}
      </div>
    ));
    return (
      <div className='questions-container'>
        {questionsList}
      </div>
    );
 }