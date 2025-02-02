function TextInput({ text, handleChange, isLimitEnabled, maxLength }) {
  return (
    <textarea
      placeholder="Start typing here... (or enter your text)"
      value={text}
      onChange={handleChange}
      maxLength={isLimitEnabled ? maxLength : undefined}
    ></textarea>
  );
}

export default TextInput;
