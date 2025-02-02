function StatisticsPanel({ text }) {
  const countSentences = (text) => (text.match(/[^.!?]+[.!?]+/g) || []).length;
  const wordCount = text.trim().split(/\s+/).length;

  return (
    <div className="statistic-panel">
      <div className="statistics">
        <span>{text.length > 0 ? text.length : "0"}</span>
        <span> Total Characters</span>
      </div>
      <div className="statistics">
        <span>{text.length > 0 ? wordCount : "0"}</span>
        <span> Word Count</span>
      </div>
      <div className="statistics">
        <span>{countSentences(text)}</span>
        <span> Sentence Count</span>
      </div>
    </div>
  );
}

export default StatisticsPanel;
