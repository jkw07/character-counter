type StatisticsPanelProps = {
  text: string;
};

function StatisticsPanel({ text }: StatisticsPanelProps) {
  const countSentences = (text: string): number => (text.match(/[^.!?]+[.!?]+/g) || []).length;
  const wordCount: number = text.trim().split(/\s+/).length;

  return (
    <div className="statistic-panel">
      <div className="statistics bg-success bg-gradient">
        <span>{text.length > 0 ? text.length : "0"}</span>
        <div> Total Characters</div>
      </div>
      <div className="statistics bg-danger bg-gradient">
        <span>{text.length > 0 ? wordCount : "0"}</span>
        <div> Word Count</div>
      </div>
      <div className="statistics bg-warning bg-gradient">
        <span>{countSentences(text)}</span>
        <div> Sentence Count</div>
      </div>
    </div>
  );
}

export default StatisticsPanel;
