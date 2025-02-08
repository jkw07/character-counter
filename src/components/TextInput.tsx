type TextInputProps = {
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isLimitEnabled: boolean;
  maxLength: number;
};


export const TextInput = ({ text, handleChange, isLimitEnabled, maxLength }: TextInputProps) => {
  return (
    <textarea
      placeholder="Start typing here... (or enter your text)"
      value={text}
      onChange={handleChange}
      maxLength={isLimitEnabled ? maxLength : undefined}
    ></textarea>
  );
}

