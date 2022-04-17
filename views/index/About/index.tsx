import Image from "next/image";
import { FC } from "react";

const About: FC = () => {
  return (
    <div className="bg-orange-red-500 flex flex-col items-center justify-center">
      <div className="max-w-4xl px-4 sm:px-6 lg:px-8 py-14 w-full">
        <h3 className="text-3xl font-bold">The ice-cream revolution</h3>
        <div className="flex items-center justify-center my-10">
          <Image
            src="/index/video-player.png"
            alt="Heladitos Story"
            width={640}
            height={430}
          />
        </div>
        <h4 className="text-2xl mb-4">Summer 2030:</h4>
        <p className="mt-4">
          A sunny day, extreme heat and the planet{`'`}s emergency still around.
        </p>
        <p className="mt-4">
          Crisis, droughts, and the capitalist system draining societies in
          resistance after dealing with the longest pandemic recorded in
          history.
        </p>
        <p className="mt-4">
          In a Global South country, were violence and climate crisis forced
          people to migrate, an ice-cream cart arrived to a big crowd, playing
          the classic melody to atract the childhoods and their parents.
        </p>
        <p className="mt-4">
          The people started to hoard the cart, thisrty, with little water,
          waiting to get refreshed.
        </p>
        <p className="mt-4">
          What people didn{`'`}t knew was that those ice creams were
          accidentally dipped with the{" "}
          <span className="font-bold">&quot;J-Chemical&quot;</span>: an element
          capable of waking up people
          {`'`}s intersectional awareness.
        </p>
        <p className="mt-4">
          The <span className="font-bold">10,000</span> people that ate those
          ice creams, created a revolution against the wealthiest 1%; countries
          disappeared, and the societies adopted decentralized models.
        </p>
        <p className="mt-4">
          Technology stopped being exclusive to the big corporations, and was
          distributed to get justice. The{" "}
          <span className="font-bold">HELADITOS</span> revolution began.
        </p>
      </div>
      <Image
        src="/index/city.png"
        alt="Heladitos Story"
        width={2880}
        height={1104}
      />
    </div>
  );
};

export default About;
