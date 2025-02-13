import { LetterDensityList } from "./LetterDensityList";

type LetterDensityProps = {
  text: string;
};

export const LetterDensity = ({ text }: LetterDensityProps) => {
  return (
    <div className="letter-density">
      <p><strong>Letter Density</strong></p>
      {text.trim().length > 0 ? 
        <LetterDensityList text={text}/>
      : 
        <p>No characters found. Start typing to see letter density.</p>
      }
    </div>
  );
}
