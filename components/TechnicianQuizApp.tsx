import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { questions } from "../data/questions";

export default function TechnicianQuizApp() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  const handleNext = () => {
    if (selected === question.answer) {
      setScore(score + 1);
    }
    setSelected("");
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected("");
    setScore(0);
    setFinished(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {finished ? (
        <Card>
          <CardContent className="text-center p-6">
            <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-xl">Your Score: {score} / {questions.length}</p>
            <Button className="mt-4" onClick={handleRestart}>Restart Quiz</Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-medium">
              Question {current + 1} of {questions.length}
            </h2>
            <p className="text-xl font-semibold">{question.text}</p>
            <RadioGroup value={selected} onValueChange={setSelected}>
              {question.choices.map((choice, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={choice} id={choice} />
                  <label htmlFor={choice}>{choice}</label>
                </div>
              ))}
            </RadioGroup>
            <Button
              onClick={handleNext}
              disabled={!selected}
              className="mt-4"
            >
              {current + 1 === questions.length ? "Finish" : "Next"}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
