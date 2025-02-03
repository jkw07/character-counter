function LetterDensity({ text }) {
  const calculateLetterDensity = (text) => {
    const letters = text.toLowerCase().replace(/[^a-z]/g, "");
    const frequency = {};
    for (const letter of letters) {
      frequency[letter] = frequency[letter] ? frequency[letter] + 1 : 1;
    }
    const totalLetters = letters.length;
    return Object.entries(frequency)
      .map(([letter, count]) => ({
        letter,
        count,
        density: ((count / totalLetters) * 100).toFixed(2) + "%",
      }))
      .sort((a, b) => b.count - a.count);
  };

  return (
    <div className="letter-density">
      <p>Letter Density</p>
      {text.trim().length > 0 ? (
        <ul>
          {calculateLetterDensity(text).map(({ letter, count, density }) => (
            <li key={letter}>
              <span>{letter.toUpperCase()}: </span>
              <span>{count} </span>
              <span>({density})</span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  style={{ width: density }}
                  aria-valuenow={density}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No characters found. Start typing to see letter density.</p>
      )}
    </div>
  );
}

export default LetterDensity;
