import { LetterDensityList } from "./LetterDensityList";

type LetterDensityProps = {
  text: string;
};

export const LetterDensity = ({ text }: LetterDensityProps) => {
  return (
    <div className="letter-density">
      <p>Letter Density</p>
      {text.trim().length > 0 ? 
        <LetterDensityList text={text}/>
      : 
        <p>No characters found. Start typing to see letter density.</p>
      }
    </div>
  );
}
