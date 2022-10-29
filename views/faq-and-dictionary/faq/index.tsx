import { FC } from "react";
import Question from "./components/Question";

type Question = {
  question: string;
  answer: string;
};

const questions: Question[] = [
  {
    question: "How do I mint my heladito?",
    answer:
      "You’ll need an Ethereum wallet with ETH on it. Connect it to our website. Then, just go to our Heladito Machine©, select your traits, click on Mint Now and wait for your heladito to get frozen and minted on-chain.",
  },
  {
    question: "How do I customize my heladito?",
    answer:
      "You can customize your heladito by accessing the Heladito Machine©. There you can choose from a wide variety of traits to create a unique heladito. ",
  },
  {
    question: "Do I have limited time to create my heladito?",
    answer:
      "No. Take your time to decide which traits fit best to your personality, but remember, only 10,000 are available to claim. ",
  },
  {
    question: "Can I pick a random heladito?",
    answer:
      "Yes. Let the Heladito Machine© surprises you by clicking on the ‘random’ button. If you’re not convinced, you can still try until you find the one you love. ",
  },
  {
    question: "Where can I see my NFT after minting my heladito?",
    answer:
      "You can go to OpenSea, connect your wallet, and have access to your NFTs. Heladitos will also be shown there. Same applies to every other NFT app that gives you access to your NFTs based on your wallet address. ",
  },
  {
    question: "What do I get if I mint and join the heladito’s community?",
    answer:
      "1. You get a custom, creamy, soft and full of personality ice cream image, cryptographically attached to an ERC721 token (NFT) on the Ethereum blockchain.\n 2. TLDR; An ice cream image and an undeniable proof of ownership.\n 3. Access to our social community with chance to participate, share and grow with us.",
  },
  {
    question:
      "How  are you going to decide the donations to the 3 NGOs in case of selling all the Heladitos NFTs?",
    answer:
      "We created this project aiming to support the top social causes that Mexico struggles with, including dissappeared crisis, human rights or environmental defense.  We as a team will bring the organizations and collectives candidates and then make a voting dymamic open to the community to pick the 3 NGOs.",
  },
  {
    question: "I’ve heard NFT’s are a scam. Are you?",
    answer:
      "A scam is what a scammer does. We are a proven human beings sharing our real names, with a real passion and professional track about web3 space, tech, design, social, environmental and political causes. If you like our project mint your heladito and take part of the revolution. ",
  },
  {
    question: "Do you have Discord?",
    answer:
      "Not at the moment, but we might consider it if the community request this type of space. In the meantime, feel free to contact us by our twitter @heladitosnft. ",
  },
  {
    question: "More questions?",
    answer:
      "Feel free to approach us on Heladito’s twitter account @heladitosnft.",
  },
];

const FAQ: FC = () => {
  return (
    <div className="pt-16 bg-sky-blue-500 flex flex-col items-center justify-center">
      <div className="bg-[url('/faq-and-dictionary/clouds.svg')] bg-cover w-full flex items-center justify-center">
        <div className="max-w-6xl pl-4 pr-8 sm:pl-6 lg:px-8 pt-14 pb-[150px] w-full relative">
          <h3 className="text-3xl font-bold">FAQ</h3>
          {questions.map(({ question, answer }) => (
            <Question key={question} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
