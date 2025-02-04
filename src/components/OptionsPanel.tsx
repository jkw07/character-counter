type OptionsPanelProps = {
  isLimitEnabled: boolean;
  maxLength: number;
  handleLimitToggle: () => void;
  handleMaxLengthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
};



function OptionsPanel({
  isLimitEnabled,
  maxLength,
  handleLimitToggle,
  handleMaxLengthChange,
  text,
}: OptionsPanelProps) {
  const readingTime = (text: string): number =>
    Math.floor(text.trim().split(/\s+/).length / 200);

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
      <p>
        Approx. reading time:{" "}
        {readingTime(text) < 1
          ? "< 1 minute"
          : readingTime(text) === 1
          ? "1 minute"
          : readingTime(text) + " minutes"}
      </p>
    </div>
  );
}

export default OptionsPanel;
