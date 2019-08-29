import React from "react";
import "./App.css";

function useQuestions() {
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    window.fetch("/question").then(payload =>
      payload.json().then(content => {
        setQuestions([content]);
      })
    );
  }, []);

  return questions;
}

function QuestionOptions({ options = [] }) {
  return (
    Boolean(options.length) && (
      <ol>
        {options.map((option, index) => {
          return <li key={index}>{option}</li>;
        })}
      </ol>
    )
  );
}

function App() {
  const questions = useQuestions();
  return (
    <div className="App">
      <header className="App-header">
        Here are some questions
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              {question.id} - {question.data.question}
              <QuestionOptions options={question.data.options} />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
