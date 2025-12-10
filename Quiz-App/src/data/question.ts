export interface QuestionType{
    question:string,
    options:string[],
    answer:string
}
export const questions:QuestionType[]=[
    {
question: "What is React ?",
options:  ["Library","Framework","Programming Language", "Database"],
answer: "Library"
},
{
question: "Who created React ?",
options:  ["Google","Facebook","Microsoft", "Amazon"],
answer: "Facebook"
},
{
question: "Which hook is used for state ?",
options:  ["useStatus","useStore","useState", "useValue"],
answer: "useState"
}
];