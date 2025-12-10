interface Props{
    question:string;
    options:string[];
    selectedOption:string | null;
    handleAnswer:(option:string)=>void;
}

const QuestionCard = ({question,options,selectedOption,handleAnswer}:Props) => {
  return ( 
    <>
     <div style={{ padding: "20px", border: "1px solid black", borderRadius: "10px", marginTop: "20px" }}>
      <h2>{question}</h2>
      {options.map((opt)=>(
        <button
        key={opt}
          style={{
            display: "block",
            margin: "10px 0",
            padding: "10px",
            width: "100%",
            backgroundColor: selectedOption === opt ? "lightgreen" : "white",
            cursor: "pointer"
          }}
          onClick={() => handleAnswer(opt)}
        >
          {opt}
        </button>
      ))}
     </div>
    </>
  )
}

export default QuestionCard