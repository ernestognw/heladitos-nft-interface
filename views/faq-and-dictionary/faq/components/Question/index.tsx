import { FC } from "react";

type Props = {
  question: string;
  answer: string;
};

const Question: FC<Props> = ({ question, answer }) => {
  return (
    <>
      <h4 className="text-2xl mt-4">{question}</h4>
      <p className="mt-4">{answer}</p>
    </>
  );
};

export default Question;
