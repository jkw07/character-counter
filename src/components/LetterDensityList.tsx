type LetterDensityListProps = {
    text : string;
};

export const calculateLetterDensity = (text: string) => {
    const letters = text.toLowerCase().replace(/[^a-z]/g, "");
    const frequency: Record<string, number> = {};
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

export const LetterDensityList = ({text}: LetterDensityListProps) => {
    return (
        <ul>
            {calculateLetterDensity(text).map(({ letter, count, density }) => (
            <li key={letter} className="letter-item d-flex align-items-center mb-2">
                <span className="letter me-2">{letter.toUpperCase()}: </span>
                <div className="progress flex-grow-1">
                    <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: density }} aria-valuenow={parseFloat(density.replace('%', ''))} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
                <span className="count me-2">{count} </span>
                <span className="density me-2">({density})</span>
            </li>))}
        </ul>
    );
}