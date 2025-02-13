import { ReadingTime } from "./ReadingTime";

type OptionsPanelProps = {
  isLimitEnabled: boolean;
  maxLength: number;
  handleLimitToggle: () => void;
  handleMaxLengthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
};


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
        <p className="inline">{ReadingTime(text)}</p>
      </div>    
    </div>
  );
}
