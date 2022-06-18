/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useState } from "react";
import Button from "@components/Button";
import { useGet } from "@config/client";
import { SelectedTraits, Traits } from "@config/types";
import { endpoints } from "@config/routes";

const Preview: FC = () => {
  const [loading, setLoading] = useState(true);
  const [traits, setTraits] = useState<Traits>({});
  const [selectedTraits, setSelectedTraits] = useState<SelectedTraits>({});
  const [imageUrl, setImageUrl] = useState(endpoints.render);
  const { data } = useGet<Traits>(endpoints.traits);

  useEffect(() => {
    if (loading && data) {
      setLoading(false);
      const selectedTraitsToSet = Object.entries(data).reduce(
        (acc: SelectedTraits, [trait, variants]) => {
          acc[trait] = variants[0];
          return acc;
        },
        {}
      );
      console.log(selectedTraitsToSet);
      setSelectedTraits(selectedTraitsToSet);
      setTraits(data);
    }
  }, [data, loading]);

  useEffect(() => {
    const searchParams = new URLSearchParams();
    Object.entries(selectedTraits).forEach(([trait, variant]) => {
      searchParams.append(trait, variant);
    });
    setImageUrl(`${endpoints.render}?${searchParams.toString()}`);
  }, [selectedTraits]);

  const randomize = () => {
    const selectedTraits = Object.entries(traits).reduce(
      (acc: SelectedTraits, [trait, variants]) => {
        acc[trait] = variants[Math.floor(Math.random() * variants.length)];
        return acc;
      },
      {}
    );

    setSelectedTraits(selectedTraits);
  };

  return (
    <div className="mt-4">
      <div className="w-full bg-white shadow-[10px_10px_0px_0px]">
        <img src={imageUrl} alt="Your Heladito" className="max-h-[500px]" />
      </div>
      <div className="flex justify-between mt-6 gap-4">
        <Button color="orange-red" className="flex-1">
          Customize
        </Button>
        <Button onClick={randomize} color="strawberry" className="flex-1">
          Random
        </Button>
      </div>
      <Button color="mint" className="w-full mt-4">
        Continue
      </Button>
    </div>
  );
};

export default Preview;
