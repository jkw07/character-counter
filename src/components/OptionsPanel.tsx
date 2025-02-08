type OptionsPanelProps = {
  isLimitEnabled: boolean;
  maxLength: number;
  handleLimitToggle: () => void;
  handleMaxLengthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
};

const readingTime = (text: string): string => {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.floor(words / wordsPerMinute);
  if (minutes < 1) {
    return "< 1 minute";
  } else if (minutes === 1) {
    return "1 minute";
  } else {
    return `${minutes} minutes`;
  }
}


export const OptionsPanel = ({
  isLimitEnabled,
  maxLength,
  handleLimitToggle,
  handleMaxLengthChange,
  text,
}: OptionsPanelProps) => {
  return (
    <div className="options">
      <label>
        <input
          type="checkbox"
          checked={isLimitEnabled}
          onChange={handleLimitToggle}
        />{" "}
        Set Character Limit
      </label>
      {isLimitEnabled && (
        <input
          type="number"
          value={maxLength}
          onChange={handleMaxLengthChange}
          min="1"
          className="number-input"
        />
      )}
      {isLimitEnabled && <p>Characters left: {maxLength - text.length}</p>}
      <div>
        <p className="inline">Approx. reading time:</p>
        <p className="inline">{readingTime(text)}</p>
      </div>    
    </div>
  );
}
