import {useState} from 'react'
import { questions } from '../data/question';
import QuestionCard from './QuestionCard';

const Quiz = () => {

const[current,setCurrent]=useState(0);
const[select,setSelected]=useState<string | null>(null);
const[score,setScore]=useState(0);
const[finished,setFinished]=useState(false);

const handleAnswer = (option:string) =>{
    setSelected(option);
};
const nextQuestion = ()=>{
    if(select === questions[current].answer){
        setScore(score+1);
    }
    if(current+1 <questions.length){
        setCurrent(current+1);
        setSelected(null);
    }
    else{
        setFinished(true);
    }
};


  return (
   <>
   <div>
    <h1>Quiz App</h1>
    {finished? (
        <h2>Your Score: {score} / {questions.length}</h2>
    ):<>
    <QuestionCard 
    question={questions[current].question}
    options={questions[current].options}
    selectedOption={select}
    handleAnswer={handleAnswer}
    />
    <button
    onClick={nextQuestion}
    style={{padding: "10px 20px",
              marginTop: "20px",
              cursor: "pointer"}}
              disabled={!select}
    >
Next
    </button>
    </>

    }
   </div>
   </>
  )
}

export default Quiz