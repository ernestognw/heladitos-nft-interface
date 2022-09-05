import { FC, useState } from "react";
import Display from "@views/create/components/Display";
import { SelectedTraits } from "@config/types";
import TraitRow from "./TraitRow";
import axios from "axios";
import Button from "@components/Button";
import { endpoints } from "@config/routes";

interface Props {
  selectedTraits: SelectedTraits;
  onGoBack: <T>() => T | void;
  [key: string]: any;
}

const Confirm: FC<Props> = ({ selectedTraits, onGoBack }) => {
  const [uploading, setUploading] = useState(false);

  const uploadToIpfs = async () => {
    setUploading(true);
    await axios.post(endpoints.pin, { ...selectedTraits });
    setUploading(false);
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-400 cursor-pointer" />
      <div className="inset-0">
        <div className="items-center justify-center flex pt-32 pb-16">
          <div className="bg-white p-8 ticket flex-col w-[400px] drop-shadow-md">
            <Button color="white" size="xs" className="mb-4" onClick={onGoBack}>
              Back to edit
            </Button>
            <Display
              selectedTraits={selectedTraits}
              size={200}
              className="shadow-none"
            />
            <h1 className="text-3xl font-bold mt-6">Summary</h1>
            {Object.entries(selectedTraits).map(([trait, value]) => (
              <TraitRow key={`${trait}-${value}`} trait={trait} value={value} />
            ))}
            <hr />
            <Button
              disabled={uploading}
              color="mint"
              className="w-full mt-4"
              onClick={uploadToIpfs}
            >
              {uploading ? "Uploading metadata..." : "Mint now"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
